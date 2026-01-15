import { Routes } from '@angular/router';
import path from 'path';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPageComponent } from './pages/hero/hero-page.component';
import { DragonBallComponent } from './pages/dragonball/dragonball-page.component';
import { DragonBallSuperComponent } from './pages/dragonball-super/dragonball-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponent,
  },
  {
    path: 'dragonball-super',
    component: DragonBallSuperComponent,
  },
  {
    path: 'dragonball',
    component: DragonBallComponent,
  },
];
