import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Routing Modulo
import { RoutingModule } from './routing.module';

//Modulos
import { SharedModule } from '../shared/shared.module';

//Pages
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule, 
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
