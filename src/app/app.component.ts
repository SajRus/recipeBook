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
      apiKey: "AIzaSyCkHJaZI0O4l5beyDZ4CcX0MY9U-YjaTfM",
      authDomain: "libro-delle-ricette.firebaseapp.com"
    }

    firebase.initializeApp(config);
  }
}
