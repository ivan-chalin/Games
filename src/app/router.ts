import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; 
import {GameGuard} from './services/game-guard.guard' 

import { homeComponent } from 'app/components/home/home.component';
import { userformComponent } from 'app/components/userForm/userform.component' 
import { gameComponent } from 'app/components/game/game.component';


const routes:Routes = [
  {path:'home', component: homeComponent},
  {path:'userform', component: userformComponent},
  {path:'game',canActivate:[GameGuard], component: gameComponent} 
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class routingModule{}