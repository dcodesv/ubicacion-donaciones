<template>
  <div class="flex justify-start items-center w-11/12 max-w-md bg-white rounded-xl box-border px-6 py-6 shadow-md my-4">
        <div class="flex flex-col w-12/12 items-start justify-start">
            <span class="text-xs font-light text-graytext">Bonus</span>
            <h2 class="text-base text-bluetext font-medium">{{name}}</h2>
            <div class="flex items-center justify-start">
                <a :href="url" target="_blank" class="mt-4 bg-graybgalt hover:text-white transition-all hover:bg-bluetext text-bluetext rounded-lg flex justify-center items-center py-3 px-4 text-xs w-auto">Visualizar <i class="ri-eye-fill ml-2 text-base"></i></a>
                <a :href="url" download class="mt-4 bg-yellowbutton hover:text-white transition-all hover:bg-bluetext text-bluetext rounded-lg flex justify-center items-center py-3 px-4 text-xs w-auto ml-4">Descargar <i class="ri-download-cloud-2-fill ml-2 text-base"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name:String,
        url: String
    }
}
</script>

<style>

</style>