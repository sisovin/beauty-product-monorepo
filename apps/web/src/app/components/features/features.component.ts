import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {
  features = [
    { icon: 'icon1.png', title: 'Feature 1', description: 'Description of feature 1' },
    { icon: 'icon2.png', title: 'Feature 2', description: 'Description of feature 2' },
    { icon: 'icon3.png', title: 'Feature 3', description: 'Description of feature 3' },
    { icon: 'icon4.png', title: 'Feature 4', description: 'Description of feature 4' }
  ];
}
