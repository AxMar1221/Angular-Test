import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { CounterComponent } from './basic/counter/counter.component';
import { PikachuComponent } from './basic/pikachu/pikachu.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'counter', component: CounterComponent},
  { path: 'pikachu', component: PikachuComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
