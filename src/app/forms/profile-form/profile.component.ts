import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Profile }    from '../../shared/models/profile';

@Component({
  selector: 'profile-form',
  templateUrl: './profile.form.html'
})
export class ProfileFormComponent {


  model = new Profile(0, 0,'','');

  submitted = false;

  onSubmit() {
     this.submitted = true;

 }
 newProfile() {
  this.model = new Profile(0, 0, '','');
  this.submitted = false;
}

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }
}