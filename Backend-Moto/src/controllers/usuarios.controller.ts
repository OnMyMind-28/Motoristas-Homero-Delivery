import  { Request, Response } from 'express';
import { UsuariosSchema } from '../model/usuarios.schema';


export const ObtenerUsuario = async (req: Request, res: Response) => {
   const result =  await UsuariosSchema.find({_id: req.params.id});
   res.send(result.length === 1 ? result [0] : {});
   res.end();
  };
  export const ObtenerUsuarios = (req: Request, res: Response) => {
    UsuariosSchema.find().then(result =>{
      res.send(result);
      res.end();
    })
     
    };

export const CrearUsuario = async (req: Request, res: Response) => {
    const nuevoUsuario = new UsuariosSchema(
     // req.body ->se puede solo agregando esto o atribito por atribito como se muestra en el comentario
      
      {
        id: req.body.id,
        name: req.body.name,
        race: req.body.race,
        gender: req.body.gender,
        bio: req.body.bio,
        health: req.body.health,
        attack: req.body.attack,
        defense: req.body.defense,
        kiRestoreSpeed: req.body.kiRestoreSpeed,
        abilities: req.body.abilities,
        img: req.body.img
    }
    );
    const result =  await nuevoUsuario.save();
    res.send(result);
    res.end();
  };

export const ActualizarUsuario = async (req: Request, res: Response) => {
  const result = await UsuariosSchema.updateOne({_id: req.params.id },
    {
      id: req.body.id,
      name: req.body.name,
      race: req.body.race,
      gender: req.body.gender,
      bio: req.body.bio,
      health: req.body.health,
      attack: req.body.attack,
      defense: req.body.defense,
      kiRestoreSpeed: req.body.kiRestoreSpeed,
      abilities: req.body.abilities,
      img: req.body.img,
    });
    res.send(
      {
        massage: 'Actualizar usuario: '+ req.params.id, 
        result
      });
    res.end();
  };
export const EliminarUsuario = async (req: Request, res: Response) => {
 const result =  await UsuariosSchema.remove({_id: req.params.id});
    res.send({
      massage: 'Eliminar usuario: '+ req.params.id,
      result
    
    });
   
  };

  