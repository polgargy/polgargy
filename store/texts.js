export const state = () => ({
  meta: {},
  nav: [],
  intro: {},
  about: {},
  services: [],
  references: {},
  contact: {}
})

export const mutations = {
  mutSetMeta(state, metaData) {
    const meta = metaData

    meta.meta_keywords_str_hu = ''
    meta.meta_keywords_str_en = ''

    metaData.meta_keywords_hu.forEach((el, index, keywords) => {
      meta.meta_keywords_str_hu += el.keyword
      meta.meta_keywords_str_hu += index < keywords.length - 1 ? ', ' : ''
    })

    metaData.meta_keywords_en.forEach((el, index, keywords) => {
      meta.meta_keywords_str_en += el.keyword
      meta.meta_keywords_str_en += index < keywords.length - 1 ? ', ' : ''
    })

    state.meta = meta
  },

  mutSetContent(state, data) {
    state.nav = data.nav.nav_items
    state.intro = data.intro
    state.about = data.about
    state.services = data.services
    state.references = data.references
    state.contact = data.contact
  }
}

// export const actions = {}

export const getters = {
  getMeta(state) {
    return state.meta
  },
  getNav(state) {
    return state.nav
  },
  getIntro(state) {
    return state.intro
  },
  getAbout(state) {
    return state.about
  },
  getServices(state) {
    return state.services
  },
  getReferences(state) {
    return state.references
  },
  getContact(state) {
    return state.contact
  }
}
