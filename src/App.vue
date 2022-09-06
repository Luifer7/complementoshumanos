
<template>

<nav class="navbar navbar-expand-sm bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            <router-link to="/" >HOME</router-link>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <router-link to="/about" >About</router-link>
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>


    <div class="container" >
      <RouterView />
    </div>

<!-- await axios({
      method: 'get',
      url: url.value,
      headers: { Authorization: `Bearer ${token.value}` }
    })
      .then(function (response) {
        console.log(response)
       // dataRandom.value.push(response.data)
      }); -->
</template>


<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import  axios  from "axios";
  import { usedataStore } from "./stores/data";
  import { ref } from '@vue/reactivity';
  import { onMounted } from '@vue/runtime-core';

  const useData = usedataStore()
  
  const dataRandom = ref([])

  onMounted(() => {
    dataRandom.value = useData.dataRandom
  })


  </script>
  