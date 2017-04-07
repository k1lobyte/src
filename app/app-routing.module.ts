import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './search.component';
import { LoginComponent }   from './login.component';
import { LoginGuard }       from './guard/login.guard';
import { HomeComponent }    from './home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'search', component: SearchComponent, canActivate: [LoginGuard] },
    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
