import { Schema } from 'mongoose';
import { IModelo } from './modelos.interface';

export const ModeloSchema = new Schema<IModelo>({
    idMarca: String,
    nome: String,
}, {
    timestamps: true,
    collection: 'modelos',
});
