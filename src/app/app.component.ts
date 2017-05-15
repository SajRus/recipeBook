import { Component } from '@angular/core';
import { ListaSpesaService } from './lista-spesa/lista-spesa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ListaSpesaService]
})
export class AppComponent {
  featureSelected = 'ricette';

  onRouteChange(route: string){
    this.featureSelected = route;
  }
}
