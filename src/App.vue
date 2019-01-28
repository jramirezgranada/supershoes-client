<template>
  <div id="app">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 class="my-0 mr-md-auto font-weight-normal">Super Shoes</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link :to="{ name: 'home'}" class="p-2 text-dark">All Stores</router-link> |
        <router-link :to="{name: 'all-articles'}" class="p-2 text-dark">All Articles</router-link>
      </nav>
    </div>
    <div class="container">
      <div class="col-md-12">
        <router-view/>
      </div>

      <footer class="pt-4 my-md-5 pt-md-5 border-top">
        <div class="row">
          <div class="col-12 col-md">
            <small class="d-block mb-3 text-muted">&copy; SuperShoes Company</small>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
