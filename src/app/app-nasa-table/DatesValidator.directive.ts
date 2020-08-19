import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export const differenceDatesValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {

  const startDate = control.get('startDate').value;
  const endDate = control.get('endDate').value;

  if (startDate && endDate) {
    if (new Date(endDate).getTime() - new Date(startDate).getTime() > 604800000) {
      return {differenceDates: true};
    } else if (new Date(endDate).getTime() < new Date(startDate).getTime()) {
      return {increaseDates: true};
    } else if (new Date(endDate).getTime() > new Date().getTime()) {
      return {checkEndDates: true};
    } else {
      return null;
    }
  }
};



