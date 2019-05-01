import { Component, OnInit } from '@angular/core';
import {HelperService} from '../service/helper.service';
import { ActivatedRoute, Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})
export class TimeComponent implements OnInit {

      time:any = {};
      data: any = {};

      constructor(
            public helperService: HelperService,
            private route: ActivatedRoute,
            private _location: Location,
            private router: Router
            ) { }

      ngOnInit() {
            this.getTimes();
      }

      getTimes() {
            this.time = {};
            this.helperService.getTime(this.route.snapshot.params['id']).subscribe((data: {}) => {
                  this.time = data;
            });
      }

      back() {
            this._location.back();
      }

      onSubmit() {
            this.time.updated_at = new Date().getTime();
            this.helperService.updateTime(this.route.snapshot.params['id'], this.time).subscribe((result) => {
                  this.router.navigate(['/timeslots']);
                }, (err) => {
                  console.log(err);
                })
          }
}
