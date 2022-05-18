import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { CursoComponent } from './components/curso/curso.component';
import { LayoutModule } from './layout/layout.module';
import { EmpresaComponent } from './components/empresa/empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    EstudianteComponent,
    ProfesorComponent,
    CursoComponent,
    EmpresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatPaginatorModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
