import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/Rx';

const EXCHANGE_RATES_LATEST_API_URL = 'https://api.exchangeratesapi.io/latest';
const EXCHANGE_RATES_HISTORIAL_API_URL= 'https://api.exchangeratesapi.io/history';


@Injectable()
export class ExchangeRateApiService {

  constructor(private _http: HttpClient) { }

  public getExchangeRates(baseCurrency:string): Observable<any> {
    return this._http.get(`${EXCHANGE_RATES_LATEST_API_URL}?base=${baseCurrency}`);
  }

  public getHistoricalDataBasedOnCurrency(startDate:string, endDate:string, baseCurrency:string): Observable<any> {
    return this._http.get(`${EXCHANGE_RATES_HISTORIAL_API_URL}?start_at=${startDate}&end_at=${endDate}&symbols=${baseCurrency}`);
  }

  public getHistoricalData(startDate:string, endDate:string, baseCurrency:string): Observable<any> {
    return this._http.get(`${EXCHANGE_RATES_HISTORIAL_API_URL}?start_at=${startDate}&end_at=${endDate}&base=${baseCurrency}`);
  }
}
