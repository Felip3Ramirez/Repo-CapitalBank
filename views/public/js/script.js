//botones del header y barra de navegacion primerias
function irARegistro() {
    window.location.href = "/views/pages/register.html";
}
function irALogin() {
    window.location.href = "/views/pages/login.html";
}
function irAPrincipal() {
    window.location.href = "/index.html";
}
function irAServicios() {
    window.location.href = "/views/pages/servicios.html";
}
function irATarjetasCredito() {
    window.location.href = "/views/pages/tarjetas.html";
}
function irACuentasAhorro() {
    window.location.href = "/views/pages/cuentasAhorros.html";
}
function irALineasCredito() {
    window.location.href = "/views/pages/lineasCredito.html";
}
function irAEmpresas() {
    window.location.href = "/views/pages/empresas.html";
}
function irASeguros() {
    window.location.href = "/views/pages/seguros.html";
}
//botones de los servicios
function irANotificacion() {
    window.location.href = "/views/pages/notificaciones.html";
}
function irATransferencias() {
    window.location.href = "/views/pages/transferencias.html";
}
function irAPagoFactura() {
    window.location.href = ".html";
}
function irAConsultaMovimientos() {
    window.location.href = ".html";
}
function irAConsultaCuenta() {
    window.location.href = ".html";
}

function irA() {
    window.location.href = ".html";
}





function showInfo(id) {
    // Verifica si ya existe un modal y lo elimina antes de crear uno nuevo
    const existingModal = document.querySelector(".modal");
    if (existingModal) {
        existingModal.remove();
    }

    const section = document.getElementById(id);
    const info = section.querySelector(".informacionAdicional");

    // Crea el modal
    const modal = document.createElement("div");
    modal.className = "modal";

    // Crea el contenido del modal con un botón para cerrar
    modal.innerHTML = `
      <div class="modal-content">
        ${info.innerHTML}
        <button class="close-modal" onclick="closeModal()">Cerrar</button>
      </div>
    `;

    // Añade el modal al body
    document.body.appendChild(modal);
    modal.style.display = "block";

    // Estilo para el fondo de modal (opcional para mejorar UX)
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";
    document.body.appendChild(overlay);
    overlay.style.display = "block";
}

function closeModal() {
    // Elimina el modal y la capa de fondo
    const modal = document.querySelector(".modal");
    const overlay = document.querySelector(".modal-overlay");
    if (modal) {
        modal.remove();
    }
    if (overlay) {
        overlay.remove();
    }
}
/*Seccion de seguros --------------------------------------------------------------------------------------*/

