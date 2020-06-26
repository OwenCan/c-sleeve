import {Http} from "../utils/http";

/**
 * 轮播效果Banner
 */
class Banner{
    static locationB = 'b-1';

    static async getHomeLocationB() {
        return await Http.request({
            url: `banner/name/${Banner.locationB}`
        })
    }
}

export {
    Banner
}