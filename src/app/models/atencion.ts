export class Atencion {
    constructor(
       public tipoAtencion: String,
       public fecha_inicio: String,
       public fecha_fin: String,
       public descripcion: String,
       public colaborador: String,
       public usuario: String,
       public abierto: Boolean
    ) { }
}