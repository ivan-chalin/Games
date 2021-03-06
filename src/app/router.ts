import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router'; 
import {GameGuard} from './services/game-guard.guard' 

import { homeComponent } from 'app/components/home/home.component';
import { userformComponent } from 'app/components/userForm/userform.component' 
import { gameComponent } from 'app/components/game/game.component';
import { gameResultComponent } from 'app/components/gameResult/gameResult.component'

const routes:Routes = [
  {path:'',pathMatch:'full', redirectTo: '/home'},
  {path:'home', component: homeComponent},
  {path:'userform', component: userformComponent},
  {path:'game',canActivate:[GameGuard], component: gameComponent},
  {path:'gameresult', component: gameResultComponent} 
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class routingModule{}