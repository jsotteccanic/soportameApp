export class Usuario {
    constructor(
        public _id: string,
        public usuario: String,
        public password: String,
        public colaborador:string,
        public rol: String
    ) { }
}