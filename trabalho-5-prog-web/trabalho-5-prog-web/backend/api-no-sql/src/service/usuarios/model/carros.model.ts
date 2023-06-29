import { Schema } from 'mongoose';
import { ICarro } from './carros.interface';

export const CarroSchema = new Schema<ICarro>({
    idModelo: String,
    nome: String,
    renavam: {
        type: String,
        lowercase: true,
    },
    placa: {
        type: String,
        lowercase: true,
    },
    valor: Number,
    ano: Number,
}, {
    timestamps: true,
    collection: 'carros',
});
