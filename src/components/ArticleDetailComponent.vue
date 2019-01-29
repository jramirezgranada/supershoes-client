<template>
    <div>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Article</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Stock</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <br>
                <div class="card">
                    <div class="card-header">
                        {{ article.name }} |
                        <router-link :to="{name: 'edit-article', params:{articleId: article.id}}" class="btn btn-success btn-sm">Edit Article</router-link>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{article.description}}</h5>
                        <a href="#" class="btn btn-primary">USD {{ article.price }}</a>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <br>
                <div class="card" style="width: 18rem; display: inline-block">
                    <div class="card-header">
                        Total in Shelf
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{article.total_in_shelf}}</li>
                    </ul>
                </div> &nbsp;
                <div class="card" style="width: 18rem; display: inline-block">
                    <div class="card-header">
                        Total in Vault
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">{{article.total_in_vault}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'ArticleDetailComponent',
        props: {},
        data(){
            return {
                getArticleDetailUrl: 'http://127.0.0.1:8000/services/articles/' + this.$route.params.articleId,
                article: []
            }
        },
        mounted() {
            this.getArticleDetail(this.getArticleDetailUrl)
        },
        methods:{
            getArticleDetail(articleDetailUrl){
                axios.get(articleDetailUrl)
                    .then(
                        response => {
                        this.article = response.data.articles
                    })
                    .catch(
                        error => {
                            if(error.response.status == 404){
                                this.$router.push({name: '404'})
                            }

                        }
                    )
            }
        }
    }
</script>