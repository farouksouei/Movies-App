import { ActorModelDTO } from './../actor.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-actors',
  templateUrl: './create-actors.component.html',
  styleUrls: ['./create-actors.component.css']
})
export class CreateActorsComponent {
  constructor(private router:Router) { }
  saveGenre() {
    console.log('Actor saved');
    this.router.navigate(['/actor']);
  }

  saveChanges(actorData:ActorModelDTO){
    console.log(actorData)
  }
}
