import { Component } from '@angular/core';
import { Usuario} from './models/usuario';
import { servicioUsuario } from './services/servicioUsuario';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers:[servicioUsuario]
})
export class AppComponent {
  title = 'Soportame App!';
  public usuario : Usuario;
  public identity = false;
  public token;
  constructor(
    private _servicioUsuario : servicioUsuario
  ){
    this.usuario = new Usuario('','','','','');
  }
  ngOnInit(){
    
  }
  public onSubmit(){
    this._servicioUsuario.login(this.usuario).subscribe(
      response => {
        console.log(response)
      },
      error =>{
        var errorMessage = <any>error;
        if(errorMessage != null){
          console.log(error);
        }
      }
    )
  }
}
