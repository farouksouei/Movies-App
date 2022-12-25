import { AbstractControl } from "@angular/forms";

export function firstLetterUppercase() {
  return (control: AbstractControl) => {
    const value = <string>control.value;
    if (!value) return;
    if (value.length === 0) return;
    const firstLetter = value[0];
    if (firstLetter !== firstLetter.toUpperCase()) {
      return {
        firstLetterUppercase: {
          message: 'The first letter must be uppercase'
        }
      }
    }
    return;
  }
}
