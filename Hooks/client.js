import { STARPI_URL, STRAPI_BASE_URL, URL } from "@/config";
import { GraphQLClient } from "graphql-request";
export const graph = new GraphQLClient(STRAPI_BASE_URL);
export const graphcms1 = new GraphQLClient(URL);
export const graphcms2 = new GraphQLClient('https://countries.trevorblades.com');
// export const graphcms3 = new GraphQLClient('https://graphql.anilist.co');
