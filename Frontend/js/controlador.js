///-----------------------------------------------Motorista-------------------------------
var motorista = [{
    idMotorista:1,
    nombre: "Antonio",
    apellido: "Madrid",
    mail: "antoniomadrid@gmail.com",
    password: "1Anto",
    /******Pedidos******************************************************************************* */
    pedidos: [{
        numeroPedido: 1,
        puntoRetiro: "Lorem djcnj",
        puntoEntrega: "Lorem jvskjav",
        detalleRetiro: "Bulevar",
        detalleEntrega: "Avenida",
        detalleOrde: "Combo Familiar Burger King"
    }

    ],
    /******Mapa******************************************************************************* */
    mapa:[{
        miUbicacion: "Cabañas"
    }],
    /******Historial************************************************************************************** */
    historialEntregas: [{
        numeroTransaccion: 1,
        icono: "fa-solid fa-user-group ",
        horaDeEntrega: 1000
    },
        {
            numeroTrasaccion: 2,
            horaDeEntrega: 0800
            
        }
    ],
    /******Caja************************************************************************************** */
    caja:[{
        pago: 1,
        monto: 50,
        fecha: "15/10/2022",
        montoPropina: 25,
        totalPago: 985
    }]
},
 
   {
    idMotorista:2,
        nombre: "Johan",
        apellido: "Salvador",
        mail: "johansalvador@yahoo.com",
        password: "2johan",
    /******Pedidos******************************************************************************* */
        pedidos: [{
            numeroPedido: 1,
            puntoRetiro: "Lorem djcnj",
            puntoEntrega: "Lorem jvskjav",
            detalleRetiro: "Bulevar",
            detalleEntrega: "Avenida",
            detalleOrde: "Combo Familiar Burger King"
        }

        ],
        /******Mapa******************************************************************************* */
        mapa:[{
            miUbicacion: "Cabañas",
        }],
        /******Historial************************************************************************************** */
        historialEntregas: [{
            numeroTransaccion: 3 ,
            icono: "fa-solid fa-user-group ",
            horaDeEntrega: 1100 
        },
            {
                numeroTransaccion: 4,
                icono: "fa-solid fa-user-group ",
                horaDeEntrega: 1300
                
            },

        ],
        /******Caja************************************************************************************** */
        caja:[{
            pago: 1,
            monto: 50,
            fecha: "15/10/2022",
            montoPropina: 25,
            totalPago: 985

        }]
    },
    {
        idMotorista:3,
        nombre: "Victoria",
        apellido: "Rodríguez",
        mail: "victoriarodriguez@gmail.com",
        password: "3Victori",
  /******Pedidos******************************************************************************* */
        pedidos: [{
            numeroPedido: 1,
            puntoRetiro: "Lorem djcnj",
            puntoEntrega: "Lorem jvskjav",
            detalleRetiro: "Bulevar",
            detalleEntrega: "Avenida",
            detalleOrde: "Combo Familiar Burger King"
        }

        ],
        /******Mapa******************************************************************************* */
        mapa:[{
            miUbicacion: "Cabañas",
        }],
        /******Historial************************************************************************************** */
        historialEntregas: [{
            numeroTransaccion: 5,
            icono: "fa-solid fa-user-group ",
            horaDeEntrega: 1600 
        },
            {
                numeroTransaccion: 6,
                icono: "fa-solid fa-user-group ",
                horaDeEntrega: 1500 
            }
        ],
        /******Caja************************************************************************************** */
        caja:[{
            pago: 1,
            monto: 50,
            fecha: "15/10/2022",
            montoPropina: 25,
            totalPago: 985

        }]
      
    }
];

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
    <form class="modal-form">
    <h5>Inicio de sesión</h5>
    <input id="mail" class="mt-2" type="text">
    <input id="pass" class="mt-2" type="text">
    <button class="btn-modal" onclick="seleccionarOpcion(4)">Iniciar sesión</button>
    </form>
  </div>
         `
    
   
}
/***Función para bloqueo de contenido al cambio de pagina */
const opcionInicio = 1; // opción para inicio de sesión
const opcionRegistro = 2; // opción para registrarse 
const opcionPrincipal = 3; // opcion del contenido principal
const opcionA = 4 ; //opcion para ver el contenido despues del inico de sesión
const opcionB = 5; //opcion para visualizar pedidos
const opcionC = 6; //opcion para visualizar ---
const opcionD = 7; //opcion para visualizar ---
const opcionE = 8; //opcion para visualizar ---
const opcionF= 9; //opcion para visualizar ---


function seleccionarOpcion(opcion){
    switch (opcion) {
        case opcionInicio:
          
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "block";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";

          break;
        case opcionRegistro:
         
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "block";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
           
          break;
        case opcionPrincipal:
            document.getElementById('contenido-1').style.display = "block";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "none";
          break; 
          case opcionA:
            document.getElementById('contenido-1').style.display = "none";
            document.getElementById('contenido-2').style.display = "none";
            document.getElementById('contenido-3').style.display = "none";
            document.getElementById('contenido-4').style.display = "block";
            break;
           
           
        
    }
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