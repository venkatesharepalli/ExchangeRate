import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  ExchangeRateApiService
} from '../../core/services/exchange-rate-api.service';

@Component({
  selector: 'app-exchange-rates',
  templateUrl: './exchange-rates-list.component.html',
  styleUrls: ['./exchange-rates-list.component.scss']
})
export class ExchangeRatesListComponent implements OnInit {

  isLoading: boolean;
  baseCurrency: string = '';
  exchangeList = [];
  displayedColumns: string[] = ['currency', 'spot', 'direction', 'chart'];


  constructor(private _exchangeService: ExchangeRateApiService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
      this.isLoading = true;

      this.activatedRoute.queryParams.subscribe(params => {
          const {
              base
          } = params;
          this.baseCurrency = base;
          this.getExchangesRatesList(base);
      });
  }
  getExchangesRatesList(baseCurrency: string) {
      this.exchangeList = [];
      this.isLoading = true;

      this._exchangeService.getExchangeRates(baseCurrency).subscribe(data => {

          this.exchangeList = [];
          const test = [];
          for (let [key, value] of Object.entries(data.rates)) {
              test.push({
                  currency: key,
                  spot: value.toString(),
                  direction: value > 1 ? 'up' : value < 1 ? 'down' : 'equal'
              })
          }
          this.exchangeList = test;
          this.isLoading = false;
      });
  }

  onGraphClickHandler(selectedCurrency) {
      this.router.navigate(['/historial-rates'], {
          queryParams: {
              base: selectedCurrency
          }
      });
  }
}
