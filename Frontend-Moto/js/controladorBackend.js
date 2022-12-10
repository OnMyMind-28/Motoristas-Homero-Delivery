let getMotoristas;
let getMotorista;
let postMotorista;
let putMotorista;
let deleteMotorista;
const endpoint = 'http://localhost:3000/motoristas';
//url la rutas de nuestro RestAPI
//****OBTENER MOTORISTAS TODOS*****************************************************************
const obtenerMotoristas = async ()=>{
 
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
const Historial = () => {
	document.getElementById("Histo").innerHTML = "";
	getMotoristas.forEach((historial) => {

		document.getElementById(	"Histo").innerHTML += `<div class="card" id="${historial.nombreMotorista}">
				
				<div class="card-body">
					<h5 class="card-title">${historial.apellidoMotorista}</h5>
					
					<hr>
					
				</div>
			</div>`;
	});
};
obtenerMotoristas().then(() => {
	Historial();
});