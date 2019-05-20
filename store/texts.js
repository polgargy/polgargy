export const state = () => ({
  about: {
    title: {
      hu: 'Rólam',
      en: 'Rólam'
    },
    text: {
      hu:
        '<p>Már gyerekkorom óta érdekelt az informatika, mindig is fogékony voltam a kreatív, logikán alapuló feladatokra. Világéletemben szerettem a kihívásokat, illetve új, számomra érdekes dolgokat megismerni.</p><p>2014 óta dolgozom a webfejlesztés területén. Ezalatt az idő alatt számtalan érdekes projektben volt részem, dolgoztam már nagy cégnél és kisebb webfejlesztő ügynökségnél egyaránt. Kedvelem a csapatmunkát, két éve pedig szabadúszóként dolgozom és úgy érzem ez a "magányosabb" munkavégzés sem jelentett problémát.</p><p><em>"Válassz olyan munkát, amit szeretsz csinálni, és soha életedben nem kell dolgoznod."</em><br>Ez sokak számára közhelyes lehet ugyan, de visszaemlékezve mindig is ennek az elérésére törekedtem, ez az igazi motivációm.</p>',
      en:
        '<p>Már gyerekkorom óta érdekelt az informatika, mindig is fogékony voltam a kreatív, logikán alapuló feladatokra. Világéletemben szerettem a kihívásokat, illetve új, számomra érdekes dolgokat megismerni.</p><p>2014 óta dolgozom a webfejlesztés területén. Ezalatt az idő alatt számtalan érdekes projektben volt részem, dolgoztam már nagy cégnél és kisebb webfejlesztő ügynökségnél egyaránt. Kedvelem a csapatmunkát, két éve pedig szabadúszóként dolgozom és úgy érzem ez a "magányosabb" munkavégzés sem jelentett problémát.</p><p><em>"Válassz olyan munkát, amit szeretsz csinálni, és soha életedben nem kell dolgoznod."</em><br>Ez sokak számára közhelyes lehet ugyan, de visszaemlékezve mindig is ennek az elérésére törekedtem, ez az igazi motivációm.</p>'
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
  references: {
    title: {
      hu: 'Néhány korábbi munkám',
      en: 'Néhány korábbi munkám'
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
  getReferences(state) {
    return state.references
  }
}
