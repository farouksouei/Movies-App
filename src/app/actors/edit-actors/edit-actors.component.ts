import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorModelDTO, actorDTO } from '../actor.model';

@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.css']
})
export class EditActorsComponent {
  constructor(private activatedRoute:ActivatedRoute ) { }

  model: actorDTO = {name:'Tom Holland',dateOfBirth: new Date('1996-06-01'),picture:'https://upload.wikimedia.org/wikipedia/commons/4/4e/Tom_Holland_by_Gage_Skidmore_2.jpg'}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    })
  }

  saveChanges(actorData:ActorModelDTO){
    console.log(actorData)
  }
}
