import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { PieDePaginaComponent } from './pie-de-pagina/pie-de-pagina.component';
import { TareasComponent } from './tareas/tareas.component';
import { TareaIndividualComponent } from './tarea-individual/tarea-individual.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    PieDePaginaComponent,
    TareasComponent,
    TareaIndividualComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
