<template>
  <!-- PDF Section Begins -->
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
          <label v-if="0">{{!$route.meta.editMode ? 'Add' : 'Edit'}} File</label>
          <input type="file" ref="uploadedPdf" accept="application/pdf" @change="onChangeFileUpload()">
        </md-field>
        <!-- Action Section Begins -->
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
        </div> <!-- Action Section Ends -->
      </div>
      <!-- Action Dialog Begins -->
      <md-dialog-alert
        md-title="PDF updated!"
        :md-content="`Your PDF has been ${!$route.meta.editMode ? 'added' : 'updated'}.`"
        :md-active.sync="loading.showPrompt"
      /> <!-- Action Dialog Ends -->
    </div>
  </div> <!-- PDF Section Ends -->
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
        }
      }
    },
    created() {
      if (this.$route.meta.editMode) {
        this.getPDFDetail()
      }
    },
    methods: {
      /**
       * Save in file data on change of fil
       * @return void
       */
      onChangeFileUpload(){
        this.pdf.file = this.$refs.uploadedPdf.files[0];
      },
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
       * Get details of given pdf id
       * @return void
       */
      getPDFDetail () {
        axios.get(`/api/pdfs/${this.$route.params.id}`)
        .then(({data}) => {
          Object.assign(this.pdf, data.data)
        })
        .catch((error) => {
          console.log(error)
        })
      },
      /**
       * Handle pdf action before submission
       * @return void
       */
      handlePDFAction () {
        if (this.checkValidations()) {
          if (this.$route.meta.editMode) {
            this.handleEditPDF()
          } else {
            this.addPDF()
          }
        }
      },
      /**
       * Handle action as edit if page is opened in edit mode
       * @return void
       */
      handleEditPDF () {
        this.loading.update = true
        let formData = new FormData();
        formData.append('file', this.pdf.file)
        formData.append('title', this.pdf.title)

        axios.post(`/api/pdfs/update/${this.$route.params.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
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
       * Add a new PDF, if page is opened in add mode
       * @return void
       */
      addPDF () {
        this.loading.add = true
        let formData = new FormData();
        formData.append('file', this.pdf.file)
        formData.append('title', this.pdf.title)

        axios.post(`/api/pdfs`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(() => {
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