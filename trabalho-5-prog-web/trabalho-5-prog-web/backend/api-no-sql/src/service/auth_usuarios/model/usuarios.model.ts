import { Schema } from 'mongoose';
import { IUsuario } from './usuarios.interface';

export const UsuarioSchema = new Schema<IUsuario>({
    nome: String,
    email: String,
    senha: String,
}, {
    timestamps: true,
    collection: 'usuarios',
});
