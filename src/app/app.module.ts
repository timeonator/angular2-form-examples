import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { PaymentMethodFormComponent } from './forms/payment-method-form/payment-method-component'
import { ProfileFormComponent } from './forms/profile-form/profile.component';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: ProfileFormComponent, pathMatch: 'full' },   
  { path: 'profile', component: ProfileFormComponent },
  { path: 'account', component: PaymentMethodFormComponent }
];

export const routing = RouterModule.forRoot(routes);

@NgModule({
  imports: [
    routing, 
    BrowserModule,
    FormsModule
   ],
  declarations: [ 
    AppComponent,
    PaymentMethodFormComponent,
    ProfileFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
