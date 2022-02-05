export const state = () => ({
    tableData: [],
    pagesData: {}
})
export const mutations = {
    setTableData(state, data) {
        state.tableData = data
    },
    setPagesData(state, data) {
        state.pagesData = data
    }
}
export const getters = {}

export const actions = {
    async getTableData({commit}) {
        const table = await this.$axios.$get("https://demo-api.vsdev.space/api/brom/sales")

        commit("setTableData", table)
    },
    async getDefaultPagesData({commit}) {
        let homePage = await this.$axios.$get("https://demo-api.vsdev.space/api/brom/home_page")
        let aboutPage = await this.$axios.$get("https://demo-api.vsdev.space/api/brom/about_page")
        let widget = await this.$axios.$get("https://demo-api.vsdev.space/api/brom/left_widget")

        commit("setPagesData", {
            homePage,
            aboutPage,
            widget
        })
    },
    async addTableItem({dispatch}, data) {
        await this.$axios.$post("https://demo-api.vsdev.space/api/brom/sales", data)
        dispatch("getTableData")
    }
}