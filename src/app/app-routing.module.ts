import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ExchangeRatesListComponent } from './pages/exchange-rates-list/exchange-rates-list.component';
import { HistorialChartComponent } from './pages/historial-chart/historial-chart.component';
import { Top5ExchangeRatesComponent } from './pages/top-5-exchange-rates/top-5-exchange-rates.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/latest-rates', pathMatch: 'full' },
  { path: 'latest-rates', component: ExchangeRatesListComponent},
  { path: 'historial-rates', component: HistorialChartComponent },
  { path: 'top-5', component: Top5ExchangeRatesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ExchangeRatesListComponent, HistorialChartComponent, Top5ExchangeRatesComponent]
