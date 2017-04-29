import { Component } from '@angular/core';
import { FormsModule } from '@angular/core';

import { PaymentMethod }    from '../../shared/models/paymentmethod';

@Component({
  selector: 'payment-method-form',
  templateUrl: './payment.method.form.html'
})
export class PaymentMethodFormComponent {


  model = new PaymentMethod(18, 'Dr', 'Doom', 'lumihlue', 'Chuck Overstreet', 'a');

  submitted = false;

  onSubmit() {
     this.submitted = true;

 }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}