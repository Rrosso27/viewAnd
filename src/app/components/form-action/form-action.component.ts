import { Component } from '@angular/core';
import { Petition } from 'src/app/interfaces/petition';
import { PetitionService } from 'src/app/services/petition.service';

@Component({
  selector: 'app-form-action',
  templateUrl: './form-action.component.html',
  styleUrls: ['./form-action.component.css']
})
export class FormActionComponent {
  petitions: Petition[] = [];


  constructor(private petitionService: PetitionService) { }




}
