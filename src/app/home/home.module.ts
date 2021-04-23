import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ExtraOptions, Router, RouterModule } from '@angular/router';

const routerOptions: ExtraOptions = {
  anchorScrolling: "enabled",
  scrollPositionRestoration: 'enabled'
}

@NgModule({
  declarations: [HomeComponent,],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
