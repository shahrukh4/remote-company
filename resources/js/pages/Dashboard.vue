<template>
  <div class="content">
    <div class="md-layout">
      <div
        role="button"
        class="md-layout-item"
        @click="$router.push('/admin/pdfs')"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <md-icon>picture_as_pdf</md-icon>
          </template>

          <template slot="content">
            <p class="category">Total PDFs</p>
            <h3 class="title">+{{dashboard.pdfs ? dashboard.pdfs.length : 0}}</h3>
          </template>

          <template slot="footer">
            <div class="row w-100 d-flex">
              <div class="stats col-md-8">
                <md-icon>update</md-icon>
                Stats for total pdfs managed
              </div>
              <div class="stats col-md-4 text-right"><router-link to="/">Go to page</router-link></div>
            </div>
          </template>
        </stats-card>
      </div>
      <div
        role="button"
        class="md-layout-item"
        @click="$router.push('/admin/html')"
      >
        <stats-card data-background-color="grey">
          <template slot="header">
            <md-icon>code</md-icon>
          </template>
          <template slot="content">
            <p class="category">Total HTML Snippets</p>
            <h3 class="title">+{{dashboard.html ? dashboard.html.length : 0}}</h3>
          </template>
          <template slot="footer">
            <div class="row w-100 d-flex">
              <div class="stats col-md-8">
                <md-icon>update</md-icon>
                Stats for HTML Code managed
              </div>
              <div class="stats col-md-4 text-right"><router-link to="/">Go to page</router-link></div>
            </div>
          </template>
        </stats-card>
      </div>
      <div
        role="button"
        class="md-layout-item"
        @click="$router.push('/admin/links')"
      >
        <stats-card data-background-color="red">
          <template slot="header">
            <md-icon>link</md-icon>
          </template>
          <template slot="content">
            <p class="category">Total Links</p>
            <h3 class="title">+{{dashboard.pdfs ? dashboard.pdfs.length : 0}}</h3>
          </template>
          <template slot="footer">
            <div class="row w-100 d-flex">
              <div class="stats col-md-8">
                <md-icon>update</md-icon>
                Stats for total links managed
              </div>
              <div class="stats col-md-4 text-right"><router-link to="/">Go to page</router-link></div>
            </div>
          </template>
        </stats-card>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    StatsCard
  } from '@/js/components'

  import {mapState, mapActions} from 'vuex'
  import {GET_DASHBOARD_DATA} from '@/js/store/action.types'

  export default {
    name: 'Dashboard',
    components: {StatsCard},
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        dashboard: state => state.dashboard.dashboard
      })
    },
    created() {
      this.getDashboardDetails()
    },
    methods: {
      ...mapActions({
        getDashboardDetails: `dashboard/${GET_DASHBOARD_DATA}`
      })
    }
}
</script>
