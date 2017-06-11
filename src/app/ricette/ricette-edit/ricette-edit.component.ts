import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { RicetteService } from "app/ricette/ricette.service";
import { Ricette } from "app/ricette/ricette.model";

@Component({
  selector: 'app-ricette-edit',
  templateUrl: './ricette-edit.component.html',
  styleUrls: ['./ricette-edit.component.css']
})
export class RicetteEditComponent implements OnInit {
  id: number;
  editMode = false;

  ricettaForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private ricettaService: RicetteService,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  onDelete(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onDeleteIngrediente(index: number){
    (<FormArray>this.ricettaForm.get('ingredienti')).removeAt(index);
  }

  onAddIngrediente() {
    (<FormArray>this.ricettaForm.get('ingredienti')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, 
        [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }

  initForm() {
    let ricettaName = '';
    let ricettaImgPath = '';
    let ricettaDesc = '';
    let ricettaIngredienti = new FormArray([]);

    if (this.editMode) {
      const ricetta = this.ricettaService.getRicetta(this.id);

      ricettaName = ricetta.name;
      ricettaImgPath = ricetta.imgPath;
      ricettaDesc = ricetta.desc;

      if (ricetta['ingredienti']) {
        for (let ingrediente of ricetta.ingredienti) {
          ricettaIngredienti.push(
            new FormGroup({
              'name': new FormControl(
                ingrediente.name,
                Validators.required
              ),
              'amount': new FormControl(
                ingrediente.amount,
                [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)]
              )
            })
          )
        }
      }
    }

    this.ricettaForm = new FormGroup({
      'name': new FormControl(ricettaName, Validators.required),
      'imgPath': new FormControl(ricettaImgPath, Validators.required),
      'desc': new FormControl(ricettaDesc, Validators.required),
      'ingredienti': ricettaIngredienti
    })
  }

  onSubmit() {
    // const newRicetta = new Ricette(
    //   this.ricettaForm.value['name'], 
    //   this.ricettaForm.value['desc'], 
    //   this.ricettaForm.value['imgPath'], 
    //   this.ricettaForm.value['ingredienti'] 
    // );

    if(this.editMode){
      this.ricettaService.updateRicetta(this.id, this.ricettaForm.value);
    }else{
      this.ricettaService.addRicetta(this.ricettaForm.value);
    }

    console.log(this.ricettaForm);
  }
}
