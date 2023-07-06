const definedTestGroups = require("../../api/test-group-definitions");

class JestConfigUtil {
  constructor(testGroups) {
    this.testGroups = testGroups;

    this.arguments = {
      saasModelerHost: "--saas-modeler-host",
      saasEngineHost: "--saas-engine-host",
      testGroup: "--group",
      testURL: "--test-url",
      containerGroup: "--container-group"
    };
  }

  applyProcessArgumentsToConfig(configuration) {
    let conf = JSON.parse(JSON.stringify(configuration));

    process.argv.forEach((arg) => {
      switch (this.getArgKey(arg)) {
        case this.arguments.saasModelerHost:
          if (!conf.globals.saasMode) break;

          conf.globals.modelerHost = this.getArgValue(arg);
          break;

        case this.arguments.saasEngineHost:
          if (!conf.globals.saasMode) break;

          conf.globals.engineHost = this.getArgValue(arg);
          break;

        case this.arguments.testGroup:
          conf = this.testGroupArgumentHandler(conf, this.getArgValue(arg));
          break;

        case this.arguments.testURL:
          conf.globals.testURL = this.getArgValue(arg);
          break;

        case this.arguments.containerGroup:
          conf.globals.containerGroup = this.getArgValue(arg);
          break;
      }
    });

    if (conf.globals.saasMode && (conf.globals.modelerHost === null || conf.globals.engineHost === null)) {
      throw Error(
        `Arguments ${this.arguments.saasModelerHost} and ${this.arguments.saasEngineHost} are required when using jest.api.saas.config.js. Example ${this.arguments.saasModelerHost}=https://modeler-atscale.noc.infra.atscale.com:443`
      );
    }

    return conf;
  }

  testGroupArgumentHandler(config, argValue) {
    const newConf = JSON.parse(JSON.stringify(config));
    const group = this.testGroups[argValue];

    if (!group) {
      throw Error(`Test group '${argValue}' not found`);
    }

    newConf.roots = group.testsToInclude;
    newConf.testPathIgnorePatterns = group.testsToExclude;

    return newConf;
  }

  getArgValue(arg) {
    return arg.split("=").reverse()[0];
  }

  getArgKey(arg) {
    return arg.split("=")[0];
  }
}

const jestConfig = new JestConfigUtil(definedTestGroups);

module.exports = jestConfig;
