import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() selezione = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  
  onSelected(value){
    this.selezione.emit(value);
  }
}
