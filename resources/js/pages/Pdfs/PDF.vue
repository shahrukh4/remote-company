<template>
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
          <md-card-content>
            <md-table v-model="pdfs">
              <md-table-row slot="md-table-row" slot-scope="{ item }">
                <md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
                <md-table-cell md-label="Title">{{ item.title.substring(0, 30) }}</md-table-cell>
                <md-table-cell md-label="Link">{{ item.file.substring(0, 30) }}</md-table-cell>
                <md-table-cell md-label="Created">{{ item.created_at | prettyDate }}</md-table-cell>
                <md-table-cell md-label="Action" >
                  <md-icon @click.native="$router.push(`pdfs/${item.id}/edit`)">edit</md-icon>
                  <md-icon @click.native="handleDelete(item.id)">delete</md-icon>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
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
  </div>
</template>

<script>
  import axios from "axios";
  import GeneralMixin from '@/js/mixins/general'

  export default {
    name: 'PDF',
    mixins: [GeneralMixin],
    data() {
      return {
        pdf: {id: 0},
        pdfs: [
          {
            id: 1,
            title: 'Shahrukh',
            file: "helopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.comhelopeter.com",
            created_at: "2018-06-06 10:10:10"
          },
          {
            id: 2,
            title: 'Anwar',
            file: "helopeter.com",
            created_at: "2018-06-06 10:10:10"
          },
          {
            id: 3,
            title: 'Farha',
            file: "helopeter.com",
            created_at: "2018-06-06 10:10:10"
          },{
            id: 4,
            title: 'Bobdu',
            file: "helopeter.com",
            created_at: "2018-06-06 10:10:10"
          }
        ],
        loaders: {delete: false, confirmDelete: false}
      };
    },
    methods: {
      handleDelete (pdfId) {
        this.pdf.id = pdfId
        this.loaders.delete = true
      },
      handleDeleteConfirmation () {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.pdf.id}`)
        .then(({data}) => {
          console.log(data)
          this.loaders.confirmDelete = true
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
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