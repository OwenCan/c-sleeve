import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/categroy";
import {Activity} from "../../model/activity";


Page({

    /**
     * 页面的初始数据
     */
    data: {
        themeA: null,
        bannerB: null,
        grid: [],
        activity:null
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
        const grid = await Category.getHomeLocationC();
        const activity = await Activity.getHomeLocationD();
        this.setData({
            themeA:themeA[0],bannerB,grid,activity
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