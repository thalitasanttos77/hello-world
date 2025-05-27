export class Endereco {
    constructor (
        public id: number = 0, 
        public rua: string = '', 
        public numero: number = 0, 
        public complemento: string = '', 
        public bairro: string = '', 
        public cep: string = '', 
        public cidade: string = '', 
        public estado: string = '', 
        public residencial: boolean = false
    ) {
    }


}
