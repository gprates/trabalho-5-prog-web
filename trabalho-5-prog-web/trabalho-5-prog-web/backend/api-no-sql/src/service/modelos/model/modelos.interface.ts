import { Document } from 'mongoose';

export interface IModelo extends Document {
    idMarca?: string,
    nome?: string,
};
