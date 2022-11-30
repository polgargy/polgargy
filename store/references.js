export const state = () => ({
  references: [],
  reference: {}
})

export const mutations = {
  mutSetReferences(state, referencesData) {
    state.references = referencesData
  },

  mutSetReference(state, reference) {
    // have to reset them because this reference is pointing to state.references
    reference.gallery = {
      thumbnails: [],
      originals: []
    }

    // VueGallery needs one (in this case two... original + thumb) arrays (with the same sizes)
    reference.screens.forEach((el) => {
      reference.gallery.thumbnails.push(el.thumbnail.url)
      reference.gallery.originals.push(el.image.url.replace('-scaled', ''))
    })

    state.reference = reference
  }
}

export const actions = {
  async fetchOne({ commit, state }, slug) {
    const references = state.references
    const reference = references.filter((obj) => {
      return obj.slug === slug
    })

    await commit('mutSetReference', reference[0])
  }
}

export const getters = {
  getAll(state) {
    return state.references
  },

  getReference(state) {
    return state.reference
  }
}
