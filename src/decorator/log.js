export default function log (options) {
  return function (target, key, descriptor) {
    const method = descriptor.value
    descriptor.value = async function () {
      let ret
      try {
        ret = await method.apply(this, arguments)
        if (ret && ret.indexOf('noBuried') > -1) {
          console.log('noBuried')
        } else {
          console.log('buried')
        }
      } catch (e) {
        console.log(e)
      }
      return ret
    }
  }
}
