import { Component } from '@angular/core';
import { Usuario} from './models/usuario';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'Soportame App!';
  public usuario : Usuario;
  public identity = false;
  public token;
  constructor(){
    this.usuario = new Usuario('','','','','');
  }
  public onSubmit(){
    console.log(this.usuario);
  }
}
