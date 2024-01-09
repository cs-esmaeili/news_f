import http from "./httpServices";
import config from "../config.json";

const prefixUrl = `${config.api}user`

export const registerPure = (data) => {
    return http.post(`${prefixUrl}/registerPure`, JSON.stringify(data));
};

