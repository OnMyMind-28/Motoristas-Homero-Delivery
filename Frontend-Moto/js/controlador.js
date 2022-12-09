///-----------------------------------------------Motorista-------------------------------
/*var motorista = [{
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
  }];*/

//Local Storage Usuarios
var localStorageMotorista = window.localStorage;


if(localStorageMotorista.getItem('motorista')==null){
    localStorage.setItem('motorista', JSON.stringify(motorista));
} else {
    motorista = JSON.parse(localStorageMotorista.getItem('motorista'))
}
/******************************************************************************************************************* */
let getMotoristas;
let getMotorista;
let postMotorista;
let putMotorista;
let deleteMotorista;
//url la rutas de nuestro RestAPI
//****OBTENER MOTORISTAS TODOS*****************************************************************
const obtenerMotoristas = async ()=>{
  const endpoint = 'http://localhost:3000/motoristas/';
   const result = await fetch (endpoint, 
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    getMotoristas= await result.json();
   // console.log('Motorista', resultJSON);
};
obtenerMotoristas();
//****OBTENER MOTORISTA UNO*********************************************************************
const obtenerMotorista = async (id) =>{//Función para obtener solo un usuario
  const endpoint = 'http://localhost:3000/motoristas/';
    const result = await fetch (endpoint + id,//result almacena el resultado, +id es para concatenar
        {
        method: 'GET',
        
        headers: {
            'Content-Type': 'application/json'
        }
    });
    getMotorista = await result.json();
    //console.log('Motorista: ', resultJSON);
}

//****GUARDAR MOTORISTA (crear motorista)**********************************************************
const guardarMotorista = async (usuario) =>{//Para guardar o crear es POST
  const endpoint = 'http://localhost:3000/motoristas/';
    const result = await fetch (endpoint,
        {
            method: 'POST',
        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario) //Es lo que recibiria el backend para guardarlo en Mongodb
            //Para que sea valido nuestro JSON hay que parsearlo con *JSON.stringify*
        });
        postMotorista = await result.json();
        //console.log('Motorista guardado: ', resultJSON);
};

//****ACTUALIZAR MOTORISTA ***********************************************************************
const actualizarMotorista = async (usuario, id) =>{//Para actualizar es PUT
  const endpoint = 'http://localhost:3000/motoristas/';
    const result = await fetch (endpoint + id,
        {
            method: 'PUT',
        
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario) //Es lo que recibiria el backend para guardarlo en Mongodb
            //Para que sea valido nuestro JSON hay que parsearlo con *JSON.stringify*
        });
        putMotorista = await result.json();
       // console.log('Motorista actualizado: ', resultJSON);
};


//****ELIMINAR MOTORISTA*************************************************************************
const eliminarMotorista = async (id) =>{//Para eliminar es DELETE
  const endpoint = 'http://localhost:3000/motoristas/';
    const result = await fetch (endpoint + id,
        {
            method: 'DELETE',
        
            headers: {
                'Content-Type': 'application/json'
            },
           
        });
        deleteMotorista = await result.json();
       console.log('Motorista eliminado: ', resultJSON);
};
//eliminarMotorista('6382bd062df5e1ec1c531892');
/************************************************************************************************************************* */

