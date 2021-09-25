<template>
  <div class="mt-6 w-11/12 max-w-2xl mx-auto pb-4 flex justify-start items-center box-border">
      <router-link class="bg-graybgalt w-10 h-10 flex justify-center items-center hover:bg-bluetext hover:text-white transition-all rounded-full" :to="{name: 'home'}"><i class="ri-arrow-left-line"></i></router-link>
      <div class="flex items-start justify-center flex-col ml-12">
          <span class="text-xs text-graytext mb-1">Punto de recolección</span>
          <h2 class="text-base text-bluetext font-medium">{{empresa}}</h2>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        empresa:String
    }
}
</script>

<style scoped>
    h1{
        font-family: 'Inter', sans-serif;
    }
</style>