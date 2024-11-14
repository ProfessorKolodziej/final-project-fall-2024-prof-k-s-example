// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
// See https://www.npmjs.com/package/webflow-api documentation.
// https://developers.webflow.com/data/reference/site-token
import * as webflowApi from 'https://esm.run/webflow-api';

const WebflowClient = webflowApi.WebflowClient;

const token = '479e9df28216b448919da5f910e49ae546da588177e078477e37e12ee5f48a4e';
const webflow = new WebflowClient({ accessToken: token });

(async () => {
	try {
		const sites = await webflow.sites.list();
		console.log(sites);
	} catch (error) {
		console.error('Error fetching sites:', error);
	}
})();
