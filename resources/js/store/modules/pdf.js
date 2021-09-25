import axios from 'axios'
import { SUBMIT_ORDER_RATING } from '@/js/store/action.types'

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
  ratings: []
}

/**
 * Actions related to Ratings
 * @type {Object}
 */
export const actions = {
  /**
   * Submit order ratings
   * @param {object} context
   */
  [SUBMIT_ORDER_RATING] ({commit}, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/order/${payload.orderId}/rating`, payload)
      .then(() => {
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
 * Mutations related to App
 * @type {Object}
 */
export const mutations = {

}
