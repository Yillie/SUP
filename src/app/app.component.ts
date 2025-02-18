import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'SUP';
  prognoseAnzahl = '';
  rentalForm: FormGroup = new FormGroup([]);
  customerList: string[] = ['Max Musterman', 'Susie Muster'];
  supList: string[] = ['1er', '2er'];
  newCustomer = false;

  constructor(private fb: FormBuilder) {
    this.rentalForm = this.fb.group({
      customer: [''],
      sup: [''],
      startTime: [''],
      endTime: [''],
      street: [''],
      plz: [''],
      city: [''],
      securityInformed: [false],
      luggage: [false],
      luggageCount: [0],
    });
  }

  onSubmit() {
    console.log('Buchung:', this.rentalForm.value);
  }

  getPrognose() {
    const anzahl = Math.round(Math.random() * (10 - 0) + 0);
    this.prognoseAnzahl = anzahl + ' SUP können heute vermietet werden.';
    if (anzahl === 0) {
      this.rentalForm.disable();
    } else {
      this.rentalForm.enable();
    }
  }

  setSUPType(event: any) {
    if (event === true) {
      this.rentalForm.get('customer')?.setValue('');
      this.rentalForm.get('sup')?.setValue('1er');
      this.rentalForm.get('sup')?.disable();
    } else {
      this.rentalForm.get('sup')?.enable();
    }
  }
}
