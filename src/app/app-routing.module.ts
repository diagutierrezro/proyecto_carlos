import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './components/curso/curso.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { ProfesorComponent } from './components/profesor/profesor.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path: 'estudiante', component: EstudianteComponent},
  {path: 'profesor', component: ProfesorComponent},
  {path: 'empresa', component: EmpresaComponent},
  {path: 'curso', component: CursoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
