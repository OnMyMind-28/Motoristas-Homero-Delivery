import { Router } from "express";
import express, {  Request, Response } from 'express';
import { ActualizarUsuario, CrearUsuario, EliminarUsuario, ObtenerUsuario, ObtenerUsuarios } from "../controllers/usuarios.controller";


export const routeUsuarios: Router = express.Router();
//GET
routeUsuarios.get('/:id', ObtenerUsuario);

routeUsuarios.get('/', ObtenerUsuarios);
//POST
routeUsuarios.post('/', CrearUsuario);
//PUT
routeUsuarios.put('/:id', ActualizarUsuario);
//DELETE
routeUsuarios.delete('/:id', EliminarUsuario);
  
  