<template>
    <div class="mt-12 contact-component flex justify-start items-center w-11/12 max-w-md rounded-xl box-border px-6 py-6 shadow-md my-4">
        <div class="flex flex-col w-12/12 items-start justify-start">
            <span class="text-xs font-light text-white">Unete a la causa</span>
            <h2 class="text-base text-white font-medium">¿Deseas apoyarnos?</h2>
            <div class="flex items-center justify-start">
                <a :href="'https://wa.me/50363152546/?text='+this.msg" class="mt-4 bg-greenwhatsapp hover:text-white transition-all hover:bg-bluetext text-white rounded-lg flex justify-center items-center py-3 px-4 text-xs w-auto">Contactanos <i class="ri-whatsapp-line ml-2 text-base"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg: 'Quiero saber más sobre la iniciativa.'
        }
    }
}
</script>

<style>
.contact-component{
    background: url('/charity.jpg');
    background-size: contain;
}
</style>