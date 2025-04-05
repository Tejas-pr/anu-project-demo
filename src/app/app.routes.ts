import { Routes } from '@angular/router';
import { MyfirstComponent } from './components/myfirst/myfirst.component';
import { MysecondComponent } from './components/mysecond/mysecond.component';

export const routes: Routes = [
    {path: "", component: MyfirstComponent},
    {path: "second", component: MysecondComponent},
];
