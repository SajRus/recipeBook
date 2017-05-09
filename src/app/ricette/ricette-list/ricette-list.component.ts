import { Component, OnInit } from '@angular/core';
import { Ricette } from '../ricette.model';
@Component({
  selector: 'app-ricette-list',
  templateUrl: './ricette-list.component.html',
  styleUrls: ['./ricette-list.component.css']
})
export class RicetteListComponent implements OnInit {
  ricette: Ricette[] = [
    new Ricette('Ricetta 1', 'ricetta 1 test', 'http://www.pugliainesclusiva.it/wp-content/uploads/2014/10/fichi-secchi-pugliesi-con-vincotto.jpg'),
    new Ricette('Ricetta 2', 'ricetta 2 test', 'http://www.pugliainesclusiva.it/wp-content/uploads/2014/10/fichi-secchi-pugliesi-con-vincotto.jpg')
  ]
  constructor() { }

  ngOnInit() {
  }

}
