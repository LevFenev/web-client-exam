export const state = () => ({
    tableData: []
})
export const mutations = {
    setTableData(state, data) {
        state.tableData = data
    },
    setPageData(state, data) {
        state.pagesData = data
    }
}
export const getters = {}

/* 
    Базовый url: https://demo-api.vsdev.space	
	
	GET /api/brom/left_widget - контент левого виджета
	GET /api/brom/home_page - контент главной страницы
	GET /api/brom/about_page - контент страницы "О нас"

	GET /api/brom/sales - список объявлений
	GET /api/brom/sales/form - список полей формы добавления
	POST /api/brom/sales - добавление объявления
*/

export const actions = {
    async getTableData({commit}) {
        const table = await this.$axios.$get("https://demo-api.vsdev.space/api/brom/table")

        commit("setTableData", table)
    },
    async getDefaultPagesData({commit}) {
        let homePage = await this.$axios.$get("/api/brom/home_page")
        let aboutPage = await this.$axios.$get("/api/brom/about_page")
        let widget = await this.$axios.$get("/api/brom/left_widget")

        commit("setPagesData", {
            homePage,
            aboutPage,
            widget
        })
    }
}