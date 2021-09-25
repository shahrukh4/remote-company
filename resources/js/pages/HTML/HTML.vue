<template>
 <!-- HTML Content Section Begins -->
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <!-- HTML Card Header Begins -->
          <md-card-header data-background-color="green">
            <div class="md-layout md-alignment-center-center">
              <div class="md-layout-item">
                <h4 class="title">HTML Table</h4>
                <p class="category">All the available HTML here</p>
              </div>
              <div class="md-layout-item text-right">
                <md-button class="md-dense md-raised md-primary" @click="$router.push('html/add')">Add HTML</md-button>
              </div>
            </div>
          </md-card-header> <!-- HTML Card Header Ends -->
          <!-- HTML Card Content Begins -->
          <md-card-content>
            <md-table v-model="htmlCodes.html">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Title">{{ item.title.substring(0, 30) }}</md-table-cell>
                <md-table-cell md-label="Description">{{ item.description.substring(0, 30) }}</md-table-cell>
                <md-table-cell md-label="Created">{{ item.created_at | prettyDate }}</md-table-cell>
                <md-table-cell md-label="Action" >
                  <md-icon @click.native="$router.push(`html/${item.id}/edit`)">edit</md-icon>
                  <md-icon @click.native="handleDelete(item.id)">delete</md-icon>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content> <!-- HTML Card Content End -->
        </md-card>
      </div>
    </div>
    <!-- Action Dialog Begins -->
    <md-dialog-confirm
        md-title="Are you sure, you want to delete this HTML code?"
        md-content="This will delete HTML code permanently"
        md-confirm-text="Agree"
        md-cancel-text="Disagree"
        :md-active.sync="loaders.delete"
        @md-confirm="handleDeleteConfirmation"
    />
    <md-dialog-alert
        md-title="HTML deleted!"
        :md-content="`Your HTML code has been deleted.`"
        :md-active.sync="loaders.confirmDelete"
    />
    <!-- Action Dialog Ends -->
  </div> <!-- HTML Content Section Ends -->
</template>

<script>
  import axios from "axios";
  import { mapState, mapActions } from 'vuex'
  import GeneralMixin from '@/js/mixins/general'
  import {GET_HTML_DATA} from '@/js/store/action.types'

  export default {
    name: 'HTML',
    mixins: [GeneralMixin],
    data() {
      return {
        html: {id: 0},
        loaders: {delete: false, confirmDelete: false}
      };
    },
    computed: {
      ...mapState({
        htmlCodes: state => state.html
      })
    },
    created() {
      this.getHTMLData()
    },
    methods: {
      ...mapActions({
        getHTMLData: `html/${GET_HTML_DATA}`
      }),
      /**
       * Handle Delete action
       * @return void
       */
      handleDelete (htmlId) {
        this.html.id = htmlId
        this.loaders.delete = true
      },
      /**
       * Handle post delete confirmation
       * @return void
       */
      handleDeleteConfirmation () {
        axios.delete(`/api/html/${this.html.id}`)
        .then(() => {
          this.loaders.confirmDelete = true
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loaders.delete = false
          this.getHTMLData()
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-table-cell {
    .md-icon {
      cursor: pointer;
    }
  }
</style>