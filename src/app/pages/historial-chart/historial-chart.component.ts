import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  Label
} from 'ng2-charts';
import {
  ChartDataSets
} from 'chart.js';
import {
  ExchangeRateApiService
} from '../../core/services/exchange-rate-api.service';
import {
  getHistorialDates
} from '../../core/helpers';


@Component({
  selector: 'app-historial-chart',
  templateUrl: './historial-chart.component.html',
  styleUrls: ['./historial-chart.component.scss']
})
export class HistorialChartComponent implements OnInit {
  isLoading: boolean;
  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [{
      data: []
  }];

  constructor(private _exchangeService: ExchangeRateApiService, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {
          const {
              base
          } = params;
          this.getHistorialData(base);
      });

  }

  getHistorialData(baseCurrency) {
      this.isLoading = true;
      const {
          startDate,
          endDate
      } = getHistorialDates(30);

      const prepareChartData = [];

      this._exchangeService.getHistoricalDataBasedOnCurrency(startDate, endDate, baseCurrency).subscribe(response => {

          this.barChartLabels = [];
          this.barChartData = [];
          const barValues = [];
          for (let [key, value] of Object.entries(response.rates)) {
              this.barChartLabels.push(key);
              barValues.push(value[baseCurrency]);
          }

          this.barChartData.push({
              data: barValues
          })

          this.isLoading = false;

      });
  }
}
