import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Petition } from 'src/app/interfaces/petition';

@Component({
  selector: 'app-form-petition',
  templateUrl: './form-petition.component.html',
  styleUrls: ['./form-petition.component.css']
})
export class FormPetitionComponent {
  form: FormGroup;


  constructor(private fb: FormBuilder,) {
    this.form = this.fb.group({
      date: ['', Validators.required],
      method: ['', Validators.required],
      consulted: ['', Validators.required],
      returnedData: ['', Validators.required],
    })

  }

  addPetition() {
    console.log(this.form.value)
    const petition: Petition = {
      date: this.form.value.date,
      method: this.form.value.method,
      consulted: this.form.value.consulted,
      returnedData: this.form.value.returnedData
    }
  }

}
