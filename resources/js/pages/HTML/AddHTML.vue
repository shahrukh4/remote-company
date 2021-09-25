<template>
  <div class="content add-html-section">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-field>
          <label>{{!$route.meta.editMode ? 'Add' : 'Edit'}} Title</label>
          <md-input v-model="html.title"></md-input>
          <div class="error" v-if="$v.html.title.$anyError && !$v.html.title.required">Please enter a title</div>
        </md-field>
        <md-field>
          <label>{{!$route.meta.editMode ? 'Add' : 'Edit'}} Description</label>
          <md-input v-model="html.description"></md-input>
        </md-field>
        <md-field>
          <label>{{!$route.meta.editMode ? 'Add' : 'Edit'}} Content</label>
          <md-textarea v-model="html.content"></md-textarea>
          <div class="error" v-if="$v.html.content.$anyError && !$v.html.content.required">Please enter some content</div>
        </md-field>
        <div>
          <md-button class="md-dense md-raised md-primary" @click="handleHTMLAction">
            <md-progress-spinner
                class="md-accent"
                md-mode="indeterminate"
                :md-stroke="3"
                :md-diameter="20"
                :disabled="loading.add || loading.update"
                v-if="loading.add || loading.update"
            >
            </md-progress-spinner>
            <span v-else>{{!$route.meta.editMode ? 'Add' : 'Edit'}} HTML</span>
          </md-button>
        </div>
        <md-card v-if="html.content">
          <small><md-card-content v-html="html.content"></md-card-content></small>
        </md-card>
      </div>
      <md-dialog-alert
        md-title="HTML updated!"
        :md-content="`Your HTML has been ${!$route.meta.editMode ? 'added' : 'updated'}.`"
        :md-active.sync="loading.showPrompt"
      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { required } from 'vuelidate/lib/validators'

  export default {
    name: 'AddHTML',
    data () {
      return {
        loading: {add: false, update: false, showPrompt: false},
        html: {
          title: '', description: '', content: ''
        }
      }
    },
    validations: {
      html: {
        title: {
          required
        },
        content: {
          required
        }
      }
    },
    created() {
      if (this.$route.meta.editMode) {
        this.getHTMLDetail()
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
      getHTMLDetail () {
        axios.get(``)
        .then(({data}) => {
          console.log(data)
          Object.assign(this.html, {
            title: 'Shahrkh', description: 'jdhaaja', content: 'aafafa'
          })
        })
        .catch((error) => {
          console.log(error)
        })
      },
      handleHTMLAction () {
        if (this.checkValidations()) {
          if (this.$route.meta.editMode) {
            this.handleEditHTML()
          } else {
            this.addHTML()
          }
        }
      },
      handleEditHTML () {
        this.loading.update = true
        axios.put(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`, this.html)
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
      addHTML () {
        this.loading.add = true
        axios.post('https://jsonplaceholder.typicode.com/posts', this.html)
        .then(({data}) => {
          console.log(data)
          this.loading.showPrompt = true
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loading.add = false
          this.$router.push({name: 'HTML'})
        })
      }
    }
  }
</script>