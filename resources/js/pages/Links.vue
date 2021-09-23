<template>
  <div class="content">
    <div class="md-layout">
      <div
          class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <div class="md-layout md-alignment-center md-alignment-right">
              <div class="md-layout-item">
                <h4 class="title">Links Table</h4>
                <p class="category">All the available links here</p>
              </div>
              <div class="md-layout-item">
                <md-button class="md-dense md-raised md-primary">Raised</md-button>
              </div>
            </div>
          </md-card-header>
          <md-card-content>
            <md-table v-model="links">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Title">{{ item.title.substring(0, 30) }}</md-table-cell>
                <md-table-cell md-label="Link">{{ item.link.substring(0, 30) }}</md-table-cell>
                <md-table-cell md-label="Created">{{ item.created_at | prettyDate }}</md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'

  export default {
    name: 'Links',
    data() {
      return {
        links: [
          {
            id: 1,
            title: 'Shahrukh',
            link: "helopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.com",
            created_at: "2018-06-06 10:10:10"
          },
          {
            id: 2,
            title: 'Anwar',
            link: "helopeter.com",
            created_at: "2018-06-06 10:10:10"
          },
          {
            id: 3,
            title: 'Farha',
            link: "helopeter.com",
            created_at: "2018-06-06 10:10:10"
          },{
            id: 4,
            title: 'Bobdu',
            link: "helopeter.com",
            created_at: "2018-06-06 10:10:10"
          }
        ]
      };
    },
    filters: {
      prettyDate (date) {
        return moment(date).format('DD MMM YYYY')
      }
    }
  }
</script>

<style scoped>

</style>