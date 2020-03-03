import { Component, OnInit, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  private barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  private barChartColors: Color[] = [
    { backgroundColor: '#4285F4' },
  ]
  @Input() private barChartLabels: Label[] = [];
  private barChartType: ChartType = 'bar';
  private barChartLegend = false;
  private barChartPlugins = [pluginDataLabels];

  @Input()  private barChartData: ChartDataSets[] = [
    { data: []},
  ];

  constructor() { }

  ngOnInit() {
  }

}
