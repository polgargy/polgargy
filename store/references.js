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
        hu:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro assumenda maiores itaque maxime perferendis suscipit perspiciatis dolor ab autem aperiam eius, repellat, fugiat error tempora eveniet minima, fuga deleniti quas.',
        en:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro assumenda maiores itaque maxime perferendis suscipit perspiciatis dolor ab autem aperiam eius, repellat, fugiat error tempora eveniet minima, fuga deleniti quas.'
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
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, tenetur debitis impedit fuga dolorem sit, corporis vitae tempore ipsa sequi ducimus. Nulla numquam ut necessitatibus tempore perspiciatis quas veritatis, soluta.',
        en:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, tenetur debitis impedit fuga dolorem sit, corporis vitae tempore ipsa sequi ducimus. Nulla numquam ut necessitatibus tempore perspiciatis quas veritatis, soluta.'
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
        hu:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum consectetur magni, facilis quibusdam! Quaerat dignissimos laborum alias dolores aspernatur deserunt quae possimus quia, fugiat cupiditate, delectus adipisci ipsa nisi suscipit!',
        en:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum consectetur magni, facilis quibusdam! Quaerat dignissimos laborum alias dolores aspernatur deserunt quae possimus quia, fugiat cupiditate, delectus adipisci ipsa nisi suscipit!'
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
        hu:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse temporibus nam odit corporis eos voluptatibus quis obcaecati, sunt amet nemo similique debitis, nihil hic dignissimos optio mollitia sit natus modi.',
        en:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse temporibus nam odit corporis eos voluptatibus quis obcaecati, sunt amet nemo similique debitis, nihil hic dignissimos optio mollitia sit natus modi.'
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
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus, cupiditate, laborum at similique, repudiandae temporibus tenetur molestias cumque itaque incidunt recusandae enim inventore voluptatem quae aspernatur consequuntur iusto provident.',
        en:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam possimus, cupiditate, laborum at similique, repudiandae temporibus tenetur molestias cumque itaque incidunt recusandae enim inventore voluptatem quae aspernatur consequuntur iusto provident.'
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
        hu:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias modi amet quidem animi, deleniti, cupiditate assumenda et neque ipsa maxime laudantium, sapiente odio impedit delectus quas commodi minima consectetur explicabo.',
        en:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias modi amet quidem animi, deleniti, cupiditate assumenda et neque ipsa maxime laudantium, sapiente odio impedit delectus quas commodi minima consectetur explicabo.'
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
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores adipisci, quae, cumque pariatur cupiditate atque nobis, quas ratione sit et temporibus impedit. Incidunt in facilis ab minus laborum commodi libero.',
        en:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores adipisci, quae, cumque pariatur cupiditate atque nobis, quas ratione sit et temporibus impedit. Incidunt in facilis ab minus laborum commodi libero.'
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
        hu:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti soluta, enim iste saepe fugiat recusandae accusamus atque voluptate ducimus laudantium sint suscipit animi, praesentium neque deserunt culpa quas laboriosam necessitatibus.',
        en:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti soluta, enim iste saepe fugiat recusandae accusamus atque voluptate ducimus laudantium sint suscipit animi, praesentium neque deserunt culpa quas laboriosam necessitatibus.'
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
