let timer

const start = (e, binding) => {
  if (e.type === 'click' && e.button !== 0) {
    return
  }
  if (timer == null) {
    timer = setTimeout(() => {
      binding.value.fn(...binding.value.data)
    }, 800) // 1000ms for long press
  }
}

const cancel = () => {
  if (timer != null) {
    clearTimeout(timer)
    timer = null
  }
}

export default {
  beforeMount(el, binding) {
    // Make sure expression provided is a function
    if (typeof binding.value.fn !== 'function') {
      let warn = `[longpress:] la expresión proporcionada '${binding.value.fn}' no es una función, y debe serlo`
      console.warn(warn)
      return
    }
    if (typeof binding.value.data !== 'object') {
      let warn = `[longpress:] la expresión proporcionada '${binding.value.data}' no es un objeto (array), y deben serlo`
      console.warn(warn)
      return
    }
    el.addEventListener('mousedown', (e) => start(e, binding))
    el.addEventListener('touchstart', (e) => start(e, binding), { passive: true })
    el.addEventListener('click', cancel)
    el.addEventListener('mouseout', cancel)
    el.addEventListener('touchend', cancel)
    el.addEventListener('touchcancel', cancel)
  },
  unmounted(el) {
    el.removeEventListener('mousedown', start)
    el.removeEventListener('touchstart', start, { passive: true })
    el.removeEventListener('click', cancel)
    el.removeEventListener('mouseout', cancel)
    el.removeEventListener('touchend', cancel)
    el.removeEventListener('touchcancel', cancel)
  }
}
