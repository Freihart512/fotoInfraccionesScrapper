import * as GraphQlAPi from './GraphQLAPi';
import dotenv from 'dotenv';

dotenv.config();

const expressPort = Number.isNaN(process.env.EXPRESS_PORT)
  ? 5000
  : Number(process.env.EXPRESS_PORT);

await GraphQlAPi.InitializeApi(expressPort);
