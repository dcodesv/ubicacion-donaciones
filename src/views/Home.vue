<template>
  <h1 class="text-2xl tracking-wider text-center mt-8 w-10/12 mx-auto text-bluetext">Dona un juguete y haz feliz a un niño</h1>
  <p class="text-base text-graytext w-10/12 mt-4 mx-auto text-center">Conoce las ubicaciones donde puedes donar un juguete y hacer feliz a un niño</p>
  <div 
    class="flex flex-col justify-center items-center w-full box-border p-6">
   <locationCard 
    v-for="collection in collectionPoints" :key="collection.index"
    :id='collection.id'
    :name='collection.name'
    :img='collection.img'
    :alt='collection.alt'
    :rss='collection.rss' />
    <download
      :name='downloadInfo[0].name'
      :url='downloadInfo[0].url'/>
    <footerComponent/>
  </div>
  
</template>

<script>
import locationCard from '@/components/home/LocationCard'
import footerComponent from '@/components/home/Footer.vue'
import download from '@/components/home/Download.vue'
export default {
    components:{
        locationCard,
        footerComponent,
        download,
    },
    data(){
      return{
        collectionPoints: [
          {
            id:0,
            name: 'Variedades Guillen',
            img: '/variedades-guillen.png',
            alt:'Logotipo Variedades Guillen',
            rss:'https://www.facebook.com/variedadesguillenmayoreo'
          },
          {
            id:1,
            name: 'Parelería Altezza',
            img: '/pasteleria-altezza.png',
            alt:'Logotipo Pastelería Altezza',
            rss:'https://www.facebook.com/AltezzaSV'
          },
        ],
        downloadInfo:[
          {
            name:'Conoce el flyer oficial del evento',
            url: '/donacion.png'
          }
        ],
      }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&family=Pacifico&display=swap');
body{
    background-color: #F4F4F8;
}
*{
  font-family: 'Inter', sans-serif;
}
h1{
  font-family: 'Pacifico', cursive;
}
.divider{
  height: 1px;
}
</style>