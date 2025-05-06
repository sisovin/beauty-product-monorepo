import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();

  onSubmitNewsletter(form: any) {
    if (form.valid) {
      // Implement newsletter subscription functionality
      console.log('Newsletter form submitted', form.value);
    }
  }
}
