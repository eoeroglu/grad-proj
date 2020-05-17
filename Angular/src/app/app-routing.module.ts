import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JqueryTestComponent } from './jquery-test/jquery-test.component';


const routes: Routes = [{ path: 'asas', component: JqueryTestComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
