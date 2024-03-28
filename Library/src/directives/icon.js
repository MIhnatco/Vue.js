export default {
  beforeMount(el, binding) {
    const iconClass = `fa fa-${binding.value}`
    el.innerHTML += `<i class="${iconClass}"></i>`
  }
}
