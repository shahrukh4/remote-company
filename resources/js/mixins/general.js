import moment from "moment";

export default {
  filters: {
    /**
     * Handle pretty date filter in format like 21 Sept, 2020
     * @return {string}
     */
    prettyDate (date) {
      return (moment(date)).format('DD MMM, YYYY')
    }
  }
}