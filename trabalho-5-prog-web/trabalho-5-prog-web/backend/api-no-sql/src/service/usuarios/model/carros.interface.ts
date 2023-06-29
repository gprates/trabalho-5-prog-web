import { Document } from 'mongoose';

export interface ICarro extends Document {
    idModelo: string,
    nome?: string,
    renavam?: string,
    placa?: string,
    valor?: number,
    ano?: number,
};
