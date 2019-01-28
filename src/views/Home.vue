<template>
  <div class="stores">
    <router-link :to="{name: 'create-store'}" class="btn btn-success">Create Store</router-link>
    <div style="margin: 15px"></div>
    <StoresComponent msg="Welcome to SuperShoes Store"/>
  </div>
</template>

<script>
// @ is an alias to /src
import StoresComponent from '@/components/StoresComponent.vue'

export default {
  name: 'home',
  components: {
    StoresComponent
  }
}
</script>
