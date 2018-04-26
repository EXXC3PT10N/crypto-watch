import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Currency } from '../interfaces/currency';

@Injectable()
export class MarketcapService {
  envPath: string = environment.path;

  constructor(private _http: HttpClient) { }

  getCurrencies(limit: number,start: number): Observable<Currency[]>{
    let url: string = this.envPath + "/ticker/?limit="+limit+"&start="+start;

    return this._http.get<Currency[]>(url);
  }

}
