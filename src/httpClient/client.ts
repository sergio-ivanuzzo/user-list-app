import Axios from "axios";
import * as qs from "qs";

console.log(process.env);

export const client = Axios.create({
    baseURL: process.env.API_URL,
    paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
});
