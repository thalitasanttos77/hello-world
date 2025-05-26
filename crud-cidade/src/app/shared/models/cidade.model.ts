import { Estado } from '../../shared/models/estado.model';

export class Cidade {
    constructor(
        public id: number = 0, 
        public nome: string = '', 
        //public estado: string = ''
        public estado: Estado = new Estado()
    ){}
}
