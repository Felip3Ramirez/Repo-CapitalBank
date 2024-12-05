export { usuarios } from "../models/modelLogin.js";
export { expresionesRegulares } from "../helpers/expresiones.js";

export function login(e) {
    e.preventDefault();
    const loginUsuario = document.getElementById("login-usuario").value;
    const loginContrasena = document.getElementById("login-contrasena").value;

    if (!loginUsuario || !loginContrasena) {
        console.log("Complete todos los campos.");
        return false;
    }

    const usuarioEncontrado = usuarios.find(
        (usuario) =>
        usuario.usuario === loginUsuario && usuario.contrasena === loginContrasena
    );

    if (usuarioEncontrado) {
        window.location.href = "/index.html";
    } else {
        console.log("ingrese los datos correctamente nuevamente.");
    }
}

export function register(e) {
    e.preventDefault();
    const registroNombre = document.getElementById("register-nombre").value;
    const registroUsuario = document.getElementById("register-usuario").value;
    const registroCorreo = document.getElementById("register-correo").value;
    const registroContrasena = document.getElementById("register-contrasena").value;
    const registroConfirmarContrasena = document.getElementById("register-confirmar-contrasena").value;

    if (!registroNombre || !registroUsuario || !registroCorreo || !registroContrasena || !registroConfirmarContrasena) {
        console.log("Por favor complete todos los campos.");
    }

    if (registroContrasena !== registroConfirmarContrasena) {
        console.log("Las contraseñas no coinciden.");
    }

    const nuevoUsuario = {
        nombre: registroNombre,
        usuario: registroUsuario,
        correo: registroCorreo,
        contrasena: registroContrasena,
    };

    usuarios.push(nuevoUsuario);
    window.location.href = "/views/pages/viewCredito.html";
}

export function mostrarFormularioLogin() {
    document.getElementById("form-login").style.display = "flex";
    document.getElementById("form-register").style.display = "none";
}

export function mostrarFormularioRegistro() {
    document.getElementById("form-login").style.display = "none";
    document.getElementById("form-register").style.display = "flex";
}