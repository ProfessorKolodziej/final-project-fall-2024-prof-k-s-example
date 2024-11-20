// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
// See https://www.npmjs.com/package/webflow-api documentation.
// https://developers.webflow.com/data/reference/site-token
import webflowApi from 'https://cdn.jsdelivr.net/npm/webflow-api@2.4.2/+esm'

const WebflowClient = webflowApi.WebflowClient;

const token = '205f078bc1aa70ad2a2c96340cec0b65b040cea8b35c67f87a99815da03286da';
const webflow = new WebflowClient({ accessToken: token });

const site_id = '673559d7cc5c9c0356658aaa';

fetch(`https://api.webflow.com/sites/673559d7cc5c9c0356658aaa/`, {
	headers: {
		'Authorization': `Bearer ${token}`
	}
})
	.then(response => response.json())
	.then(data => console.log(data));
/*
webflow.sites.get('673559d7cc5c9c0356658aaa')
	.then(response => response.json)
	.then(data => console.log(data));*/
/*
(async () => {
	try {
		const sites = await webflow.sites.list();
		console.log(sites);
	} catch (error) {
		console.error('Error fetching sites:', error);
	}
})();
*/