/************************************************************************************************************************ */
//Ventana modal formulario inicio sesión
function modalInicio () {
        document.getElementById ('modalInicio').innerHTML += `
        <div class="modal-container ">
    <form id="formularioInicio" class="modal-form" onsubmit="noRecargo(event)">
    <h5>Inicio de sesión</h5>
    <div>
    <span class="input-group-addon "><i class="fa fa-user me-2  " ></i></span>
    <input id="mail" class="mt-2" type="text" placeholder="correo electrónico" onkeyup="ValidarCorreo(this)">
    </div>
    <div>
    <span class="input-group-addon"><i class="fa fa-lock me-2  "></i></span>
    <input id="pass" class="mt-2" type="password" placeholder="contraseña">
    </div>
    <button class="btn-modal mt-2" onclick="seleccionarOpcion(5), seleccionarOpcion(6)">Iniciar sesión</button>
    </form>
  </div>
         `
    
         
}
function modalRegistro () {
    document.getElementById ('modalRegistro').innerHTML += `
    <div class="modalR-container ">
<form id="formularioRegistro"  class="modalR-form" onsubmit="noRecargo(event), return validarCampoVacio(this)">
<h5>Registro</h5>
<div>
<p class="mt-2">Nombre</p>
<input id="nombre" class="" type="text">
</div>
<div>
Apellido
<input id="apellido" class="mt-2" type="text">
</div>
<div>
Número de identidad
<input id="identidad" class="mt-2" type="text">
</div>
<div>
Telefono
<input id="telefono" class="mt-2" type="text">
</div>
<div>
Vehículo que conduce
<input id="vehivulo" class="mt-2" type="text">
</div>
<div>
Número de placa
<input id="placa" class="mt-2" type="text">
</div>
<button type="button" class="btn-modal mt-2 " onclick=""
data-bs-toggle="modal" data-bs-target="#exampleModal">Enviar Solicitud</button>
</form>
</div>

<!-- Modal -->
<div class="modal fade modal-soli" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Homero Delivery</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Tu solicitud de resgistro sera enviada en cuanto pulses aceptar, recibiras un correo electrónico dentro de 8 dias.
        Si, no recibes ningun correo puedes contactarnos mediante nuestro Tel: 2022-1584-345

      </div>
      <div class="modal-footer">
      <a href="index.html">
      <button type="button" class="btn btn-secondary" >Aceptar</button>
      </a>
        
      </div>
    </div>
  </div>
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
const detallePedidoEntrega = 6;

function ActualizarContPedido(opcionPedidos){
    switch (opcionPedidos) {
        case actualizar:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('cont1-pedidos').style.display = "block";
            document.getElementById('cont2-pedidos').style.display = "none";
            document.getElementById('cont3-pedidos').style.display = "none";
            document.getElementById('cont4-pedidos').style.display = "none";
            document.getElementById('cont5-pedidos').style.display = "none";
            document.getElementById('cont6-pedidos').style.display = "none";
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
            document.getElementById('cont6-pedidos').style.display = "none";            break;
        case aceptarPedido:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('cont1-pedidos').style.display = "none";
            document.getElementById('cont2-pedidos').style.display = "none";
            document.getElementById('cont3-pedidos').style.display = "block";
            document.getElementById('cont4-pedidos').style.display = "none";
            document.getElementById('cont5-pedidos').style.display = "none";
            document.getElementById('cont6-pedidos').style.display = "none";           
             break;
        case retirarPedido:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('cont1-pedidos').style.display = "none";
            document.getElementById('cont2-pedidos').style.display = "none";
            document.getElementById('cont3-pedidos').style.display = "none";
            document.getElementById('cont4-pedidos').style.display = "block";
            document.getElementById('cont5-pedidos').style.display = "none";
            document.getElementById('cont6-pedidos').style.display = "none";           
             break;
        case entregarPedido:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('cont1-pedidos').style.display = "none";
            document.getElementById('cont2-pedidos').style.display = "none";
            document.getElementById('cont3-pedidos').style.display = "none";
            document.getElementById('cont4-pedidos').style.display = "none";
            document.getElementById('cont5-pedidos').style.display = "block";
            document.getElementById('cont6-pedidos').style.display = "none";
            break;
        case detallePedidoEntrega:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('cont1-pedidos').style.display = "none";
            document.getElementById('cont2-pedidos').style.display = "none";
            document.getElementById('cont3-pedidos').style.display = "none";
            document.getElementById('cont4-pedidos').style.display = "none";
            document.getElementById('cont5-pedidos').style.display = "none";
            document.getElementById('cont6-pedidos').style.display = "block";
          
            break;
        default:
            break;
    }

}
/***************************************************************************************************************** */
//Función para el contenido dentro de los submenu del menú lateral izquierdo
const notificaciones = 1;
const inviteAmigo = 2;
const soporte = 3;
const configuracion = 4;
const extra = 5;
/*
cont1-notificaciones
cont2-amigo
cont3-soporte
cont4-configuracion
*/
function OpcionesSubmenu (opcionSubmenu){
    switch (opcionSubmenu) {
        case notificaciones:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('contenido-all-pedidos').style.display = "none";
            document.getElementById('cont1-notificaciones').style.display = "block";
            document.getElementById('cont2-amigo').style.display = "none";
            document.getElementById('cont3-soporte').style.display = "none";
            document.getElementById('cont4-configuracion').style.display = "none";
            
            break;
        case inviteAmigo:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('contenido-all-pedidos').style.display = "none";
            document.getElementById('cont1-notificaciones').style.display = "none";
            document.getElementById('cont2-amigo').style.display = "block";
            document.getElementById('cont3-soporte').style.display = "none";
            document.getElementById('cont4-configuracion').style.display = "none";
            break;
        case soporte:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('contenido-all-pedidos').style.display = "none";
            document.getElementById('cont1-notificaciones').style.display = "none";
            document.getElementById('cont2-amigo').style.display = "none";
            document.getElementById('cont3-soporte').style.display = "block";
            document.getElementById('cont4-configuracion').style.display = "none";
            break;
        case configuracion:
            document.getElementById('contenido-all-principal').style.display = "none";
            document.getElementById('contenido-all-pedidos').style.display = "none";
            document.getElementById('cont1-notificaciones').style.display = "none";
            document.getElementById('cont2-amigo').style.display = "none";
            document.getElementById('cont3-soporte').style.display = "none";
            document.getElementById('cont4-configuracion').style.display = "block";
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
    <a type="button" style="color:purple; borde:0; background-color: #FFC2B2;" onclick="ActualizarContPedido(2)">Rechazar</a>
    </div>
    <iframe class="mapPedidos" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d61916.45839773457!2d-87.2153088!3d14.09024!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2shn!4v1667777978068!5m2!1ses!2shn" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="text-contP">
    <h6 >Punto de retiro</h6>
    <p>Restaurante Tanna's Pizzas</p>
    <h6 >Punto de entrega</h6>
    </div>
    <div>
     <button class=" btn-aceptarP" onclick="ActualizarContPedido(3)")>Aceptar</button>
    </div>
    
    `//En el button aceptar agreagremos una modal la cual nos pedira la confirmación de retiro del pedido
}generaContPedidos()

