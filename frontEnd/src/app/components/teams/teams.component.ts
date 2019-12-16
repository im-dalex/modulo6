import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any[];
  TeamFans1: any[];
  TeamFans2: any[];
  TeamFans3: any[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getTeams();
    this.getTeamFans();
  }

  getTeams() {
    this._dataService.getTeams()
      .subscribe(data => {
        this.teams = data as any[];
      });
  }

  getTeamFans() {
    this._dataService.getTeamFan(1).
      subscribe(data => {
        this.TeamFans1 = data as any[];
      });
    this._dataService.getTeamFan(2).
      subscribe(data => {
        this.TeamFans2 = data as any[];
      });
    this._dataService.getTeamFan(3).
      subscribe(data => {
        this.TeamFans3 = data as any[];
      });
  }
}
