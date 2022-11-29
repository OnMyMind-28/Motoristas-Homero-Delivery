import mongoose from "mongoose";
import { Usuario } from './usuarios.model';

const schema = new mongoose.Schema<Usuario>({//Usuario es la interface que creamos 
    id: String,
    name: String ,
    race: String ,
    gender:String ,
    bio: String,
    health: String,
    attack: String,
    defense: String,
    kiRestoreSpeed: String,
    abilities: Array<String>,
    img: String
});

export const UsuariosSchema = mongoose.model('usuarios', schema);//usuarios es el nombre de la colección