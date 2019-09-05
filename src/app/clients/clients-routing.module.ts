import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './pages/clients/clients.component';
import { PageClientAddComponent } from './pages/page-client-add/page-client-add.component';

const appRoutes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'add', component: PageClientAddComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class ClientsRoutingModule { }
