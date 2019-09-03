import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationsComponent } from './pages/prestations/prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  declarations: [PrestationsComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule
  ]
})
export class PrestationsModule { }

// faire pareil pour LoginRoutingModule sauf que c'est pas du lazy loading
// faire pareil pour PageNotFoundRoutingModule
// faire pareil pour ClientsRoutingModule