function pedidoAceptado(){
    document.getElementById('cont3-pedidos').innerHTML += `
    <div class="btn-rechazo">
    <h6 style=" color: rgba(150, 148, 148, 0.521);">
    <center>Lllegada estimada a las 17:45 hrs</h6></center>
    </div>
    <iframe class="mapPedidos" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d61916.45839773457!2d-87.2153088!3d14.09024!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2shn!4v1667777978068!5m2!1ses!2shn" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="text-contP">
    <h6 >Detalles de punto de retiro</h6>
    <p>Restaurante Tanna's Pizzas</p>
    <p>Córdoba-Avellaneda</p>
    </div>
    <div class="">

    <button class="  btnCenter" onclick="ActualizarContPedido(4)">Llegué al punto de retiro</button>
 
    </div>

    `
}pedidoAceptado()
 function detallePedido(){
    
    document.getElementById('cont4-pedidos').innerHTML += `
    <div  class="text-contR">
    <h6 >Restaurante Tanna's Pizzas</h6>
    <h6 >Córdoba-Avellaneda</h6>
    <p>Retirar a las 17:20 hrs</p>
    </div>

    <div class="container-retiro ">
    <div class="text-contR">
    <h6 style=" color: rgba(150, 148, 148, 0.521);">
    Detalles de la orden</h6>
    <p>ID pedido: 1</p>
    <p>Producto: Pizza familiar</p>
    <p>Nombre del cliente: Ricardo Rodriguez</p>
    </div>
    <button type="button" class=" btncentR"
     data-bs-toggle="modal" data-bs-target="#exampleModal">Retirar</button>
    </div>
    </div>
    
    <!-- Modal -->
<div class="modal fade modal-confir" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Homero Delivery</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <center>¿Confirmas que retiraste el pedido 1?</center>
       <button type="button" class=" btnconfir" data-bs-dismiss="modal" aria-label="Close"  onclick="ActualizarContPedido(5)">Confirmar</button>
       <button type="button" class=" btnconfir" data-bs-dismiss="modal">Cancelar</button>
      </div>
      <div class="modal-footer">
      
        
      </div>
    </div>
  </div>
</div> 

    `
 }detallePedido()
