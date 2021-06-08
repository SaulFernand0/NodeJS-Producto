/*import{ pool } from '../database'

export const readAllUsers = async (req, res)=>{
    try{
        const response = await pool.query('select * from producto');
        return res.status(200).json(response.rows)
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
export const readUsers = async (req, res) => {
    try {
        const response = await pool.query('select * from producto where idproducto=$1',[req.params.id]);
        return res.status(200).json(response.rows)
    } catch (e) {
        console.log(e)
        res.status(500).json('Internal server error...!');
    }
}
export const createUser = async (req,res)=>{
    try {
        const{idproducto, nombre, precio, stock}=req.body;
        await pool.query('insert into producto values ($1, $2, $3, $4)',[idproducto, nombre, precio, stock]);
        return res.status(200).json(`Producto creado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
export const updateUsers = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        const{ nombre, precio, stock } = req.body;
        await pool.query('update producto set nombre=$1, precio=$2, stock=$3 where idproducto=$4', [nombre, precio, stock, id]);
        return res.status(200).json(`Producto ${ id } modificado correctamente`);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}
export const delUsers = async (req, res)=>{
    try{
        const id = parseInt(req.params.id);
        const response = await pool.query('delete from producto where idproducto=$1', [id]);
        return res.status(200).json(`Producto ${ id } eliminado correctamente`);
    }catch(e){
        console.log(e);
        return res.status(500).json('Internal server error...!')
    }
}*/

import { pool } from "../database"
const helpers=require('../libs/helpers');
export const readAllUsers=async(req,res)=>{
    try {
        const response=await pool.query('select * from usuario');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const readUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('select * from usuario where idusuario=$1',[id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const dellUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const response=await pool.query('delete from usuario where idusuario=$1',[id]);
        return res.status(200).json(`Usuario ${id} elimindo correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const updateUser=async(req,res)=>{
    try {
        const id=parseInt(req.params.id);
        const{username,password}=req.body;
        await pool.query('update usuario set username=$1,password=$2 where idusuario=$3',[username,password,id]);
        return res.status(200).json(`Usuario ${id} modificado correctamente.....`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}
export const createUser=async(req,res)=>{
    try {
        const{username,password}=req.body;
        const password2=await helpers.encryptPassword(password);
        await pool.query('insert into usuario(username,password)values($1,$2)',[username,password2]);
        return res.status(200).json(`Usuario ${username} creado correctamente`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!')
    }
}