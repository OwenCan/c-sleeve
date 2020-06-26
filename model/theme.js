/*
我们需要寻找业务对象，非常重要
例如：theme，banner，sku，address,user
*/
import {Http} from "../utils/http";

/**
 * 主题效果
 */
class Theme {
    /*货物主题*/
    static async getHomeLocationA() {
        return await Http.request({
            url: `theme/by/names`,
            data: {
                names: 't-1'
            }
        });
    }
}

export {
    Theme
}