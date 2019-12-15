import Vue from 'vue'

// Select an element
Vue.prototype.$$ = (el) => {
  if (process.client) {
    return document.querySelector(el)
  }
}

// Add event listener
Vue.prototype.$addEvent = (event, method) => {
  if (process.client) {
    window.addEventListener(event, method)
  }
}

// Get document width
Vue.prototype.$getDocWidth = () => {
  let width = 1920
  if (process.client) {
    width = window.innerWidth
  }

  return width
}

// Get scroll height
Vue.prototype.$getScrollPos = () => {
  let pos = 0
  if (process.client) {
    pos = window.scrollY
  }

  return pos
}

// Selector
Vue.prototype.$tags = (el, container = document) => {
  return container.getElementsByTagName(el)
}

// Add class
Vue.prototype.$addClass = (el, className) => {
  if (el) {
    if (typeof className === 'object') {
      // array
      el.classList.add(...className)
    } else {
      el.classList.add(className)
    }
  }
}

// Change class
Vue.prototype.$changeClass = (el, className) => {
  if (el) {
    el.className = className
  }
}

// Remove class
Vue.prototype.$removeClass = (el, className) => {
  if (el) {
    if (el.classList) {
      el.classList.remove(className)
    } else {
      el.className = el.className.replace(
        new RegExp(
          '(^|\\b)' + className.split(' ').join('|') + '(\\b|$)',
          'gi'
        ),
        ' '
      )
    }
  }
}

// Add style
Vue.prototype.$css = (el, styleName, styleValue) => {
  if (el) {
    el.style.cssText = styleName + ': ' + styleValue + ';'
  }
}

// Add animation (animate.css)
Vue.prototype.$animateElement = (el, animation, offset = 0) => {
  const $el = document.querySelectorAll(el) // there could be more element

  $el.forEach((el) => {
    const boundingClientRect = el.getBoundingClientRect()
    let top = boundingClientRect.top
    const bottom = boundingClientRect.bottom

    const vHeight = window.innerHeight || document.documentElement.clientHeight

    top = top + offset // offsetting

    // If the $el is in the viewport (+ some offset in the previous line)
    if ((top > 0 || bottom > 0) && top < vHeight) {
      el.classList.add(...['animated', animation])
    }
  })
}
