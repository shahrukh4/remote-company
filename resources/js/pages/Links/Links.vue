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
                <h4 class="title">Links Table</h4>
                <p class="category">All the available links here</p>
              </div>
              <div class="md-layout-item text-right">
                <md-button class="md-dense md-raised md-primary" @click="$router.push('links/add')">Add Link</md-button>
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
                <md-table-cell md-label="Action" >
                  <md-icon @click.native="$router.push(`links/${item.id}/edit`)">edit</md-icon>
                  <md-icon @click.native="handleDelete(item.id)">delete</md-icon>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-card-content>
        </md-card>
      </div>
    </div>
    <md-dialog-confirm
      md-title="Are you sure, you want to delete this link?"
      md-content="This will delete link permanently"
      md-confirm-text="Agree"
      md-cancel-text="Disagree"
      :md-active.sync="loaders.delete"
      @md-confirm="handleDeleteConfirmation"
    />
    <md-dialog-alert
      md-title="Link deleted!"
      :md-content="`Your link has been deleted.`"
      :md-active.sync="loaders.confirmDelete"
    />
  </div>
</template>

<script>
  import axios from 'axios'
  import GeneralMixin from '@/js/mixins/general'

  export default {
    name: 'Links',
    mixins: [GeneralMixin],
    data() {
      return {
        link: {id: 0},
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
        ],
        loaders: {delete: false, confirmDelete: false}
      };
    },
    methods: {
      handleDelete (linkId) {
        this.link.id = linkId
        this.loaders.delete = true
      },
      handleDeleteConfirmation () {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${this.link.id}`)
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