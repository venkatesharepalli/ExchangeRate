import {
  Component,
  OnInit,
  OnChanges
} from '@angular/core';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  ExchangeRateApiService
} from '../core/services/exchange-rate-api.service';

const INITIAL_BASE_CURRENCY = 'INR';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  baseCurrency = INITIAL_BASE_CURRENCY;
  currencyList = [];
  selectedLink:string = 'latest-rates';
  buttonGroupList: any[]

  constructor(private _exchangeService: ExchangeRateApiService, private router: Router,
      private activatedRoute: ActivatedRoute) {
      const currentUrl = this.router.url + '?';

      this.router.navigateByUrl(currentUrl)
          .then(() => {
              this.updateQueryParams();
          });
  }

  ngOnInit() {
      this.activatedRoute.queryParams.subscribe(params => {
          const {
              base
          } = params;
          this.baseCurrency = base || INITIAL_BASE_CURRENCY;

        this.buttonGroupList = [
            {
              value: 'latest-rates',
              routerLink: '/latest-rates',
              queryParams: {base: this.baseCurrency}
            },
            {
              value: 'historial-rates',
              routerLink: '/historial-rates',
              queryParams: {base: this.baseCurrency}
            },
            {
              value: 'top-5',
              routerLink: '/top-5',
              queryParams: {base: this.baseCurrency}
            }
        ]
      });

      this._exchangeService.getExchangeRates(this.baseCurrency).subscribe(data => {
          for (let [key, value] of Object.entries(data.rates)) {
              this.currencyList.push({
                  currency: key,
                  exchangeValue: value,
                  direction: value > 1 ? 'up' : value < 1 ? 'down' : 'equal'
              })
          }
      });

      this.updateQueryParams();
  }

  onBaseCurrencyClickHandler(value) {
      this.baseCurrency = value;
      this.updateQueryParams();
  }

  updateQueryParams() {
      this.router.navigate(
          [], {
              relativeTo: this.activatedRoute,
              queryParams: {
                  base: this.baseCurrency
              },
              replaceUrl: true,
              queryParamsHandling: 'merge'
          });
  }

  changeOfRoutes() {
    const currentPath = this.router.url;
    const routerLink = currentPath.split("?");
    this.selectedLink =  routerLink.length > 0 && routerLink[0].toString().substr(1) || 'latest-rates';
  }
}
