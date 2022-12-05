///-----------------------------------------------Motorista-------------------------------
var motorista = [{
    nombreMotorista: "Hugo",
    apellidoMotorista: "Almendares",
    mail: "hugoalmendares97@gmail.com",
    password: "hugo",
    estado: "disponible",
    ordenesPendientes: {
      idOrdenP: "1",
      detalleOrden: "Lorem ipsum"
    },
    ordenesFinalizadas: {
      idOrdenF: "2",
      detalleOrden: "Lorem ipsum"
    },
    matricula: "ZRN1234"
  },
  {
    nombreMotorista: "Rodrigo",
    apellidoMotorista: "Suazo",
    mail: "rodri25@gmail.com",
    password: "rodrigo",
    estado: "disponible",
    ordenesPendientes: {
      idOrdenP: "1",
      detalleOrden: "Lorem ipsum"
    },
    ordenesFinalizadas: {
      idOrdenF: "2",
      detalleOrden: "Lorem ipsum"
    },
    matricula: "HAA0001"
  }];

//Local Storage Usuarios
var localStorageMotorista = window.localStorage;


if(localStorageMotorista.getItem('motorista')==null){
    localStorage.setItem('motorista', JSON.stringify(motorista));
} else {
    motorista = JSON.parse(localStorageMotorista.getItem('motorista'))
}



//Ventana modal formulario inicio sesión
function modalInicio () {
        document.getElementById ('modalInicio').innerHTML += `
        <div class="modal-container ">
    <form id="formularioInicio" class="modal-form" onsubmit="noRecargo(event)">
    <h5>Inicio de sesión</h5>
    <input id="mail" class="mt-2" type="text">
    <input id="pass" class="mt-2" type="text">
    <button class="btn-modal" onclick="seleccionarOpcion(5), seleccionarOpcion(6)">Iniciar sesión</button>
    </form>
  </div>
         `
    
   
}
function modalRegistro () {
    document.getElementById ('modalRegistro').innerHTML += `
    <div class="modal-container ">
<form id="formularioRegistro"  class="modal-form" onsubmit="noRecargo(event)">
<h5>Registro</h5>
<input id="mail" class="mt-2" type="text">
<input id="pass" class="mt-2" type="text">
<button class="btn-modal" onclick="seleccionarOpcion(5)">Iniciar sesión</button>
</form>
</div>
     `


}

/******************************************************************************************************************** */
/***Función para bloqueo de contenido al cambio de pagina */
const opcionA = 1 ; //opcion para ver el contenido despues del inico de sesión
const opcionPrincipal = 2; // opcion del contenido principal
const opcionInicio = 3; // opción para inicio de sesión
const opcionRegistro = 4; // opción para registrarse 
const opcionNavbar = 5; //opcion para visualizar navbar
const opcionNavInicio = 6; //opcion para visualizar Inicio de navabar
const opcionPedidos = 7; //opcion para visualizar Pedidos
const opcionMapa = 8; //opcion para visualizar Mapa
const opcionHistorial= 9; //opcion para visualizar Historial
const opcionCaja= 10; //opcion para visualizar Caja

