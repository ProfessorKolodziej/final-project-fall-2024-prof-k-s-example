// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)
// See https://www.npmjs.com/package/webflow-api documentation.
import * as webflowApi from 'https://esm.run/webflow-api';
console.log(webflowApi);
/*
const authorizeUrl = WebflowClient.authorizeURL({
    state: "your_state",
    scope: "sites:read",
    clientId: "d5acc6ebff76c40af89863e115027ead06c665d8e5dfdec06bd8bd158a9c5211",
    redirctUri: "https://professorkolodziej.github.io/final-project-fall-2024-prof-k-s-example/",
});

console.log(authorizeUrl);

const accessToken = WebflowClient.getAccessToken({
    clientId: "d5acc6ebff76c40af89863e115027ead06c665d8e5dfdec06bd8bd158a9c5211",
    clientSecret: "758d39174212084c6e2726f8fae6571c1a2e71d6014f0adca9ee16649410330d",
    code: "your_authorization_code"
});

const webflow = new WebflowClient({ accessToken });

const site = webflow.sites.get("site-id");
*/
