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
        <th scope="col">Store</th>
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
        <td>{{ article.store.name}}</td>
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
    name: 'ArticlesComponent',
    props: {
      msg: String
    },
    data() {
      return {
        getArticlesUrl: 'http://127.0.0.1:8000/services/articles',
        articles: [],
        pageNumber: 0,
        deleted: false,
        message: ''
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
      deleteArticle(articleId){
        let deleteArticleUrl = 'http://127.0.0.1:8000/services/articles/' + articleId
        axios.delete(deleteArticleUrl).then(response => {
          this.deleted = true
          this.message = response.data.message
          this.getAllArticles(this.getArticlesUrl)
        })
      }
    }
  }
</script>