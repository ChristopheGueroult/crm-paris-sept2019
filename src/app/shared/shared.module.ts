import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauComponent } from './components/tableau/tableau.component';
import { TemplatesModule } from '../templates/templates.module';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent],
  imports: [
    CommonModule,
    TemplatesModule
  ],
  exports: [TotalPipe, StateDirective, TableauComponent, TemplatesModule],
})
export class SharedModule { }
