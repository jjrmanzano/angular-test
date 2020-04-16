import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormRendererComponent } from './form-renderer/form-renderer.component';


const routes: Routes = [
  { path: 'form', component: FormRendererComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
