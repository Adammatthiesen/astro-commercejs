import { createResolver, defineIntegration } from "astro-integration-kit";
import { commerce } from "./lib/commerce.js";
import { loadEnv } from 'vite';

const {PUBLIC_COMMERCEJS_KEY} = loadEnv('all',process.cwd(),'PUBLIC_COMMERCEJS_');

const publicKey = PUBLIC_COMMERCEJS_KEY;
const isDevENV = process.env.NODE_ENV === 'development';
const ErrorString = "Your public API key must be provided as an environment variable named PUBLIC_COMMERCEJS_KEY. Obtain your Chec public key by logging into your Chec account and navigate to Setup > Developer, or can be obtained with the Chec CLI via with the command chec whoami";

const MerchantInfo = await commerce.merchants.about();
const fetchStatus = MerchantInfo.status;

export default defineIntegration({
	name: "astro-commercejs",
	setup(){
		const { resolve } = createResolver(import.meta.url);

		return {
			"astro:config:setup": ({ watchIntegration, logger }) => {
				watchIntegration(resolve());
				const logConfigSetup = logger.fork("astro-commercejs/config:setup");

				logConfigSetup.info("Checking for API Key...");

				if(isDevENV && !publicKey){
					logConfigSetup.error(ErrorString);
					throw Error();
				};
				
				if (isDevENV && publicKey){
					logConfigSetup.info("Public Key Present... Continuing");
				};
			},
			"astro:config:done": ({ logger }) => {
				const logConfigDone = logger.fork("astro-commercejs/config:done");

				logConfigDone.info("Integration Ready!");
				
				const logCheckCommerceStatus = logger.fork("astro-commercejs/commerceJS-API-status");

				logCheckCommerceStatus.info(fetchStatus)
			}
		}
	}
})
