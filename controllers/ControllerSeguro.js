import {usuarios} from "../models/ModelSeguro.js"

export function formularioAuto (){

    var formularioAutoNombre = document.getElementById("seguro-auto-nombre").value;
    var formularioAutoCorreo = document.getElementById("seguro-auto-email").value;
    var formularioAutoTelefono = document.getElementById("seguro-auto-telefono").value;
    var formularioAutoModelo = document.getElementById("seguro-auto-modelo").value;
    var newFormulario = {
        nombre: formularioAutoNombre,
        correo: formularioAutoCorreo,
        telefono: formularioAutoTelefono,
        modelo: formularioAutoModelo
    };
    console.log(newFormulario);
    
}
export function formularioHogar (){

    var formularioHogarNombre = document.getElementById("seguro-hogar-nombre").value;
    var formularioHogarCorreo = document.getElementById("seguro-hogar-email").value;
    var formularioHogarTelefono = document.getElementById("seguro-hogar-telefono").value;
    var formularioHogarEstimado = document.getElementById("seguro-hogar-estimado").value;
    var newFormulario = {
        nombre: formularioHogarNombre,
        correo: formularioHogarCorreo,
        telefono: formularioHogarTelefono,
        estimado: formularioHogarEstimado
    };
    console.log(newFormulario);
    
}