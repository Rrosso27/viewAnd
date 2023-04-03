import { Component } from '@angular/core';
import { first } from 'rxjs';
import { Petition } from 'src/app/interfaces/petition';
import { PETITION } from 'src/app/interfaces/mock-petition';
import { PetitionService } from 'src/app/services/petition.service';
import { Albums } from 'src/app/interfaces/albums';

@Component({
  selector: 'app-list-petition',
  templateUrl: './list-petition.component.html',
  styleUrls: ['./list-petition.component.css']
})
export class ListPetitionComponent {
  petitions: Petition[] = [];
  petitionsbysid: Petition[] = [];


  id = [];
  // loading: boolean = false;
  constructor(private petitionService: PetitionService) { }

  ngOnInit(): void {
    this.getPetition()
  }

  getPetition() {

    this.petitionService.getPetition().subscribe((data: any) => {
      this.petitions = data.listAction;
    }, error => {
      console.error(error);
    })
  }

  deletePetition (id: number = 0) {
   this.petitionService.deletePetition(id).subscribe(data => {
    console.log(data)
   })
  }

}

