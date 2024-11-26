import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarProfessorComponent } from './editar-professor/editar-professor.component';

const routes: Routes = [
  { path: 'editar-professor/:id', component: EditarProfessorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
