export const actions = {
  async nuxtServerInit({ commit }) {
    await this.$axios
      .$get('/acf/v3/options/options')
      .then((res) => commit('texts/mutSetMeta', res.acf))

    await this.$axios
      .$get(`/wp/v2/pages/${this.$config.apiHomeId}`)
      .then((res) => {
        commit('texts/mutSetContent', res.acf)
      })

    await this.$axios.$get('/wp/v2/references').then((res) => {
      commit('references/mutSetReferences', res)
    })
  }
}
