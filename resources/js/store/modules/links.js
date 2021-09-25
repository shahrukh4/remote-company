import axios from 'axios'
import { GET_LINKS } from '@/js/store/action.types'
import { SET_LINKS_DATA } from '@/js/store/mutation.types'

/**
 * Whether want to namespace it ot not
 * @type {boolean}
 */
export const namespaced = true

/**
 * State related to Foods
 * @type {Object}
 */
export const state = {
  links: []
}

/**
 * Actions related to Foods
 * @type {Object}
 */
export const actions = {
  /**
   * Fetch food data from DB
   * @param {object} context
   */
  [GET_LINKS] ({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/links')
      .then(({data}) => {
        commit(SET_LINKS_DATA, {links: data})
        resolve()
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
    })
  }
}

/**
 * Mutations related to Foods
 * @type {Object}
 */
export const mutations = {
  /**
   * Common mutator for setting up the state
   * @param {object} state
   * @param {object} payload
   */
  [SET_LINKS_DATA] (state, payload) {
    Object.assign(state, payload)
  }
}
