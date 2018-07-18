<template>  
    <div> 
        <div class="container">
            <div v-for="result in showFile" :key="result.id">
                <div class="jumbotron">
                    <h1 class="display-4">{{result.companyTitle}}</h1>
                    
                </div>

                <div class="card">
                    <div class="card-header">
                        <span class="font-weight-bold">Posizyon: </span>{{result.position}}
                    </div>
                    <div class="card-body">
                        
                        <p class="card-text"><span class="font-weight-bold">Lokasyon:</span> {{result.location}}</p>
                        <p class="card-text"><span class="font-weight-bold">Açıklama: </span>{{result.content}}</p>
                    </div>
                </div>
                <div>
                    <br>
                    <p class="lead">
                        <router-link to="/list" class="btn btn-primary btn-lg">Arama Sayfasına Dön</router-link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import json from './assets/data.json';

var userId = window.location.pathname.split("/")[2];

export default {
  data() {
    return {
      results: json,
    };
  },
  computed: {
    showFile: function() {
     
      return this.results.filter((result) => {
          if(result.id == userId)
            return result.position;
      })
      
    }
  }
};


</script>
