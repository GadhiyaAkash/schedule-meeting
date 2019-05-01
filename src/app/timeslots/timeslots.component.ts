import { Component, OnInit } from '@angular/core';
import {HelperService} from '../service/helper.service';

@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.css']
})
export class TimeslotsComponent implements OnInit {

      timeslots:any = [];

  constructor(public helperService: HelperService) { }

  ngOnInit() {
      this.getProducts();
  }

  getProducts() {
      this.timeslots = [];
      
      this.helperService.getTimeSlot().subscribe((data: {}) => {
            this.timeslots = data;
      });
    }
}
