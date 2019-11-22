import Axios from "axios";
import qs from "qs";

export const client = Axios.create({
    baseURL: process.env.API_URL,
    paramsSerializer: (params) => qs.stringify(params, {arrayFormat: 'repeat'}),
});
