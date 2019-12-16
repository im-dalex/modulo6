import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Fan } from 'src/app/models/fan.model';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-add-fan',
  templateUrl: './add-fan.component.html',
  styleUrls: ['./add-fan.component.css']
})
export class AddFanComponent implements OnInit {

  fan = new Fan();
  constructor( private dataService: DataService ) { }

  ngOnInit() {
  }

  save( form: NgForm) {
    if (form.invalid) {
      console.log('error');
      return;
    }
    this.fan = form.value;
    this.dataService.postFan(this.fan)
      .subscribe(data => {
        console.log(data);
      });
    console.log(form.value);
  }

}
