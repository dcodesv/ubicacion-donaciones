<template>
    <div class="divider w-6/12 mx-auto bg-graydivider mt-12"></div>
    <info/>
    <div class="mt-6 w-full flex justify-center items-center py-6 px-2 box-border">
        <a href="http://diegocodesv.site" target="_blank">
            <img
                class="w-24 footer-logo" 
                src="dcodesv.png" 
                alt="dcodesv logotipo"/>
        </a>
    </div>
</template>

<script>
import info from '@/components/home/Info.vue'
export default {
    components:{
        info
    }
}
</script>

<style>
.footer-logo{
    filter: grayscale(100%);
    opacity: 0.25;
    transition: 0.3s ease;
}
.footer-logo:hover{
    filter: grayscale(0%);
    opacity: 1;
}
</style>