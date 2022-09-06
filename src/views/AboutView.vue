


<template>


<div class="container" >

<table class="table table-responsive table-hover">
<thead>
<tr>
<th scope="col">Id</th>
<th scope="col">Nombre</th>
<th scope="col">Segundo nombre</th>
<th scope="col">Primer Apellido</th>
<th scope="col">Segundo apellido</th>
<th scope="col">Cedula</th>
<th scope="col">Direccion</th>
<th scope="col">Telefono</th>
<th scope="col">Descuento</th>
<th scope="col">Vivienda</th>
<th scope="col">Hobbies</th>
<th scope="col">Observaciones</th>
<th scope="col">Acciones</th>

</tr>
</thead>
<tbody>
<tr v-for="data of dataPerson" :key="data.id" >
<td scope="col">{{data.id}}</td>
<td scope="col">{{data.firstName}}</td>
<td scope="col">{{data.secondName}}</td>
<td scope="col">{{data.firstLastName}}</td>
<td scope="col">{{data.secondLastName}}</td>
<td scope="col">{{data.cedula}}</td>
<td scope="col">{{data.address}}</td>
<td scope="col">{{data.phone}}</td>
<td scope="col">{{data.descuento}}</td>
<td scope="col">{{data.home}}</td>
<td scope="col">{{data.hobbi}}</td>
<td scope="col">{{data.obs}}</td>
<td scope="col">

<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="btn-delete text-danger bi bi-trash-fill" viewBox="0 0 16 16">
<path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
</svg>
</td>
</tr>
</tbody>
</table>




</div>

    <div class="container" >
    <form v-on:submit.prevent="addData()" >
    
        <div class="card p-3">

        <div class="card-header h4">
            Formulario
        </div>
        <div class="card-body">

       
        <div class="row">
            <div class="col-md-6 col-sm-8 " >
            <div class="mb-3">
                <small for="exampleInputEmail1" class="text-muted">Primer Nombre</small>
                <input 
                v-model="primerNombre"
                type="text" class="form-control form-control-sm"  
                placeholder="Escribe aqui"
                aria-describedby="emailHelp">
            
                <small for="exampleInputEmail1" class="text-muted">Segundo Nombre</small>
                <input 
                v-model="segundoNombre"
                type="text" class="form-control form-control-sm"
                placeholder="Escribe aqui"
                aria-describedby="emailHelp">
            </div>
            </div>
            <div class="col-md-6 col-sm-8" >
                <div class="mb-3">
                <small for="exampleInputEmail1" class="text-muted">Primer Apellido</small>
                <input
                v-model="primerApellido"
                type="text" class="form-control form-control-sm"  
                placeholder="Escribe aqui"
                aria-describedby="emailHelp">
           
                <small for="exampleInputEmail1" class="text-muted">Segundo Apellido</small>
                <input 
                v-model="segundoApellido"
                type="text" class="form-control form-control-sm"  
                placeholder="Escribe aqui"
                aria-describedby="emailHelp">
            </div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 " >
            <div class="mb-3">
                <small for="exampleInputEmail1" class="text-muted">Cedula</small>
                <input
                v-model="cedula"
                type="number" class="form-control form-control-sm"  
                placeholder="Escribe aqui"
                aria-describedby="emailHelp">
            
                <small for="exampleInputEmail1" class="text-muted">Direccion</small>
                <input
                v-model="direccion"
                type="text" class="form-control form-control-sm"  
                placeholder="Escribe aqui"
                aria-describedby="emailHelp">
            </div>
            </div>
            <div class="col-6" >
                <div class="mb-3">
                <small for="exampleInputEmail1" class="text-muted">Telefono</small>
                <input
                v-model="telefono"
                type="number" class="form-control form-control-sm"  
                placeholder="Escribe aqui"
                aria-describedby="emailHelp">
           
                <div class="m-4 form-check">
                <input 
                
                type="checkbox" class="form-check-input" id="exampleCheck1">
                <small class="form-check-small form-control-sm" for="exampleCheck1">Check me out</small>
                </div>
            </div>
            </div>
        </div>
        <select v-model="vivienda" class="form-select form-select-sm mt-2" aria-label="Default select example">
            <option selected>Tipo de Vivienda</option>
            <option value="Arrendada">Arrendada</option>
            <option value="propia">Propia</option>
            <option value="Familiar">Familiar</option>
        </select>
        <select v-model="hobbies" class="form-select form-select-sm mt-2" aria-label="Default select example">
            <option selected>Hobbies</option>
            <option value="Futbol">Futbol</option>
            <option value="Leer">Leer</option>
            <option value="Comer">Comer</option>
            <option value="Bailar">Bailar</option>
        </select>

        <textarea v-model="observaciones" class="form-control form-control-sm mt-2" cols="7" rows="4"
        placeholder="Observaciones"
        ></textarea>
    </div>
        <div class="card-footer m-2">
            <button type="submit" class="btn btn-primary">Guardar</button>
        </div>
        
    </div>
    </form>
    </div>

    

    


</template>

<script setup >
import { onMounted, ref } from "@vue/runtime-core";

const primerNombre = ref('')
const segundoNombre = ref('')
const primerApellido = ref('')
const segundoApellido = ref('')
const cedula = ref(0)
const direccion = ref('')
const telefono = ref(0)
const descuento = ref(null)
const vivienda = ref('')
const hobbies = ref('')
const observaciones = ref('')

const dataPerson = ref([])


const addData = () => {
     descuento.value = document.getElementById('exampleCheck1').value
    let currentdata = {
        id: Date.now(),
        firstName: primerNombre.value,
        secondName: segundoNombre.value,
        firstLastName: primerApellido.value,
        secondLastName: segundoApellido.value,
        cedula: cedula.value,
        address: direccion.value,
        phone: telefono.value,
        descuento: descuento.value,
        home: vivienda.value,
        hobbi: hobbies.value,
        obs: observaciones.value,
    }

    dataPerson.value.push(currentdata)
    currentdata = ''
    console.log(dataPerson.value)

}


</script>

<style scoped >

.btn-delete {
    cursor: pointer;
    transition: .6s ease all;

}
.btn-delete:hover {
    color: rgba(0, 0, 0, 0.719);
}
</style>
