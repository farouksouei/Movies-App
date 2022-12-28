import { actorDTO, ActorModelDTO } from './../actor.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css']
})
export class FormActorComponent {

  constructor(private formBuilder:FormBuilder) { }

  form!: FormGroup;

  @Output()
  onSaveChanges = new EventEmitter<ActorModelDTO>();

  @Input()
  model!: actorDTO;

  @Input()
  urlCurrentImage!: string;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required],
      }],
      dateOfBirth: ['', {
        validators: [],
      }],
      picture: ['', {
        validators: [],
      }],
    });

    if(this.model !== undefined){
      this.form.patchValue(this.model)
    }
  }

  save() {
    console.log('save');
    this.onSaveChanges.emit(this.form.value)
  }

  cancel(){
    console.log('cancel');
  }

  imageBase64Change(image:any){
    console.log(event);
    this.form.get('picture')?.setValue(image);
  }
}
