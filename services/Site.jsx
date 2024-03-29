import http from "./httpServices";
import config from "../config.json";

const prefixUrl = `${config.api}site`

export const categorys = () => {
    return http.post(`${prefixUrl}/categorys`);
};

export const firstPage = () => {
    return http.post(`${prefixUrl}/firstPage`);
};
