import express, { Application } from 'express';
import cors from 'cors';

import userRoutes from '../routes/usuario';
import db from '../database/connection';

class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        /* Llamando a la conexión de la base de datos */
        this.dbConnection();

        /* Llamando los middlewares */
        this.middlewares();

        /* Definiendo las rutas */
        this.routes();
    }

    /* Conexión a la base de datos */
    async dbConnection() {
        try {
            await db.authenticate();
            console.log('La base de datos está online.')
        } catch (error) {
            console.log(error);
            throw new Error('Error en la conexión de la base de datos.');
        }
    }

    middlewares() {
        /* Configurando los CORS */
        this.app.use( cors() );

        /* Lectura del body */
        this.app.use( express.json() );

        /* Carpeta pública */
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.apiPaths.usuarios, userRoutes )
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`El servidor corriendo en el puerto: ${ this.port }`);
        } );
    }
}

export default Server;