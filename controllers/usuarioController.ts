import { Request, Response } from 'express';
import Usuario from '../models/usuario';

export const usersAll = async( req: Request, res: Response ) => {
    const usuarios = await Usuario.findAll();

    res.status(200).json({
        usuarios
    });
}

export const userById = async( req: Request, res: Response ) => {
    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );

    if( !usuario ) {
        return res.status(400).json({
            msg: `No existe un usuario con el id: ${ id }`
        })
    }

    res.status(200).json({
        usuario
    });
}

export const createUser = async( req: Request, res: Response ) => {
    const { body } = req;

    try {
        
        const usuario = await Usuario.create( { estado: 1, ...body } );

        res.status(200).json({
            usuario
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Hable con el administrador.'
        });
    }
}

export const updateUser = async( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const usuario = await Usuario.findByPk( id );

        if( !usuario ) {
            return res.status(400).json({
                msg: `No existe un usuario con el id: ${ id }`
            })
        }

        await usuario.update( body );

        res.status(200).json({
            usuario
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Hable con el administrador.'
        });
    }
}

export const deleteUser = async( req: Request, res: Response ) => {
    const { id } = req.params;

    try {
        const usuario = await Usuario.findByPk( id );

        if( !usuario ) {
            return res.status(400).json({
                msg: `No existe un usuario con el id: ${ id }`
            })
        }

        await usuario.update( { estado: 0 } );

        res.status(200).json({
            msg: 'Usuario eliminado.'
        });
    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg: 'Hable con el administrador.'
        });
    }
}