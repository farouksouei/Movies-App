import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { GenreCreationDTO } from '../genre.model';


@Component({
  selector: 'app-form-genre',
  templateUrl: './form-genre.component.html',
  styleUrls: ['./form-genre.component.css']
})
export class FormGenreComponent {

  constructor(private formBuilder: FormBuilder) { }
  form!: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<GenreCreationDTO> = new EventEmitter<GenreCreationDTO>();

  @Input()
  model!: GenreCreationDTO;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['',{
        validators: [Validators.required, Validators.minLength(3), firstLetterUppercase()]
      }]
    });

    if(this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  saveGenre() {
    this.onSaveChanges.emit(this.form.value);
  }

  getErrorMessageFieldName() {
    const field = this.form.get('name');
    if(field?.hasError('required')) {
      return 'The name field is required';
    }

    if(field?.hasError('minlength')) {
      return 'The minimum length is 6 characters';
    }

    if(field?.hasError('firstLetterUppercase')) {
      return field.getError('firstLetterUppercase').message;
    }

    return '';
  }
}
