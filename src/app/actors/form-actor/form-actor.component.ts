import { ActorModelDTO } from './../actor.model';
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
  model!: ActorModelDTO;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators: [Validators.required],
      }],
      dateOfBirth: ['', {
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
}
