<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
        title="The Remote Company"
        :sidebar-item-color="sidebarBackground"
        :sidebar-background-image="sidebarBackgroundImage"
    >
      <sidebar-link to="/admin">
        <md-icon>dashboard</md-icon>
        <p>Dashboard</p>
      </sidebar-link>
      <sidebar-link to="/admin/pdfs">
        <md-icon>picture_as_pdf</md-icon>
        <p>PDFs</p>
      </sidebar-link>
      <sidebar-link to="/admin/html">
        <md-icon>code</md-icon>
        <p>HTML</p>
      </sidebar-link>
      <sidebar-link to="/admin/links">
        <md-icon>link</md-icon>
        <p>Links</p>
      </sidebar-link>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>
      <fixed-plugin
          :color.sync="sidebarBackground"
          :image.sync="sidebarBackgroundImage"
          v-if="0"
      >
      </fixed-plugin>
      <dashboard-content> </dashboard-content>
      <Footer v-if="!$route.meta.hideFooter" />
    </div>
  </div>
</template>

<script>
  import TopNavbar from "./TopNavbar.vue";
  import Footer from "@/js/layout/Footer";
  import DashboardContent from "./Content.vue";
  import FixedPlugin from "./Extra/FixedPlugin.vue";

  export default {
    name: 'Master',
    components: {
      TopNavbar,
      DashboardContent,
      Footer,
      FixedPlugin
    },
    data() {
      return {
        sidebarBackground: 'green',
        sidebarBackgroundImage: '/assets/img/sidebar-2.jpg'
      }
    }
  }
</script>

<style scoped>

</style>