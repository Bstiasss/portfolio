import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Contacto } from './pages/contacto/contacto';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'contacto', component: Contacto}
];
