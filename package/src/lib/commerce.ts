import Commerce from "@chec/commerce.js";
import { loadEnv } from 'vite';

const {PUBLIC_COMMERCEJS_KEY} = loadEnv('all',process.cwd(),'PUBLIC_COMMERCEJS_');

const publicKey = PUBLIC_COMMERCEJS_KEY;
const cpublicKey = publicKey?publicKey:"";
const isDevENV = process.env.NODE_ENV === 'development';

export const commerce = new Commerce(cpublicKey,isDevENV)