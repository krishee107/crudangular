import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from '../interfaces/Empleado';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  API: string = 'http://localhost/develoteca angular/'; //api de php crudo

  constructor(private clienteHttp:HttpClient) { 

  }


  agregarEmpleado(datosEmpleado: Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?insertar=1", datosEmpleado);
  }

  listarEmpleados(){
    return this.clienteHttp.get(this.API);
  }

  borrarEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?borrar="+ id);
  }

  obtenerEmpleado(id:any):Observable<any>{
    return this.clienteHttp.get(this.API+"?consultar="+ id);
  }
  editarEmpleado(id:any, datosEmpleado: Empleado):Observable<any>{
    return this.clienteHttp.post(this.API+"?actualizar="+id, datosEmpleado);
  }

}