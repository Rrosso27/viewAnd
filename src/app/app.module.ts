import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos
import  {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

//componetes
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListPetitionComponent } from './components/list-petition/list-petition.component';
import { ListAlbumsComponent } from './components/list-albums/list-albums.component';
import { FormActionComponent } from './components/form-action/form-action.component';
import { FormPetitionComponent } from './components/form-petition/form-petition.component';
import { ProgresBarComponent } from './shared/progres-bar/progres-bar.component';
// import { AddEditUserComponent } from './components/add-edit-user/add-edit-user.component';
// import { ListPostsComponent } from './components/list-posts/list-posts.component';
// import { AddEditPostComponent } from './components/add-edit-post/add-edit-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListUsersComponent,
    ListPetitionComponent,
    ListAlbumsComponent,
    FormActionComponent,
    FormPetitionComponent,
    ProgresBarComponent,
    // AddEditUserComponent,
    // ListPostsComponent,
    // AddEditPostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
