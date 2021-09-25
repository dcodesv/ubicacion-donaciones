<template>
  <div 
    class="flex flex-col justify-center items-center w-full box-border p-6">
  <headerLocation
    :empresa="empresas[$route.params.id].sucursales[0].titulo"/>
  <location
    :empresas="empresas[$route.params.id]"
  />
  <footerLocation/>
  </div>
</template>

<script>
import headerLocation from '@/components/locations/HeaderLocation.vue'
import location from '@/components/locations/Locations.vue'
import footerLocation from '@/components/home/Footer.vue'
export default {
    components:{
        headerLocation,
        location,
        footerLocation
    },
   
     data(){
      return{
        empresas:[
          {
            id: 1,
            sucursales:[
              {
                id: 1,
                idTipo: 1,
                tipo: 'Casa Matriz',
                titulo: 'Variedades Guillen',
                location: 'Mercado central de Sonsonate, Local 147',
                contact: '+50376916195'
              },
              {
                id: 2,
                idTipo: 2,
                titulo: 'Sucursal Terminal Vieja',
                location: 'Terminal vieja, Sonsonate, Local 11-12',
                contact: '+50361840590'
              },
              {
                id: 3,
                idTipo: 2,
                titulo: 'Sucursal Mega Plaza',
                location: 'Mega Plaza, Sonsonate, Edificio B, Pasillo 6',
                contact: '+50361356909'
              },
            ]
          },
          {
            id: 2,
            sucursales:[
              {
                id: 1,
                idTipo: 1,
                tipo: 'Casa Matriz',
                titulo: 'Pastelería Altezza',
                location: 'Carretera hacia Acajutla km 77.8 Caserio la Nueva, Acajutla, Sonsonate',
                contact: '+50324324639'
              },
              {
                id: 2,
                idTipo: 2,
                tipo: 'Sucursal',
                titulo: 'Sucursal Cruz Roja',
                location: 'Boulevard Oscar Osorio, Salida hacia Acajutla Contiguo a cruz roja Sonsonate',
                contact: '+50324016605'
              },
              {
                id: 3,
                idTipo: 2,
                tipo: 'Sucursal',
                titulo: 'Sucursal Nahuizalco',
                location: '3 calle Poniente 1 av sur contiguo a Caja de crédito',
                contact: '+50324530592'
              },
              {
                id: 4,
                idTipo: 2,
                tipo: 'Sucursal',
                titulo: 'Sucursal Acajutla',
                location: 'Calle Acaxual, frente a administración de mercados',
                contact: '+50324523844'
              },
              {
                id: 5,
                idTipo: 2,
                tipo: 'Sucursal',
                titulo: 'Sucursal Cara Sucia',
                location: 'Contiguo a pollo campero Cara Sucia Ahuachapan',
                contact: '+50324370040'
              },
            ]
          },
        ]
      }
  }
}
</script>

<style>

</style>