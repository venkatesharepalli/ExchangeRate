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
import {
  getHistorialDates,
  getPercentageChange,
  getDiff,
  getTop5List
} from '../../core/helpers';


@Component({
  selector: 'app-top5-exchange-rates',
  templateUrl: './top-5-exchange-rates.component.html',
  styleUrls: ['./top-5-exchange-rates.component.scss']
})
export class Top5ExchangeRatesComponent implements OnInit {
  isLoading: boolean;
  baseCurrency: string = '';
  toggleValue: string = 'Increase';
  exchangeList = [];
  displayedColumns: string[] = ['currency', 'difference', 'increasedBy'];
  currencyList = [];
  constructor(private _exchangeService: ExchangeRateApiService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
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
      const {
          startDate,
          endDate
      } = getHistorialDates(3);

      this._exchangeService.getHistoricalData(startDate, endDate, baseCurrency).subscribe(data => {

          this.exchangeList = [];
          this.currencyList = [];

          Object.values(data.rates).reduce((prevValue, nextValue) => {
              this.currencyList = [];

              for (let [key, value] of Object.entries(prevValue)) {
                  this.currencyList.push({
                      currency: key,
                      today: prevValue[key],
                      yesterday: nextValue[key],
                      difference: getDiff(prevValue[key], nextValue[key]),
                      decreasedBy: `${getPercentageChange(prevValue[key], nextValue[key])}%`,
                      increasedBy: `${getPercentageChange(nextValue[key], prevValue[key])}%`,
                  });
              }
              return prevValue;
          }, Object.values(data.rates)[0]);

          this.currencyList.sort((a, b) => a.increasedBy.toString().localeCompare(b.increasedBy.toString()));
          this.renderDataToTable();
      });
  }

  renderDataToTable() {
      this.displayedColumns = this.toggleValue === 'Increase' ? ['currency', 'difference', 'increasedBy'] : ['currency', 'difference', 'decreasedBy']
      this.exchangeList = getTop5List(this.currencyList, this.toggleValue);
      this.isLoading = false;
  }

  toggleChange(event) {
      let toggle = event.source;
      this.toggleValue = toggle.value;
      this.renderDataToTable();
  }
}
