type Gender = "Male" | "Female";//Masculino o femenino
 export interface Usuario {
    id: string,
    name: string ,
    race: string ,
    gender:Gender ,
    bio: string,
    health: string,
    attack: string,
    defense?: string,//opcional atributo opcional
    kiRestoreSpeed: string,
    abilities: Array<string>,
    img: string
};