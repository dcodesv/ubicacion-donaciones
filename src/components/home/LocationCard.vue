<template>
    <div class="flex flex-row-reverse justify-around items-center w-11/12 max-w-md bg-white rounded-xl box-border px-4 py-6 shadow-md my-4">
        <div class="flex flex-col w-8/12 items-start justify-start">
            <span class="text-xs font-light text-graytext">Punto de recolección</span>
            <h2 class="text-base text-bluetext font-medium">{{name}}</h2>
            <div class="flex items-center justify-start mt-4">
                <a :href="rss" target="_blank" class="flex justify-center items-center h-full bg-graybgalt hover:text-white transition-all hover:bg-bluetext text-bluetext py-2 px-3 rounded-full mr-2"><i class="ri-facebook-circle-fill"></i></a>
                <router-link :to="{name:'direccion', params:{id:id}}" class="cursor-pointer bg-yellowbutton hover:text-white transition-all hover:bg-bluetext text-bluetext rounded-lg flex justify-center items-center py-3 px-4 text-xs w-auto">Direcciones <i class="ri-map-pin-2-fill ml-2 text-base"></i></router-link>
                
            </div>
        </div>
        <div class="w-4/12 flex justify-center items-center mr-6">
            <img class="w-12/12" :src="img" alt="alt">
        </div>
    </div>
</template>

<script>
export default {

props:{
    name: String,
    img: String,
    alt: String,
    id: Number,
    rss:String
}
}
</script>

<style>

</style>