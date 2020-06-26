import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/categroy";


Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: []
    },

    /**
     * 页面加载初始化
     * @param options
     * @returns {Promise<void>}
     */
    async onLoad (options) {
        await this.initAllData();
    },

    async initAllData() {
        const themeA = await Theme.getHomeLocationA()
        const bannerB = await Banner.getHomeLocationB();
        const grid = await Category.getGridCategory();
        this.setData({
            themeA:themeA[0],bannerB,grid
        })
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})