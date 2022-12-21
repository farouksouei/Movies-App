import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {

  @Input()
  rating: number = 5;

  @Input()
  selected = 0;

  @Output()
  onRatingChange: EventEmitter<number> = new EventEmitter<number>();
  previousSelected = 0;
  maxRatingArr:any = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.maxRatingArr = Array(this.rating).fill(0);
  }

  handleMouseEnter(index: number) {
    this.selected = index + 1;
  }

  handleMouseLeave(){
    this.selected = 0;
    if (this.previousSelected !== 0) {
      this.selected = this.previousSelected;
    } else {
    this.selected = 0;
    }
  }

  rate(index: number) {
    this.selected = index + 1;
    this.previousSelected = this.selected;
    this.onRatingChange.emit(this.selected);
  }
}
