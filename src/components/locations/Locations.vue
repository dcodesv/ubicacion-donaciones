<template>
  <div class="w-full max-w-2xl mx-auto pt-2 box-border flex justify-start items-center flex-col">
      <div v-for="cmatriz in empresas.sucursales" :key="cmatriz.index" v-show="cmatriz.idTipo === 1" class="flex flex-row-reverse justify-around items-center w-11/12 max-w-md bg-white rounded-xl box-border px-8 py-6 shadow-md my-4">
        <div class="flex flex-col w-full items-start justify-start">
            <h2 class="text-base text-bluetext font-medium mb-2">{{cmatriz.tipo + ' - '+ cmatriz.titulo}}</h2>
            <span class="text-sm font-light text-graytext">Mercado central de sonsonate, Local 147</span>
            <a href="tel:{{cmatriz.contact}}" class="cursor-pointer mt-4 bg-yellowbutton hover:text-white transition-all hover:bg-bluetext text-bluetext rounded-lg flex justify-center items-center py-3 px-4 text-xs w-auto">+503 7663 1201 <i class="ri-phone-fill ml-2 text-base"></i></a>
        </div>
      </div>
      <div v-for="sucursal in empresas.sucursales" :key="sucursal.index" v-show="sucursal.idTipo === 2" class="flex w-11/12 mx-auto max-w-md">
        <div class="flex items-center w-2/12">
          <span class="text-xs text-graytext">Sucursal</span>
          <span class="divider ml-1"></span>
        </div>
        <div class="flex flex-row-reverse justify-around items-center w-10/12 max-w-md bg-white rounded-xl box-border px-6 py-6 shadow-md my-4 ml-2">
        <div class="flex flex-col w-full items-start justify-start">
            <h2 class="text-base text-bluetext font-medium mb-2">{{sucursal.titulo}}</h2>
            <span class="text-sm font-light text-graytext">{{sucursal.location}}</span>
            <a href="tel:{{sucursal.contact}}" class="cursor-pointer mt-4 bg-yellowbutton hover:text-white transition-all hover:bg-bluetext text-bluetext rounded-lg flex justify-center items-center py-3 px-4 text-xs w-auto">{{sucursal.contact}} <i class="ri-phone-fill ml-2 text-base"></i></a>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    empresas: Array
  },
}
</script>

<style>
.divider{
  width: 100%;
  height: 2px;
  background: #C2C3CC;
  display: block;
}
</style>