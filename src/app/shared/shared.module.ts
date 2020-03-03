import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import {CustomMaterialModule} from "../core/material.module";
import {
  TableListComponent
} from './table-list/table-list.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ErrorMessageComponent } from './error-message/error-message.component';


@NgModule({
  declarations: [
    TableListComponent,
    BarChartComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ChartsModule
  ],
  exports: [
    CommonModule,
    CustomMaterialModule,
    TableListComponent,
    BarChartComponent,
    ErrorMessageComponent
  ],
})
export class SharedModule { }
