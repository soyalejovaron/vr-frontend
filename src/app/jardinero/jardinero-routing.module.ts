import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JardineroComponent } from './jardinero.component';

const routes: Routes = [{ path: '', component: JardineroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JardineroRoutingModule { }
