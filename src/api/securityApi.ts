import {instance} from "./common.api";

export const securityAPI = {
    async getCaptcha() {
        let res = await instance.get<{ url: string }>(`security/get-captcha-url`);
        return res.data;
    }
}