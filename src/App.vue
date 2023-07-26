<template>
  
  <Header />
  <ConCur :quotes="quotes"/>
  <div>
    <!-- <Watch :quotes="quotes"/> -->
  </div>

</template>

<script>

import Watch from './components/Watch.vue'
import Header from './components/Header.vue'
import ConCur from './components/ConCur.vue'


import api from './server/api.js'
import { onMounted, reactive, toRefs } from 'vue';

export default{
  components:{
    Watch,
    Header,
    ConCur
  },setup(){
    const data = reactive({
      quotes: {},
    });
    onMounted( async() =>{
      const response = await api.all();
      data.quotes = response.data;
    })

    return {...toRefs(data)}
  }
}

</script>

<style>

</style>
