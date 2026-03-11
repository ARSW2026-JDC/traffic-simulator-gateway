import 'dotenv/config';
import * as joi from 'joi';
import type { StringValue } from 'ms';

interface EnvVars {
    PORT: number;
    API_KEY: string;
    AUTH_DOMAIN: string;
    PROJECT_ID: string;
    STORAGE_BUCKET: string;
    MESSAGING_SENDER_ID: string;
    APP_ID: string;
    MEASUREMENT_ID: string;
    THROTTLE_TTL: number;
    THROTTLE_LIMIT: number;
    FIREBASE_CLIENT_EMAIL: string;
    FIREBASE_PRIVATE_KEY: string;
    SIMULATOR_URL: string;
}
const envsSchema = joi
    .object({
        PORT: joi.number().required(),
        API_KEY: joi.string().required(),
        AUTH_DOMAIN: joi.string().required(),
        PROJECT_ID: joi.string().required(),
        STORAGE_BUCKET: joi.string().required(),
        MESSAGING_SENDER_ID: joi.string().required(),
        APP_ID: joi.string().required(),
        MEASUREMENT_ID: joi.string().required(),
        THROTTLE_TTL: joi.number().default(60 * 1000), // 1 minute
        THROTTLE_LIMIT: joi.number().default(100), // 100 requests per TTL
        FIREBASE_CLIENT_EMAIL: joi.string().required(),
        FIREBASE_PRIVATE_KEY: joi.string().required(),
        SIMULATOR_URL: joi.string().uri().required(),
    })
    .unknown(true);

const result = envsSchema.validate(process.env);
if (result.error) {
    throw new Error(`Config validation error: ${result.error.message}`);
}
const envVars = result.value as EnvVars;

export const envs = {
    port: envVars.PORT,
    apiKey: envVars.API_KEY,
    authDomain: envVars.AUTH_DOMAIN,
    projectId: envVars.PROJECT_ID,
    storageBucket: envVars.STORAGE_BUCKET,
    messagingSenderId: envVars.MESSAGING_SENDER_ID,
    appId: envVars.APP_ID,
    measurementId: envVars.MEASUREMENT_ID,
    throttleTtl: envVars.THROTTLE_TTL,
    throttleLimit: envVars.THROTTLE_LIMIT,
    firebaseClientEmail: envVars.FIREBASE_CLIENT_EMAIL,
    firebasePrivateKey: envVars.FIREBASE_PRIVATE_KEY,
    simulatorUrl: envVars.SIMULATOR_URL,
};