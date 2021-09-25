<template>
  <!-- PDF Section Begins -->
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <div class="md-layout md-alignment-center-center">
              <div class="md-layout-item">
                <h4 class="title">PDF Table</h4>
                <p class="category">All the available PDF here</p>
              </div>
              <div class="md-layout-item text-right">
                <md-button class="md-dense md-raised md-primary" @click="$router.push('pdfs/add')">Add PDF</md-button>
              </div>
            </div>
          </md-card-header>
          <!-- Table Content Begins -->
          <md-card-content>
            <md-table v-model="pdfs.pdfs">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Title">{{ item.title.substring(0, 30) }}</md-table-cell>
                <md-table-cell md-label="Link">{{ item.file.name.substring(0, 30) }}</md-table-cell>
                <md-table-cell md-label="Created">{{ item.created_at | prettyDate }}</md-table-cell>
                <md-table-cell md-label="Action" >
                  <md-icon @click.native="$router.push(`pdfs/${item.id}/edit`)">edit</md-icon>
                  <md-icon @click.native="handleDelete(item.id)">delete</md-icon>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content> <!-- Table Content Ends -->
        </md-card>
      </div>
    </div>
    <!-- Action Dialog Begins -->
    <md-dialog-confirm
      md-title="Are you sure, you want to delete this PDF?"
      md-content="This will delete PDF permanently"
      md-confirm-text="Agree"
      md-cancel-text="Disagree"
      :md-active.sync="loaders.delete"
      @md-confirm="handleDeleteConfirmation"
    />
    <md-dialog-alert
      md-title="PDF deleted!"
      :md-content="`Your PDF code has been deleted.`"
      :md-active.sync="loaders.confirmDelete"
    />
    <!-- Action Dialog Ends -->
  </div> <!-- PDF Section Ends -->
</template>

<script>
  import axios from "axios";
  import { mapState, mapActions } from 'vuex'
  import GeneralMixin from '@/js/mixins/general'
  import {GET_PDF_DATA} from '@/js/store/action.types'

  export default {
    name: 'PDF',
    mixins: [GeneralMixin],
    data() {
      return {
        pdf: {id: 0},
        loaders: {delete: false, confirmDelete: false}
      };
    },
    computed: {
      ...mapState({
        pdfs: state => state.pdf
      })
    },
    created() {
      this.getPdfs()
    },
    methods: {
      ...mapActions({
        getPdfs: `pdf/${GET_PDF_DATA}`
      }),
      /**
       * Handle Delete action
       * @return void
       */
      handleDelete (pdfId) {
        this.pdf.id = pdfId
        this.loaders.delete = true
      },
      /**
       * Handle pdf delete confirmation
       * @return void
       */
      handleDeleteConfirmation () {
        axios.delete(`/api/pdfs/${this.pdf.id}`)
        .then(({data}) => {
          this.loaders.confirmDelete = true
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.getPdfs()
          this.loaders.delete = false
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