import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CrudService } from 'src/app/servicio/crud.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  formularioDeEmpleados:FormGroup;
  id: any;

  constructor(public formulario:FormBuilder, private activeRoute:ActivatedRoute, private crudService: CrudService, private router: Router) { 
    //coger la id de la url con el activatedroute
    this.id=this.activeRoute.snapshot.paramMap.get('id');

    this.crudService.obtenerEmpleado(this.id).subscribe(resp => {

      this.formularioDeEmpleados.setValue({
        nombre: resp[0]['nombre'],
        correo: resp[0]['correo']
      })
    })
    
    this.formularioDeEmpleados=this.formulario.group({
      nombre:[''],
      correo:['']
    });

  }


  ngOnInit(): void {
  }

  public enviarDatos():any{
    this.crudService.editarEmpleado(this.id, this.formularioDeEmpleados.value).subscribe(resp =>{
     this.router.navigateByUrl('/listar-empleado')
    })
    
    
  }


}
