export const state = () => ({
  references: [
    {
      slug: 'borsanyizsuzsanna',
      url: 'https://borsanyizsuzsanna.com',
      title: {
        hu: 'Borsányi Zsuzsanna',
        en: 'Zsuzsanna Borsányi'
      },
      description: {
        hu: 'Borsányi Zsuzsanna portfólió weboldala.',
        en: "Zsuzsanna Borsányi's portfolio website."
      },
      filesCount: 3,
      // VueGallery needs one (in this case two... original + thumb) arrays (with the same sizes)
      // so they're going to be set in mutSetReference mutation:
      images: {
        thumbnails: [],
        originals: []
      }
    },
    {
      slug: 'otpbanka',
      url: '',
      title: {
        hu: 'OTP Banka Intranet Portal',
        en: 'OTP Banka Intranet Portal'
      },
      description: {
        hu:
          'Az OTP Banka (Horvátország) intranet portálja, ami a Késmárki szoftverfejlesztő Kft. INDECS követeléskezelő rendszerével van összeköttetésben.',
        en:
          'The intranet portal of OTP Banka (Croatia), which is connected to the INDECS debt collection system of Késmárki Software Development Ltd.'
      },
      filesCount: 3,
      images: {
        thumbnails: [],
        originals: []
      }
    },
    {
      slug: 'kesmarki',
      url: 'https://www.kesmarki.com',
      title: {
        hu: 'Késmárki szoftverfejlesztő Kft.',
        en: 'Késmárki Software Development Ltd.'
      },
      description: {
        hu: 'A Késmárki szoftverfejlesztő Kft.-t bemutató honlap.',
        en: 'The website of Késmárki Software Development Ltd.'
      },
      filesCount: 3,
      images: {
        thumbnails: [],
        originals: []
      }
    },
    {
      slug: 'cngtoltoallomas',
      url: 'https://cngtoltoallomas.hu',
      title: {
        hu: 'CNG Töltőállomás Kft.',
        en: 'CNG Filling Station Ltd.'
      },
      description: {
        hu: 'A CNG Töltőállomás Kft.-t bemutató honlap.',
        en: 'The website of CNG Filling Station Ltd.'
      },
      filesCount: 3,
      images: {
        thumbnails: [],
        originals: []
      }
    },
    {
      slug: 'ceginformacio',
      url: 'https://ceginformacio.hu',
      title: {
        hu: 'Céginformáció',
        en: 'Céginformáció - Company Register'
      },
      description: {
        hu:
          'Magyarország egyik legnagyobb cégkeresője, cégkivonat és cégtörténet adatbázisa.',
        en:
          "One of Hungary's largest company registers, company extracts and company history database."
      },
      filesCount: 3,
      images: {
        thumbnails: [],
        originals: []
      }
    },
    {
      slug: 'transferpricing24',
      url: 'http://transferpricing24.hu',
      title: {
        hu: 'Transferprincing24',
        en: 'Transferprincing24'
      },
      description: {
        hu: 'A ceginformacio.hu transzferár dokumentáció készítő weboldala.',
        en:
          'The transfer pricing documentation creator website of ceginformacio.hu.'
      },
      filesCount: 3,
      images: {
        thumbnails: [],
        originals: []
      }
    },
    {
      slug: 'ugyfelportal',
      url: '',
      title: {
        hu: 'Magyar Faktorház Ügyfélportál',
        en: 'MFH - Client Portal'
      },
      description: {
        hu:
          'A Magyar Faktorház ügyfélportálja, ami a Késmárki szoftverfejlesztő Kft. INDECS követeléskezelő rendszerével van összeköttetésben.',
        en:
          'The intranet portal of MFH (Hungarian Factoring House), which is connected to the INDECS debt collection system of Késmárki Software Development Ltd.'
      },
      filesCount: 3,
      images: {
        thumbnails: [],
        originals: []
      }
    },
    {
      slug: 'scafellpike',
      url: 'https://www.scafellpike.org.uk',
      title: {
        hu: 'Scafell Pike',
        en: 'Scafell Pike'
      },
      description: {
        hu: 'Anglia legmagasabb csúcsáról szóló weboldal / blog.',
        en: "A website / blog about England's highest peak."
      },
      filesCount: 3,
      images: {
        thumbnails: [],
        originals: []
      }
    }
  ],
  reference: {}
})

export const mutations = {
  mutSetReference(state, reference) {
    // have to reset them because this reference is pointing to state.references
    reference.images.thumbnails = []
    reference.images.originals = []

    for (let i = 1; i <= reference.filesCount; i++) {
      // const file = reference.files[i]
      reference.images.thumbnails.push(
        process.env.refPath + reference.slug + '/thumb' + i + '.png'
      )
      reference.images.originals.push(
        process.env.refPath + reference.slug + '/' + i + '.png'
      )
    }

    state.reference = reference
  }
}

export const actions = {
  fetchOne(vuexContext, slug) {
    const references = vuexContext.state.references
    const reference = references.filter(obj => {
      return obj.slug === slug
    })

    vuexContext.commit('mutSetReference', reference[0])
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
