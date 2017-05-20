import { Component } from '@angular/core';
import { RicetteService } from "app/ricette/recette.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RicetteService]
})
export class AppComponent {
}
