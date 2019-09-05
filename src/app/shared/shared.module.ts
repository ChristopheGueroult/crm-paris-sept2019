import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { TableauComponent } from './components/tableau/tableau.component';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent],
  imports: [
    CommonModule
  ],
  exports: [TotalPipe, StateDirective, TableauComponent],
})
export class SharedModule { }
