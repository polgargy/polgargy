export const state = () => ({
  about: {
    text: {
      hu:
        '<p>Már gyerekkorom óta érdekelt az informatika, mindig is fogékony voltam a kreatív, logikán alapuló feladatokra. Mindig is szerettem a kihívásokat, illetve új, számomra érdekes technológiákat megismerni.</p><p>2014 óta dolgozom a webfejlesztés területén, ezalatt az idő alatt számtalan érdekes projektben volt részem. Lehetőségem volt tapasztalatot szerezni nagyobb cégnél és kisebb webfejlesztő ügynökségnél egyaránt. Három éve pedig szabadúszóként dolgozom.</p><p>Legyen szó kezdő vagy nagy múlttal rendelkező vállalkozásról, ha weboldalra van szüksége, bízom benne, hogy bennem megtalálja a számításait.</p>',
      en:
        "<p>I've been interested in IT since I was a child and I've always been open to creative, logic-based tasks. I love challenges and meeting new, exciting technologies.</p><p>I've been working as a web developer since 2014, during this time I had countless interesting projects. I had the oportunity to gain experience at large companies as well as smaller web development agencies and now I've been working as a freelancer for three years.<p>Whether it's a start-up or a business with a long history, if you need a website, I believe we can make an agreement.</p>"
    }
  },
  services: [
    {
      icon: 'fas fa-globe-europe',
      text: {
        hu: 'Egyedi, biztonságos, modern weboldalak fejlesztése kedvező áron',
        en:
          'Development of unique, secure, modern websites at a reasonable price'
      }
    },
    {
      icon: 'fas fa-mobile-alt',
      text: {
        hu:
          'Gyors, reszponzív, mobilra optimalizált, felhasználó és keresőbarát weboldalak',
        en:
          'Fast, responsive, mobile optimized, user and search engine friendly websites'
      }
    },
    {
      icon: 'fas fa-shopping-cart',
      text: {
        hu: 'Webshopok, online fizetési felületek integrálásával',
        en: 'Webshops, with integrated online payment interfaces'
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
