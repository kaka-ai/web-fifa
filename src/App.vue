<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { loadProgressBar } from 'axios-progress-bar'
export default {
  components: {
    Navbar,
    Footer
  },
  name: 'App',
  created () {
    loadProgressBar({
      showSpinner: false,
      easing: 'ease',
      speed: 500
    })
  }
}
</script>

<style>

</style>
