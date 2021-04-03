//decoupled data access layer

import _merge from 'lodash.merge'

export default {

  install(Vue, { endpoint = '', resources = {} }) {
    // add the method to the Vue prototype
    Vue.prototype.$getResource = function(method, options) {
      let name = this.$options.resource
      // handle missing info
      if (!name || !resources[name] || !resources[name][method]) return;
      let { path, resolve } = resources[name][method](options)

      const mappers = {
        merge: dataSet => {
          _merge(this.$data, dataSet)
          return Promise.resolve(dataSet)
        },
        set: dataSet => {
          Object.keys(dataSet).forEach(prop => {
            this.$set(this.$data, prop, dataSet[prop])
          })

          return Promise.resolve(dataSet)
        }
      }

      // fetch and parse resource then pass it to the resolver
      return fetch(endpoint + path)
        .then(response => response.json())
        .then(response => resolve(response, mappers))
    }
  }
}