import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  featureSelected = 'ricette';

  onRouteChange(route: string) {
    this.featureSelected = route;
  }

  ngOnInit() {
    const config = {
      apiKey: "",
      authDomain: ""
    }

    firebase.initializeApp(config);
  }
}
