import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JardineroRoutingModule } from './jardinero-routing.module';
import { JardineroComponent } from './jardinero.component';


@NgModule({
  declarations: [JardineroComponent],
  imports: [
    CommonModule,
    JardineroRoutingModule
  ]
})
export class JardineroModule { }
