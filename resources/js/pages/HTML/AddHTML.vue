<template>
  <!-- Add HTML Section Begins -->
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
        <!-- Action Section Begins -->
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
        </div> <!-- Action Section Ends -->
        <md-card v-if="html.content">
          <small><md-card-content v-html="html.content"></md-card-content></small>
        </md-card>
      </div>
      <!-- Action Dialog Begins -->
      <md-dialog-alert
        md-title="HTML updated!"
        :md-content="`Your HTML has been ${!$route.meta.editMode ? 'added' : 'updated'}.`"
        :md-active.sync="loading.showPrompt"
      /> <!-- Action Dialog Ends -->
    </div>
  </div> <!-- Add HTML Section Begins -->
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
          title: '', description: '', snippet: '', content: ''
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
      /**
       * Check all validations before submission of form
       * @return boolean
       */
      checkValidations () {
        this.$v.$touch()
        if (this.$v.$invalid) {
          return false
        } else {
          return true
        }
      },
      /**
       * Get details of given html id
       * @return void
       */
      getHTMLDetail () {
        axios.get(`/api/html/${this.$route.params.id}`)
        .then(({data}) => {
          Object.assign(this.html, data.data, {snippet: data.data.content})
        })
        .catch((error) => {
          console.log(error)
        })
      },
      /**
       * Handle html action before submission
       * @return void
       */
      handleHTMLAction () {
        if (this.checkValidations()) {
          if (this.$route.meta.editMode) {
            this.handleEditHTML()
          } else {
            this.addHTML()
          }
        }
      },
      /**
       * Handle action as edit if page is opened in edit mode
       * @return void
       */
      handleEditHTML () {
        this.loading.update = true
        axios.put(`/api/html/${this.$route.params.id}`, Object.assign(this.html, {snippet: this.html.content}))
        .then(() => {
          this.loading.showPrompt = true
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loading.update = false
        })
      },
      /**
       * Add a new HTML, if page is opened in add mode
       * @return void
       */
      addHTML () {
        this.loading.add = true
        axios.post('/api/html', Object.assign(this.html, {snippet: this.html.content}))
        .then(({data}) => {
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