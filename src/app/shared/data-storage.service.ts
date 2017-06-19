import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RicetteService } from "app/ricette/ricette.service";
import { Ricette } from "app/ricette/ricette.model";
import 'rxjs/Rx';
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService {
    constructor(private http: Http,
        private ricetteService: RicetteService,
        private authService: AuthService
    ) { }


    storeData() {
        const token = this.authService.getToken();
        const ricette: Ricette[] = this.ricetteService.getRicette();
        return this.http.put(
            'https://libro-delle-ricette.firebaseio.com/ricette.json?auth=' + token,
            ricette
        )
    }

    getRicette() {
        const token = this.authService.getToken();

        this.http.get('https://libro-delle-ricette.firebaseio.com/ricette.json?auth=' + token)
            .map(
            (response: Response) => {
                const ricette: Ricette[] = response.json();
                for (let ricetta of ricette) {
                    if (!ricetta['ingredienti']) {
                        ricetta['ingredienti'] = [];
                    }
                }
                return ricette;
            }

            )
            .subscribe(
            (ricette: Ricette[]) => {
                this.ricetteService.setRicette(ricette);
            }
            )
    }
}