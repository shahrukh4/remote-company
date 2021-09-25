import axios from 'axios'
import { GET_HTML_DATA } from '@/js/store/action.types'
import { SET_HTML_DATA } from '@/js/store/mutation.types'

/**
 * Whether want to namespace it ot not
 * @type {boolean}
 */
export const namespaced = true

/**
 * State related to HTML
 * @type {Object}
 */
export const state = {
  html: []
}

/**
 * Actions related to HTML
 * @type {Object}
 */
export const actions = {
  /**
   * Fetch food data from DB
   * @param {object} context
   */
  [GET_HTML_DATA] ({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/html')
      .then(({data}) => {
        commit(SET_HTML_DATA, {html: data})
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
 * Mutations related to HTML
 * @type {Object}
 */
export const mutations = {
  /**
   * Common mutator for setting up the state
   * @param {object} state
   * @param {object} payload
   */
  [SET_HTML_DATA] (state, payload) {
    Object.assign(state, payload)
  }
}
