import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers: [NgbCarouselConfig]
})
export class DisplayComponent implements OnInit{

  pic_1: string = "assets/image/invention_1.png";
  pic_2: string = "assets/image/invention_2.png";
  pic_3: string = "assets/image/merry.jpg";
  pic_4: string = "assets/image/flying_merry.png";

  images = [this.pic_1, this.pic_2, this.pic_3, this.pic_4]


  constructor(config: NgbCarouselConfig) {
    // customize default values of carousel used by this component
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
   }

   ngOnInit(): void {
       
   }
   


}
