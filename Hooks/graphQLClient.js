import { GraphQLClient } from "graphql-request";
import { STRAPI_BASE_URL_GQ } from "../config";
export const graphcms = new GraphQLClient(STRAPI_BASE_URL_GQ);