import axios from 'axios'
import { ORDER_FOOD, GET_FOOD_DATA } from '@/js/store/action.types'
import {SET_ORDER_DATA} from '@/js/store/mutation.types'

/**
 * Whether want to namespace it ot not
 * @type {boolean}
 */
export const namespaced = true

/**
 * State related to Orders
 * @type {Object}
 */
export const state = {
  orders: []
}

/**
 * Actions related to Orders
 * @type {Object}
 */
export const actions = {
  /**
   * Fetch orders from DB
   * @param {object} context
   */
  [GET_FOOD_DATA] ({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/orders')
      .then(({data}) => {
        commit(SET_ORDER_DATA, {orders: data})
        resolve()
      })
      .catch((error) => {
        console.log(error)
        reject(error)
      })
    })
  },
  /**
   * Order food and store
   * @param {object} context
   */
  [ORDER_FOOD] ({commit}, {quantity, foodId, userId}) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/order/${foodId}`, {
        userId: userId,
        quantity: quantity
      })
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
 * Mutations related to Orders
 * @type {Object}
 */
export const mutations = {
  /**
   * Common mutator for setting up the state
   * @param {object} state
   * @param {object} payload
   */
  [SET_ORDER_DATA] (state, payload) {
    Object.assign(state, payload)
  }
}
