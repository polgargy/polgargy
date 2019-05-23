export const state = () => ({
  about: {
    text: {
      hu:
        '<p>Már gyerekkorom óta érdekelt az informatika, mindig is fogékony voltam a kreatív, logikán alapuló feladatokra. Világéletemben szerettem a kihívásokat, illetve új, számomra érdekes dolgokat megismerni.</p><p>2014 óta dolgozom a webfejlesztés területén. Ezalatt az idő alatt számtalan érdekes projektben volt részem, dolgoztam már nagy cégnél és kisebb webfejlesztő ügynökségnél egyaránt. Kedvelem a csapatmunkát, két éve pedig szabadúszóként dolgozom és úgy érzem ez a "magányosabb" munkavégzés sem jelentett problémát.</p><p><em>"Válassz olyan munkát, amit szeretsz csinálni, és soha életedben nem kell dolgoznod."</em><br>Ez sokak számára közhelyes lehet ugyan, de visszaemlékezve mindig is ennek az elérésére törekedtem, ez az igazi motivációm.</p>',
      en:
        "<p>I've been interested in IT since I was a child and I've always been open to creative, logic-based tasks. I love challenges and meeting new, exciting technologies.</p><p>I've been working as a web developer since 2014. During this time I had countless interesting projects and I've worked for a large multinational company as well as smaller web development agencies. I really like teamwork, but I work as a freelancer for two years, and I feel that this \"lonely\" work has not been a problem for me either.</p><p><em>\"Choose a job you love, and you will never have to work a day in your life.\"</em><br>This may be commonplace for many, but I've always tried to achieve this, that's what I call my real motivation.</p>"
    }
  },
  services: [
    {
      icon: 'fas fa-mobile-alt',
      text: {
        hu:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        en:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    },
    {
      icon: 'fas fa-mobile-alt',
      text: {
        hu:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        en:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    },
    {
      icon: 'fas fa-mobile-alt',
      text: {
        hu:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        en:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    }
  ],
  contact: {
    text: {
      hu:
        'Amennyiben felkeltettem az érdeklődését, árajánlatkéréshez kérem keressen a következő elérhetőségeken',
      en: 'In case you are interested, please contact me for quotation'
    }
  }
})

export const mutations = {}

export const actions = {}

export const getters = {
  getAbout(state) {
    return state.about
  },
  getServices(state) {
    return state.services
  },
  getContact(state) {
    return state.contact
  }
}
