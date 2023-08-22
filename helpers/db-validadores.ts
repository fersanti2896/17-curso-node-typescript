import Usuario from '../models/usuario';

const isEmailExists = async( correo = '' ) => {
    /* Verificando si el email existe */
    const existEmail = await Usuario.findAll({ where: { correo } });
    console.log(existEmail)

    if( Object( existEmail).length !== 0 ) {
        throw new Error(`El correo ${ correo } ya existe en otra cuenta.`)
    }
}

export {
    isEmailExists
}