import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: Array<Object>;
  modeloItem: any;
  error: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.modeloItem = {};
    this.peticionExterna();
  }

  peticionExterna(): void {
    this.http.get('http://localhost:8080/api/lista')
      .subscribe((data: any) => {
        this.tareas = data;
      });
  }

  actualizar(): void {
    this.peticionExterna();
  }

  crearRegistro(): void {

    var parametros = { texto: this.modeloItem.nuevoNombre };

    this.http.post('http://localhost:8080/api/lista', parametros)
      .subscribe((respuesta) => {

        this.modeloItem.nuevoNombre = '';
        this.peticionExterna();

      });

  }

}
