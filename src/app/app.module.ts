import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
import { PaymentMethodFormComponent } from './forms/payment-method-form/payment-method-component'

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
   ],
  declarations: [ 
    AppComponent,
    PaymentMethodFormComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
