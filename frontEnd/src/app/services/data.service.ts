import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Fan } from '../models/fan.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private url = 'http://127.0.0.1:8000/api';

  //metodos para entidad fan
  getFans() {
    return this.http.get(`${ this.url }/fans`);
  }

  getFan( id: number ) {
    return this.http.get( `${ this.url }/fans/${ id }` );
  }

  postFan( fan: Fan) {
    return this.http.post( `${ this.url }/fans`, fan);
  }

  putFan( fan: any) {
    return this.http.put( `${ this.url }/fans/${ fan.id }`, fan );
  }

  deleteFan( id: number) {
    return this.http.delete(`${ this.url }/fans/${ id }`);
  }


  //metodos para entidad team
  getTeams() {
    return this.http.get(`${ this.url }/teams`);
  }

  getTeam( id: number ) {
    return this.http.get( `${ this.url }/teams/${ id }` );
  }

  postTeam( team: any) {
    return this.http.post( `${ this.url }/teams`, team);
  }

  putTeam( team: any) {
    return this.http.put( `${ this.url }/teams/${ team.id }`, team );
  }

  deleteTeam( id: number) {
    return this.http.delete(`${ this.url }/teams/${ id }`);
  }

  //querys
  getTeamFan( id: number ) {
    return this.http.get(`${ this.url }/fans/teamFan/${ id }`);
  }

  updateTeamFan( teamFan: any, id: number) {
    return this.http.put(`${ this.url }/fans/updateTeam/${ id }`, teamFan);
  }
}
