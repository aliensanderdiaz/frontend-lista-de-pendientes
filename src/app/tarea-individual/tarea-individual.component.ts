import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tarea-individual',
  templateUrl: './tarea-individual.component.html',
  styleUrls: ['./tarea-individual.component.css']
})
export class TareaIndividualComponent implements OnInit {

  @Input() tarea: any;
  @Output() cambioTarea: EventEmitter<number> = new EventEmitter();

  mostrarDatos: Boolean;
  tareaModel: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.tareaModel = {};
  }

  activarEdicion(nombre: String): void {

    if (this.tarea.terminado) {
      return;
    }
    this.mostrarDatos = true;
    this.tareaModel.nombre = nombre;
    this.tareaModel.terminado = this.tarea.terminado;
    this.tareaModel._id = this.tarea._id;
  }


  editarTarea(tareaInfo) {

    var parametros = { texto: this.tareaModel.nombre, terminado: this.tareaModel.terminado };

    console.log({parametros});
    

    this.http.put(`http://localhost:8080/api/lista/${tareaInfo._id}`, parametros)
      .subscribe((respuesta) => {

        this.cambioTarea.emit();

      })
  }

  borrarRegistro(tareaInfo): void {
    this.http.delete('http://localhost:8080/api/lista/' + tareaInfo._id)
      .subscribe((respuesta) => {

        this.cambioTarea.emit();

      })
  }

  terminarTarea(): void {
    console.log(this.tarea);
    
    if (this.tarea.terminado) {
      return;
    }

    this.tareaModel.nombre = this.tarea.texto;
    this.tareaModel.terminado = true;

    console.log({ tareaModel: this.tareaModel});
    

    this.editarTarea(this.tarea);
  }

}
