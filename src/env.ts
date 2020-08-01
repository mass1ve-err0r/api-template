/**
 * Template courtesy of ts-dotenv.
 * (adapted for the project)
 */
import {EnvType, load} from "ts-dotenv";


export type Env = EnvType<typeof schema>;

export const schema = {
    PORT: Number,
    JWT_SECRET: String
};

export let env: Env;

export function load_env(): void {
    env = load(schema);
}