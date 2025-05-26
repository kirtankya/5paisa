import axios from "axios";
import { BASE_URL } from "../config.js";
import { authHeader } from "../helpers/helpers.js";
export const API_PREFIX = "";
export const axiosInstance = axios?.create({
  baseURL: `${BASE_URL}/${API_PREFIX}`,
});
export async function Get_ServerSide_Request(ContentType, url, config = {}) {
  return await axiosInstance
    .get(url, { params: config, headers: authHeader(ContentType) })
    .then((response) => response)
    .catch((error) => error.response);
}
export async function Post_ClientSide_Request(
  ContentType,
  url,
  data,
  config = {}
) {
  return axiosInstance
    .post(url, data, { ...config, headers: authHeader(ContentType) })
    .then((response) => response)
    .catch((error) => error.response);
}
