<template>
  <div class="mt-6 w-full flex justify-center items-center py-6 px-2 box-border">
        <a href="http://diegocodesv.site">
            <img
                class="w-24 footer-logo" 
                src="dcodesv.png" 
                alt="dcodesv logotipo"/>
        </a>
  </div>
</template>

<script>
export default {

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