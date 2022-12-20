import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent {
  @Input()
  list:any;

  Remove(index:number) {
    this.list.splice(index, 1);
  }

}
