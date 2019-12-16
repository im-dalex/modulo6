import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Fan } from '../../models/fan.model';

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
  fan: Fan;
  activado: boolean;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getTeams();
    this.getTeamFans();
    this.activado = false;
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

  changeTeam(teamId: number) {
    this.fan.TeamId = teamId;
    this._dataService.updateTeamFan(this.fan)
      .subscribe(data => {
        console.log(data);
        this.getTeamFans();
        this.activado = false;
      });
  }

  asignarFan( teamFan: Fan) {
    console.log(teamFan);
    this.fan = teamFan;
    this.activado = true;
  }
}
