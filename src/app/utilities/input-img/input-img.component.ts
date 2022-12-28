import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { toBase64 } from '../utils';

@Component({
  selector: 'app-input-img',
  templateUrl: './input-img.component.html',
  styleUrls: ['./input-img.component.css']
})
export class InputImgComponent {
  constructor() { }

  imageBase64:string = '';

  @Output()
  imageBase64Change = new EventEmitter<string>();

  @Input()
  urlCurrentImage!: string | undefined;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  change(event:any) {
    if (event.target.files && event.target.files[0]) {
      const file:File = event.target.files[0];
      toBase64(file).then((value) => {
        console.log(value);
        this.imageBase64 = value;
        this.imageBase64Change.emit(this.imageBase64);
        this.urlCurrentImage = undefined;
      }
      );
    }
  }
}
