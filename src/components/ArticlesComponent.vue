<template>
  <div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">Price</th>
        <th scope="col">Total in Shelf</th>
        <th scope="col">Total in Vault</th>
        <th scope="col">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="article in articles">
        <th scope="row">{{ article.id }}</th>
        <td>{{ article.name }}</td>
        <td>{{ article.price }}</td>
        <td>{{ article.total_in_shelf }}</td>
        <td>{{ article.total_in_vault }}</td>
        <td><router-link :to="{name: 'article-detail', params: {articleId: article.id}}" class="p-2 text-dark">Detail</router-link></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ArticlesComponent',
  props: {
    msg: String
  },
  data() {
    return {
      getArticlesUrl: 'http://supershoes.test/services/articles',
      articles: [],
      pageNumber: 0
    }
  },
  mounted() {
    this.getAllArticles(this.getArticlesUrl)
  },
  methods: {
    getAllArticles(getArticlesUrl){
      axios.get(getArticlesUrl).then(response => {
        this.articles = response.data.articles
      })
    },
    nextPage(){
      this.pageNumber++;
    },
    prevPage(){
      this.pageNumber--;
    }
  }
}
</script>