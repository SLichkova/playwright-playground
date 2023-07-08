// import api from "api";
// const sdk = api('@leanplum/v1#4c465qnlda3dxyl');
const sdk = require('api')('@leanplum/v1#4c465qnlda3dxyl');

describe("Test", () => {
  it("Test", async () => {
    await sdk.server('https://api.leanplum.com');
    const response = await sdk.postApiActionStartcampaign({
      appId: 'app_hVtajoTJChdcCpLgGfOZHVOB7X94GDvAJLghKmzsBB4',
      clientKey: 'prod_ZxuB6bkL61yuUX1Ffbs5CGHWbx24BAr1pXnEBMbxadM',
      apiVersion: '1.0.6',
      userId: 'slichkova',
      createDisposition: 'CreateIfNeeded',
      devMode: false
    }, { action: 'setUserAttributes' })
      .then(({ data }) => console.log(data))
      .catch(err => console.error(err));
  });
});