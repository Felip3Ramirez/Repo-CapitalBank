import { formularioAuto, formularioHogar } from "../../../controllers/ControllerSeguro.js";
import { expresionesRegulares } from "../../../helpers/expresiones.js";

document.getElementById("botonSolicitar").addEventListener("click", formularioAuto);
document.getElementById("botonSolicitar").addEventListener("click", formularioHogar);

let inputs = document.getElementsByTagName("input");
for (let index = 0; index < inputs.length; index++) {
    inputs[index].addEventListener("keyup", validarFormulario);
}

function validarFormulario(e) {
    // console.log(e.target.name);
    switch (e.target.name) {
        case "seguro-auto-nombre":
            if (expresionesRegulares.nombre.test(e.target.value)) {
                document.getElementById("seguro-auto-nombre")
                document.getElementById("seguro-auto-nombre")
            }
            break;
        case "seguro-auto-email":
            if (expresionesRegulares.usuario.test(e.target.value)) {
                document.getElementById("seguro-auto-email")
                document.getElementById("seguro-auto-email")
            }
            break;
        case "seguro-auto-telefono":
            if (expresionesRegulares.correo.test(e.target.value)) {
                document.getElementById("seguro-auto-telefono").
                    document.getElementById("seguro-auto-telefono")
            }
            break;
        case "seguro-auto-modelo":
            if (expresionesRegulares.contraseña.test(e.target.value)) {
                document.getElementById("seguro-auto-modelo")
                document.getElementById("seguro-auto-modelo")
            }
            break;
        /*seguro hogar --------------------------------------------------*/
        case "seguro-hogar-nombre":
            if (expresionesRegulares.nombre.test(e.target.value)) {
                document.getElementById("seguro-hogar-nombre")
                document.getElementById("seguro-hogar-nombre")
            }
            break;
        case "seguro-hogar-email":
            if (expresionesRegulares.usuario.test(e.target.value)) {
                document.getElementById("seguro-hogar-email")
                document.getElementById("seguro-hogar-email")
            }
            break;
        case "seguro-hogar-telefono":
            if (expresionesRegulares.correo.test(e.target.value)) {
                document.getElementById("seguro-hogar-telefono").
                    document.getElementById("seguro-hogar-telefono")
            }
            break;

        case "seguro-hogar-estimado":
            if (expresionesRegulares.contraseña.test(e.target.value)) {
                document.getElementById("seguro-hogar-estimado")
                document.getElementById("seguro-hogar-estimado")
            }
            break;


        default:
            break;
    }
}