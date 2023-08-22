import { Request, Response } from 'express';

export const usersAll = ( req: Request, res: Response ) => {
    res.status(200).json({
        msg: 'Get Usuarios'
    });
}

export const userById = ( req: Request, res: Response ) => {
    const { id } = req.params;

    res.status(200).json({
        msg: 'Get Usuario By Id',
        id
    });
}

export const createUser = ( req: Request, res: Response ) => {
    const { body } = req;

    res.status(200).json({
        msg: 'Post Usuario',
        body
    });
}

export const updateUser = ( req: Request, res: Response ) => {
    const { id } = req.params;
    const { body } = req;

    res.status(200).json({
        msg: 'Update Usuario',
        body,
        id
    });
}

export const deleteUser = ( req: Request, res: Response ) => {
    const { id } = req.params;

    res.status(200).json({
        msg: 'Delete Usuario',
        id
    });
}