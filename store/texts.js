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
  mutSetMeta(state, meta) {
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
