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
                contact: '+503 7691 6195'
              },
              {
                id: 2,
                idTipo: 2,
                titulo: 'Sucursal Terminal Vieja',
                location: 'Terminal vieja, Sonsonate, Local 11-12',
                contact: '+503 6184 0590'
              },
              {
                id: 3,
                idTipo: 2,
                titulo: 'Sucursal Mega Plaza',
                location: 'Mega Plaza, Sonsonate, Edificio B, Pasillo 6',
                contact: '+503 6135 6909'
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
                contact: '+503 2432 4639'
              },
              {
                id: 2,
                idTipo: 2,
                tipo: 'Sucursal',
                titulo: 'Sucursal Cruz Roja',
                location: 'Boulevard Oscar Osorio, Salida hacia Acajutla Contiguo a cruz roja Sonsonate',
                contact: '+503 2401 6605'
              },
              {
                id: 3,
                idTipo: 2,
                tipo: 'Sucursal',
                titulo: 'Sucursal Nahuizalco',
                location: '3 calle Poniente 1 av sur contiguo a Caja de crédito',
                contact: '+503 2453 0592'
              },
              {
                id: 4,
                idTipo: 2,
                tipo: 'Sucursal',
                titulo: 'Sucursal Acajutla',
                location: 'Calle Acaxual, frente a administración de mercados',
                contact: '+503 2452 3844'
              },
              {
                id: 5,
                idTipo: 2,
                tipo: 'Sucursal',
                titulo: 'Sucursal Cara Sucia',
                location: 'Contiguo a pollo campero Cara Sucia Ahuachapan',
                contact: '+503 2437 0040'
              },
            ]
          },
          {
            id: 3,
            sucursales:[
              {
                id: 1,
                idTipo: 1,
                tipo: 'Casa Matriz',
                titulo: 'Impresos',
                location: 'Plaza Las Dalias 6 av. Bulevar el Ángel #5, Sonsonate, El Salvador',
                contact: '+503 6312 1551'
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