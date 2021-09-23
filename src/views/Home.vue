<template>
  <h1 class="text-2xl tracking-wider text-center mt-8 w-10/12 mx-auto">Dona un juguete y haz feliz a un niño</h1>
  <p class="text-base text-graytext w-10/12 mt-4 mx-auto text-center">Conoce las ubicaciones donde puedes donar un juguete y hacer feliz a un niño</p>
  <div 
    class="flex flex-col justify-center items-center w-full box-border p-6">
   <locationCard 
    v-for="collection in collectionPoints" :key="collection.index"
    :name='collection.name'
    :img='collection.img'
    :alt='collection.alt' />
    <download
      :name='downloadInfo[0].name'
      :url='downloadInfo[0].url'/>
    <div class="divider w-6/12 mx-auto bg-graydivider mt-12"></div>
    <info/>
    <footerComponent/>
  </div>
  
</template>

<script>
import locationCard from '@/components/home/LocationCard'
import footerComponent from '@/components/home/Footer.vue'
import download from '@/components/home/Download.vue'
import info from '@/components/home/Info.vue'
export default {
    components:{
        locationCard,
        footerComponent,
        download,
        info
    },
    data(){
      return{
        collectionPoints: [
          {
            name: 'Variedades Guillen',
            img: '/variedades-guillen.png',
            alt:'Logotipo Variedades Guillen'
          },
          {
            name: 'Parelería Altezza',
            img: '/pasteleria-altezza.png',
            alt:'Logotipo Pastelería Altezza'
          },
        ],
        downloadInfo:[
          {
            name:'Conoce el flyer oficial del evento',
            url: '/donacion.png'
          }
        ],
        altezzaLocations:[
          {
            name: 'Casa Matriz',
            locations: 'Mercado central de Sonsonate, Local 147'
          }
        ],
        guillenLocations:[
          {
            name: 'Casa Matriz',
            locations: 'Mercado central de Sonsonate, Local 147',
            contact: '+503 7691 6195'
          },
          {
            name: 'Sucursal Terminal Vieja',
            locations: 'Terminal vieja, Sonsonate, Local 11-12',
            contact: '+503 6184 0590'
          },
          {
            name: 'Sucursal Mega Plaza',
            locations: 'Mega Plaza, Sonsonate, Edificio B, Pasillo 6',
            contact: '+503 6135 6909'
          }
        ]
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