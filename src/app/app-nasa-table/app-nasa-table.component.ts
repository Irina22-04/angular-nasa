import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {differenceDatesValidator} from './DatesValidator.directive';
import {getRequestDate} from '../helper';

@Component({
  selector: 'app-nasa-table',
  templateUrl: './app-nasa-table.component.html',
  styleUrls: ['./app-nasa-table.component.css']
})
export class AppNasaTableComponent implements OnInit {
  datesForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.datesForm = this.fb.group({
      startDate: [{value: ''}, Validators.required
      ],
      endDate: [{value: ''}, Validators.required
      ]
    },  {validator: differenceDatesValidator}
    );
  }

  submit(): void {
    const {startDate, endDate} = this.datesForm.value;
    const requestStartDate = getRequestDate(startDate);
    const requestEndDate = getRequestDate(endDate);
    this.router.navigate(['/asteroids'], { queryParams: { s: requestStartDate, e: requestEndDate}});
  }
}
