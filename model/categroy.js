import {Http} from "../utils/http";

/**
 * 六宫格展示
 */
class Category{
    static async getHomeLocationC() {
        return await Http.request({
            url: `category/grid/all`
        })
    }
}

export {
    Category
}