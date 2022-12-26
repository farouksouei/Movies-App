import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorModelDTO } from '../actor.model';

@Component({
  selector: 'app-edit-actors',
  templateUrl: './edit-actors.component.html',
  styleUrls: ['./edit-actors.component.css']
})
export class EditActorsComponent {
  constructor(private activatedRoute:ActivatedRoute ) { }

  model: ActorModelDTO = {name:'Tom Holland',dateOfBirth: new Date('1996-06-01')}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    })
  }

  saveChanges(actorData:ActorModelDTO){
    console.log(actorData)
  }
}
