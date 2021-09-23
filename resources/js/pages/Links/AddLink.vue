<template>
  <div class="content add-link-section">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-field>
          <label>{{!$route.meta.editMode ? 'Add' : 'Edit'}} Title</label>
          <md-input v-model="link.title"></md-input>
          <div class="error" v-if="$v.link.title.$anyError && !$v.link.title.required">Please enter a title</div>
        </md-field>
        <md-field>
          <label>{{!$route.meta.editMode ? 'Add' : 'Edit'}} Link</label>
          <md-input v-model="link.link"></md-input>
          <div class="error" v-if="$v.link.link.$anyError && !$v.link.link.required">Please enter a link</div>
          <div class="error" v-if="$v.link.link.$anyError && !$v.link.link.url">Please enter a valid URL</div>
        </md-field>
        <md-checkbox v-model.number="link.open_new_tab">Open in new Tab</md-checkbox>
        <div>
          <md-button class="md-dense md-raised md-primary" @click="handleLinkAction">
            <md-progress-spinner
                class="md-accent"
                md-mode="indeterminate"
                :md-stroke="3"
                :md-diameter="20"
                :disabled="loading.add || loading.update"
                v-if="loading.add || loading.update"
            >
            </md-progress-spinner>
            <span v-else>{{!$route.meta.editMode ? 'Add' : 'Edit'}} Link</span>
          </md-button>
        </div>
      </div>
      <md-dialog-alert
        md-title="Link updated!"
        :md-content="`Your link has been ${!$route.meta.editMode ? 'added' : 'updated'}.`"
        :md-active.sync="loading.showPrompt"
      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { url, required } from 'vuelidate/lib/validators'

  export default {
    name: 'AddLink',
    data () {
      return {
        loading: {add: false, update: false, showPrompt: false},
        link: {
          title: '', link: '', open_new_tab: 0
        }
      }
    },
    validations: {
      link: {
        title: {
          required
        },
        link: {
          url,
          required
        }
      }
    },
    created() {
      if (this.$route.meta.editMode) {
        this.getLinkDetail()
      }
    },
    methods: {
      checkValidations () {
        this.$v.$touch()
        if (this.$v.$invalid) {
          return false
        } else {
          return true
        }
      },
      getLinkDetail () {
        axios.get(``)
        .then(({data}) => {
          console.log(data)
          Object.assign(this.link, {
            title: 'Shahrkh', link: 'jdhaaja', open_new_tab: 1
          })
        })
        .catch((error) => {
          console.log(error)
        })
      },
      handleLinkAction () {
        if (this.checkValidations()) {
          if (this.$route.meta.editMode) {
            this.handleEditLink()
          } else {
            this.addLink()
          }
        }
      },
      handleEditLink () {
        this.loading.update = true
        axios.put(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`, this.link)
        .then(({data}) => {
          console.log(data)
          this.loading.showPrompt = true
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loading.update = false
        })
      },
      addLink () {
        this.loading.add = true
        axios.post('https://jsonplaceholder.typicode.com/posts', this.link)
        .then(({data}) => {
          console.log(data)
          this.loading.showPrompt = true
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loading.add = false
          this.$router.push({name: 'Links'})
        })
      }
    }
  }
</script>

<style scoped>

</style>