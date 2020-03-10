import {NgModule} from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import {CustomMaterialModule} from "../core/material.module";
import {
  TableListComponent
} from './table-list/table-list.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { ToggleButtonGroupComponent } from './toggle-button-group/toggle-button-group.component';


@NgModule({
  declarations: [
    TableListComponent,
    BarChartComponent,
    ErrorMessageComponent,
    DropDownComponent,
    ToggleButtonGroupComponent
  ],
  imports: [
    CommonModule,
    CustomMaterialModule,
    ChartsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    CustomMaterialModule,
    TableListComponent,
    BarChartComponent,
    ErrorMessageComponent,
    DropDownComponent,
    ToggleButtonGroupComponent
  ],
})
export class SharedModule { }
