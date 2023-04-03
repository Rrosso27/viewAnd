import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListPetitionComponent } from './components/list-petition/list-petition.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { FormActionComponent } from './components/form-action/form-action.component';

const routes: Routes = [
  {path:'',component: ListUsersComponent},
  {path:'petition',component:ListPetitionComponent},
  {path:'form',component:FormActionComponent},
  {path: 'albumes/:id', component:ListAlbumsComponent },
  {path: '**', redirectTo: '', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