//data-bs-dismiss="modal" aria-label="Close" 
 function detallePuntoEntrega(){
    document.getElementById('cont5-pedidos').innerHTML += `
    <div class="btn-rechazo">
    <h6 style=" color: rgba(150, 148, 148, 0.521);">
    <center>Lllegada estimada a las 17:45 hrs</h6></center>
    </div>
    <iframe class="mapPedidos" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d61916.45839773457!2d-87.2153088!3d14.09024!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2shn!4v1667777978068!5m2!1ses!2shn" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <div class="text-contP">
    <h6 >Detalles de punto de entrega</h6>
    <p>Calle entre Sargento y Moreno</p>
    <p>Edificio trejo, apartamento No.3</p>
    <br>
    <p>Nombre del cliente: Ricardo Rodriguez</p>
    </div>
    <div class="">

    <button class="btnLlegueEntrega" onclick="ActualizarContPedido(6)">Llegué al punto de entrega</button>
 
    </div>

    `
 }detallePuntoEntrega()

 function DetallePedidoEntrega(){
      
    document.getElementById('cont6-pedidos').innerHTML += `
    <div  class="text-contR">
    <h6 >Restaurante Tanna's Pizzas</h6>
    <h6 >Córdoba-Avellaneda</h6>
    <p>Entrega a las 17:45 hrs</p>
    </div>

    <div class="container-retiro ">
    <div class="text-contR">
    <h6 style=" color: rgba(150, 148, 148, 0.521);">
    Detalles de la orden</h6>
    <p>ID pedido: 1</p>
    <p>Producto: Pizza familiar</p>
    <p>Nombre del cliente: Ricardo Rodriguez</p>
    </div>
    <button type="button" class="btnEntrega"  onclick="modalEnd()" 
    data-bs-toggle="modal" data-bs-target="#staticBackdrop">Entregar</button>
    </div>
    </div>
    
    <!-- Button trigger modal -->
    

    `
 }DetallePedidoEntrega()

 function modalEnd(){
    document.getElementById('modal-end').innerHTML += `
    <!-- Modal -->
  <div class="modal fade modal-Entrega-End" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Homero Delivery</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <center>¿Confirmas que entregaste el pedido 1?</center>
        <button type="button" class=" btnconfir" 
          onclick="seleccionarOpcion(3)">Confirmar</button>
        <button type="button" class=" btnconfir" data-bs-dismiss="modal">Cancelar</button>
        </div>
        
      </div>
    </div>
  </div>
    

    `
 }modalEnd()
//Función para evitar el recargo por defecto del navegador al enviar formulario
function noRecargo(event){
    event.preventDefault();
}

//Función para ir hacia la pagina anterior
function back(){
    window.history.back();
}
//Funcion para validar campo vacio y de esta manera escribimos menos código
function validarCampoVacio(id){
  let campo = document.getElementById(id);
  if(campo.value == ''){
      campo.classList.remove('input-sucess');
      campo.classList.add('input-error');//traer una clase classlist.add
  } else{
      campo.classList.add('input-sucess');
  }
  if(campo.value == ''){
      campo.classList.remove('input-sucess');
      campo.classList.add('input-error');//traer una clase classlist.add
  }else{
      campo.classList.add('input-sucess');
  }
}
//Función para validar correo, regex (regular special)
function ValidarCorreo(campo){
  console.log(campo.value);
  //let campo = document.getElementById(id);
  var regex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test(campo.value)) {
      campo.classList.remove('input-error');
      campo.classList.add('input-sucess');
  } else{
      campo.classList.remove('input-sucess');
      campo.classList.add('input-error');  
  }
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