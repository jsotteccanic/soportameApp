import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Global} from './variableGlobal';
@Injectable()
export class servicioUsuario{
    public url: string;
    constructor(private _http: Http){
        this.url = Global.url;
    }
    login(usuario, gethash = null){
        if(gethash != null){
            usuario.gethash =  gethash;
        }
        let json = JSON.stringify(usuario);
        // let params = json;
        console.log(usuario);
        let head = new Headers({'Content-type':'application/json'});
        // console.log(params);
        return this._http.post(this.url+'usuario/login',json,{headers:head})
                .map(res=> res.json);
    
    }
}