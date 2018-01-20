const hasProp = (instance, prop) => {
  const $options = instance.$options || {}
  const propsData = $options.propsData || {}
  return prop in propsData
}
const filterProps = (props, propsData = {}) => {
  const res = {}
  Object.keys(props).forEach((k) => {
    if (k in propsData || props[k] !== undefined) {
      res[k] = props[k]
    }
  })
  return res
}

const getOptionProps = (instance) => {
  const { $options = {}, $props = {}} = instance
  return filterProps($props, $options.propsData)
}

const getComponentFromProp = (instance, prop) => {
  const h = instance.$createElement
  const temp = instance[prop]
  if (temp !== undefined) {
    return typeof temp === 'function' ? temp(h) : temp
  }
  return instance.$slots[prop]
}

export { hasProp, filterProps, getOptionProps, getComponentFromProp }
export default hasProp