function seleccionarOpcion(opcion){
    switch (opcion) {
        case opcionA:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            document.getElementById('contenido-9').style.display = "none";
            document.getElementById('contenido-10').style.display = "none";
            break;
        
        case opcionPrincipal:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            document.getElementById('contenido-9').style.display = "none";
            document.getElementById('contenido-10').style.display = "none";
              break; 
        //Opción de inicio de sesión 
           
        case opcionInicio:
          
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "block";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            document.getElementById('contenido-9').style.display = "none";
            document.getElementById('contenido-10').style.display = "none";
          break;
          //Opción para registrarse 
        case opcionRegistro:
         
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "block";
            document.getElementById('contenido-5').style.display = "none";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            document.getElementById('contenido-9').style.display = "none";
            document.getElementById('contenido-10').style.display = "none";
           
          break;
        
        //Opción para mostrar la navbar principal
        case opcionNavbar:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "block";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            document.getElementById('contenido-9').style.display = "none";
            document.getElementById('contenido-10').style.display = "none";
            break;
        //Opción para mostrar la navbar secundaria inicio
        case opcionNavInicio: 
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "block";
            document.getElementById('contenido-6').style.display = "block";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            document.getElementById('contenido-9').style.display = "none";
            document.getElementById('contenido-10').style.display = "none";
        break;
        //opción de navbar secundaria pedidos
        case opcionPedidos:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "block";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "block";
            document.getElementById('contenido-8').style.display = "none";
            document.getElementById('contenido-9').style.display = "none";
            document.getElementById('contenido-10').style.display = "none";
            break;
        //opción de navbar secundaria mapa
        case opcionMapa :
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "block";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "block";
            document.getElementById('contenido-9').style.display = "none";
            document.getElementById('contenido-10').style.display = "none";
            break;
        //opción de navbar secundaria historial
        case opcionHistorial:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "block";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            document.getElementById('contenido-9').style.display = "block";
            document.getElementById('contenido-10').style.display = "none";
            break;
        //opción de navbar secundaria caja
        case opcionCaja:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
            document.getElementById('contenido-5').style.display = "block";
            document.getElementById('contenido-6').style.display = "none";
            document.getElementById('contenido-7').style.display = "none";
            document.getElementById('contenido-8').style.display = "none";
            document.getElementById('contenido-9').style.display = "none";
            document.getElementById('contenido-10').style.display = "block";
            break;
            default:
            break;
        
    }
}
seleccionarOpcion();
/******************************************************************************************************************** */
//Funciones para genera el contenido de la app
//Genera el contenido de la pestaña pedidos
const actualizar = 1;
const rechazarPedido = 2;
const aceptarPedido = 3;
const retirarPedido = 4;
const entregarPedido = 5;
function ActualizarContPedido(opcionPedidos){
    switch (opcionPedidos) {
        case actualizar:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('cont1-pedidos').style.display = "block";
            document.getElementById('cont2-pedidos').style.display = "none";
            document.getElementById('cont3-pedidos').style.display = "none";
            document.getElementById('cont4-pedidos').style.display = "none";
            document.getElementById('cont5-pedidos').style.display = "none";
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-5').style.display = "block";
            
            break;
        case rechazarPedido:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('cont1-pedidos').style.display = "none";
            document.getElementById('cont2-pedidos').style.display = "block";
            document.getElementById('cont3-pedidos').style.display = "none";
            document.getElementById('cont4-pedidos').style.display = "none";
            document.getElementById('cont5-pedidos').style.display = "none";
            break;
        case aceptarPedido:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('cont1-pedidos').style.display = "none";
            document.getElementById('cont2-pedidos').style.display = "none";
            document.getElementById('cont3-pedidos').style.display = "block";
            document.getElementById('cont4-pedidos').style.display = "none";
            document.getElementById('cont5-pedidos').style.display = "none";
            break;
        case retirarPedido:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('cont1-pedidos').style.display = "none";
            document.getElementById('cont2-pedidos').style.display = "none";
            document.getElementById('cont3-pedidos').style.display = "none";
            document.getElementById('cont4-pedidos').style.display = "block";
            document.getElementById('cont5-pedidos').style.display = "none";
            break;
        case entregarPedido:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('cont1-pedidos').style.display = "none";
            document.getElementById('cont2-pedidos').style.display = "none";
            document.getElementById('cont3-pedidos').style.display = "none";
            document.getElementById('cont4-pedidos').style.display = "none";
            document.getElementById('cont5-pedidos').style.display = "block";
            break;
    
        default:
            break;
    }

}
/***************************************************************************************************************** */
function generaContPedidos(){
    let pedido = motorista;
    document.getElementById ('cont1-pedidos').innerHTML += `
    <div class="btn-rechazo">
    <h6>Nuevo pedido</h6>
    <a type="button" style="color:purple; borde:0; background-color: #FFC2B2;" onclick="">Rechazar</a>
    </div>
    <iframe class="mapPedidos" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d61916.45839773457!2d-87.2153088!3d14.09024!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2shn!4v1667777978068!5m2!1ses!2shn" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="text-contP">
    <h6 >Punto de retiro</h6>
    <p>Restaurante Tanna's Pizzas</p>
    <h6 >Punto de entrega</h6>
    </div>
    <div>
     <button class=" btn-aceptarP">Aceptar</button>
    </div>
    
    `
}generaContPedidos()

//Función para evitar el recargo por defecto del navegador al enviar formulario
function noRecargo(event){
    event.preventDefault();
}

//Función para ir hacia la pagina anterior
function back(){
    window.history.back();
}

//Función para validar campo vacio
//Función para validar inicio de sesión
/*
function validarInicio(mail , pass){
    var listaUsuarios = motorista ;
    var acceso = false;

    for (let i = 0; i < listaUsuarios.length; i++) {
        if (mail == listaUsuarios.mail && pass == listaUsuarios.password) {
            acceso = true;

        }
        
    }
    return acceso;

}
//Función para validar registro de usuario
//Función de iniciar sesión
document.querySelector('#opcion-inicio').addEventListener('click' , inicioSesion );
function inicioSesion(){
    var Smail = '';
    var Spass = '';
    var Sacceso = false;
    Smail = document.querySelector('#mail').value;
    Spass = document.querySelector('#pass').value;

    Sacceso = validarInicio(Smail , Spass);
    console.log(Sacceso);
}

function inicioSesion(){
    var  Smail = document.motorista.value;
    var pass = document.motorista.value;

    if (Smail == mail.mail && pass == pass.password) {
        alert("Welcome");
        
    }else{
        alert("Invalido");
    }
}
*/