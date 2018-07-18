<template>
    <div>
        <header>
            <span class="kariyer-banner-flue"></span>

            <div id="kariyer-search">
                <div class="container">
                    <div class="row ">
                        <div class="col-md-12 text-center">
                            <h3> {{title}}</h3>
                            <p>{{desc}}</p>
                        </div>
                        <div class="col-md-12">
                            <form action="" class="kariyer-search-form">
                                <ul>
                                    <li>
                                        <input v-on:focus="inputFocus" v-model="term" type="text" value="" placeholder="Sektör veya meslek seçiniz">
                                    </li>

                                    <li>
                                        <select v-model="selected" name="city" id="">
                                            <option value="">Lütfen bir şehir seçiniz</option>
                                            <option value="Adana">Adana</option>
                                            <option value="Adıyaman">Adıyaman</option>
                                            <option value="İzmit">İzmit</option>
                                            <option value="İstanbul">İstanbul</option>
                                            <option value="Sakarya">Sakarya</option>
                                            <option value="California">California</option>
                                            <option value="Londra">Londra</option>
                                        </select>
                                    </li>
                                    <li>
                                        <button @click="search" >Ara</button> 
                                    </li>
                                </ul>
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div id="results" class="container">
            <div class="row">
                <div class="col-md-12">
                <h1>İlanlar</h1>
                <hr/>
                </div>

                <div class="col-12" v-if="noResults">
                    Üzgünüm bu kriterlerde sonuç bulamadım.
                </div>

                <div class="col-12" v-if="searching">
                    <i>Aranıyor...</i>
                </div>

                <div v-bind:key="result.id" v-for="result in results" class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            {{result.position}}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{{result.companyTitle}}</h5>
                            <p class="card-text">{{result.location}}</p>
                            <a v-bind:href="`/detail/${result.id}`" class="btn btn-primary">İlanı İncele</a>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
export default {
  data() {
    return {
      term: "",
      title: "İş Bulmanın Kolay Yolu - Kariyer & Eleman İş İlanları",
      desc: "Hayallerindeki kariyer için burdayız.",
      noResults: false,
      searching: false,
      results: [],
      selected: ""
    };
  },
  methods: {
    search: function(e) {
        e.preventDefault();
        this.noResults = false;
        this.searching = true;
        this.results = [];
        // Localde ki port numarasına göre değiştirilir.
        fetch(`http://localhost:8081/src/assets/data.json`)
            .then(response => response.json())
            .then(response => {
            this.searching = false;
            this.results = filterData(response, this.term, this.selected);
            this.noResults = this.results.length === 0;
        });
    },

    inputFocus: function() {
      
    }
  }
};

function filterData(data, term, city) {
  return data.filter(item => {
    return item.position.match(term.substr(0,1).toUpperCase()) && item.location.match(city);
  });
}
</script>
