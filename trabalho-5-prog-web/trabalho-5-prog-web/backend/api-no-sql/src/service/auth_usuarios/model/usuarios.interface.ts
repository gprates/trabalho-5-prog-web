import { Document } from 'mongoose';

export interface IUsuario extends Document {
    nome: string,
    email: string,
    senha: string,
};
