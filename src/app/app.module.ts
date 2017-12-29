import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {GameGuard} from './services/game-guard.guard' 

import { AppComponent } from './app.component';
import { DataService } from 'app/services/data.service'; 
import { userformComponent } from 'app/components/userForm/userform.component';
import { homeComponent } from 'app/components/home/home.component';
import { routingModule } from 'app/router';
import { footerComponent } from 'app/components/footer/footer.component';
import { questionComponent } from 'app/components/question/question.component';
import { imgsize } from 'app/directive/imgsize.directive';
import { gameComponent } from 'app/components/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    userformComponent,
    homeComponent,
    footerComponent,
    questionComponent,
    imgsize,
    gameComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routingModule
  ],
  providers: [DataService, GameGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
