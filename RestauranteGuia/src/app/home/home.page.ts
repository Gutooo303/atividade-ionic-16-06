import { Component } from '@angular/core';
import {
  restaurant,
  star,
  location,
  informationCircle,
  home,
  heartOutline,
  personOutline
} from 'ionicons/icons';

import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})

export class HomePage {

  constructor() {
    addIcons({
      restaurant,
      star,
      location,
      informationCircle,
      home,
      heartOutline,
      personOutline
    });
  }

}
