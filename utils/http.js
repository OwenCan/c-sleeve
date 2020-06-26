import {config} from "../config/config";
import {promisic} from "./util";

class Http {
    static async request({url, data, mathod = 'GET'}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            data,
            method,
            header: {
                appkey: config.appkey
            }
        })
        return res.data;
    }
}

//使用await的，一定是要返回一个结果，await返回的事promise
//软件上的都可以通过一次次的封装去解决

export {
    Http
}