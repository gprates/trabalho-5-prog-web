import { Schema } from 'mongoose';
import { IMarca } from './marcas.interface';

export const MarcaSchema = new Schema<IMarca>({
    nome: String,
}, {
    timestamps: true,
    collection: 'marcas',
});
