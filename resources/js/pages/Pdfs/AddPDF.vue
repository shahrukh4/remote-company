<template>
  <div class="content add-pdf-section">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-field>
          <label>{{!$route.meta.editMode ? 'Add' : 'Edit'}} Title</label>
          <md-input v-model="pdf.title"></md-input>
          <div class="error" v-if="$v.pdf.title.$anyError && !$v.pdf.title.required">Please enter a title</div>
        </md-field>
        <md-field>
          <label>{{!$route.meta.editMode ? 'Add' : 'Edit'}} File</label>
          <md-input v-model="pdf.file"></md-input>
          <div class="error" v-if="$v.pdf.file.$anyError && !$v.pdf.file.required">Please choose a file</div>
        </md-field>
        <div>
          <md-button class="md-dense md-raised md-primary" @click="handlePDFAction">
            <md-progress-spinner
                class="md-accent"
                md-mode="indeterminate"
                :md-stroke="3"
                :md-diameter="20"
                :disabled="loading.add || loading.update"
                v-if="loading.add || loading.update"
            >
            </md-progress-spinner>
            <span v-else>{{!$route.meta.editMode ? 'Add' : 'Edit'}} PDF</span>
          </md-button>
        </div>
      </div>
      <md-dialog-alert
        md-title="PDF updated!"
        :md-content="`Your PDF has been ${!$route.meta.editMode ? 'added' : 'updated'}.`"
        :md-active.sync="loading.showPrompt"
      />
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { required } from 'vuelidate/lib/validators'

  export default {
    name: 'AddPDF',
    data () {
      return {
        loading: {add: false, update: false, showPrompt: false},
        pdf: {
          title: '', file: ''
        }
      }
    },
    validations: {
      pdf: {
        title: {
          required
        },
        file: {
          required
        }
      }
    },
    created() {
      if (this.$route.meta.editMode) {
        this.getPDFDetail()
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
      getPDFDetail () {
        axios.get(``)
        .then(({data}) => {
          console.log(data)
          Object.assign(this.pdf, {
            title: 'Shahrkh', file: 'jdhaaja'
          })
        })
        .catch((error) => {
          console.log(error)
        })
      },
      handlePDFAction () {
        if (this.checkValidations()) {
          if (this.$route.meta.editMode) {
            this.handleEditPDF()
          } else {
            this.addPDF()
          }
        }
      },
      handleEditPDF () {
        this.loading.update = true
        axios.put(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`, this.pdf)
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
      addPDF () {
        this.loading.add = true
        axios.post('https://jsonplaceholder.typicode.com/posts', this.pdf)
        .then(({data}) => {
          console.log(data)
          this.loading.showPrompt = true
        })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          this.loading.add = false
          this.$router.push({name: 'PDF'})
        })
      }
    }
  }
</script>