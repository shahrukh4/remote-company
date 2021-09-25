import axios from 'axios'
import { GET_PDF_DATA } from '@/js/store/action.types'
import { SET_PDF_DATA } from '@/js/store/mutation.types'

/**
 * Whether want to namespace it ot not
 * @type {boolean}
 */
export const namespaced = true

/**
 * State related to Ratings
 * @type {Object}
 */
export const state = {
  pdfs: []
}

/**
 * Actions related to PDF
 * @type {Object}
 */
export const actions = {
  /**
   * Fetch PDF data from DB
   * @param {object} context
   */
  [GET_PDF_DATA] ({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/pdfs')
      .then(({data}) => {
        commit(SET_PDF_DATA, {pdfs: data})
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
 * Mutations related to PDF
 * @type {Object}
 */
export const mutations = {
  /**
   * Common mutator for setting up the state
   * @param {object} state
   * @param {object} payload
   */
  [SET_PDF_DATA] (state, payload) {
    Object.assign(state, payload)
  }
}
