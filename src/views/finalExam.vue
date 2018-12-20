<template>
<div class="container-fluid justify-content-center text-center">
    <h1 class="display3">Final Exam</h1>
    <hr class="my-4">
    <div class="autocomplete" @change.prevent="updateSearch()">
        <input type="text" id="searchItem" />
        <ul class="autocomplete-results">
        <li v-if="search == null" class="hidden"></li>
        </ul>
  </div>  
</div>
</template>
<script>
import * as api from '@/services/api_access';

export default{
    data() {
      return {
        search: '',
        results: {},
      };
    },
    methods: {
        updateSearch() {
            this.search = document.getElementById("searchItem").value;
            this.results.push(this.findResults());
            console.log(this.results[0])
        
        },
        findResults(){
            return api.getResults(this.search)
        }

    },
}

</script>
<style>
    .hidden {
        display: none;
    }
  .autocomplete {
    position: relative;
    width: 130px;
  }

  .autocomplete-results {
    padding: 0;
    margin: 0;
    border: 1px solid #eeeeee;
    height: 120px;
    overflow: auto;
  }

  .autocomplete-result {
    list-style: none;
    text-align: left;
    padding: 4px 2px;
    cursor: pointer;
  }

  .autocomplete-result:hover {
    background-color: #4AAE9B;
    color: white;
  }
</style>