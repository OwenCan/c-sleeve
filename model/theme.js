/*
我们需要寻找业务对象，非常重要
例如：theme，banner，sku，address,user
*/
import {Http} from "../utils/http";

/**
 * 主题效果
 */
class Theme {
    static locationA = 't-1';
    static locationE = 't-2';
    static locationF = 't-3';
    static locationH = 't-4';

    themes = []

    async getThemes(){
        const names = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        return await Http.request({
            url:`theme/by/names`,
            data:{
                names
            }
        })
    }

    /*货物主题*/
    async getHomeLocationA() {
        return this.themes.find(t => t.name = Theme.locationA);
    }

    /*Scroll主题*/
    async getHomeLocationE() {
        return this.themes.find(t => t.name = Theme.locationE);
    }
}

export {
    Theme
}