import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { PaymentMethod }    from '../../shared/models/paymentmethod';

@Component({
  selector: 'payment-method-form',
  templateUrl: './payment.method.form.html'
})
export class PaymentMethodFormComponent {


  model = new PaymentMethod(0, '', '', '', '', '');

  submitted = false;

  onSubmit() {
     this.submitted = true;

 }
 newPaymentMethod() {
  this.model = new PaymentMethod(0, '', '','','','');
  this.submitted = false;
}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}