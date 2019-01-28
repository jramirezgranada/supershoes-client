<template>
  <div class="stores">
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
