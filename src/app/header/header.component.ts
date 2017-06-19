import { Component, OnInit, EventEmitter } from '@angular/core';
import { DataStorageService } from "app/shared/data-storage.service";
import { Response } from '@angular/http'; 
import { AuthService } from "app/auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorage: DataStorageService, 
  private authService: AuthService) { }
  ngOnInit() {
  }
  
  onSalvaRicette(){
    this.dataStorage.storeData().subscribe(
      (response: Response) => console.log(response)
    )
  }

  onAggiornaRicette(){
    this.dataStorage.getRicette();
  }

  onLogout(){
    this.authService.logout();
  }
}
