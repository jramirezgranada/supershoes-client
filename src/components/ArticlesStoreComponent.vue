<template>
  <div>
    <div class="alert alert-success alert-dismissible fade show" role="alert" v-if="deleted">
      <strong>{{message}}</strong>
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
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
        <td>
          <router-link :to="{name: 'article-detail', params: {articleId: article.id}}" class="p-2 text-dark">Detail</router-link> |
          <a href="#" @click="deleteArticle(article.id)">Delete</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ArticlesStoreComponent',
  props: {
    msg: String
  },
  data() {
    return {
      getArticlesStoreUrl: 'http://127.0.0.1:8000/services/articles/stores/' + this.$route.params.storeId,
      articles: [],
      pageNumber: 0,
      deleted: false,
      message: ''
    }
  },
  mounted() {
    this.getAllArticlesStore(this.getArticlesStoreUrl)
  },
  methods: {
    getAllArticlesStore(getArticlesStoreUrl){
      axios.get(getArticlesStoreUrl).then(response => {
        this.articles = response.data.articles
      })
    },
    deleteArticle(articleId){
      let deleteArticleUrl = 'http://127.0.0.1:8000/services/articles/' + articleId
      axios.delete(deleteArticleUrl).then(response => {
        console.log(response)
        this.deleted = true
        this.message = response.data.message
        this.getAllArticlesStore(this.getArticlesStoreUrl)
      })
    }
  }
}
</script>