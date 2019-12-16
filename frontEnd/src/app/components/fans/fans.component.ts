import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-fans',
  templateUrl: './fans.component.html',
  styleUrls: ['./fans.component.css']
})
export class FansComponent implements OnInit {

  fans: any[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getFans();
  }

  getFans() {
    this._dataService.getFans()
      .subscribe( data => {
        console.log(data);
        this.fans = data as any[];
      });
  }

  editFan( fan: any ) {

  }

  deleteFan( id: number) {
    this._dataService.deleteFan(id)
      .subscribe( data => this.getFans());
  }
}
