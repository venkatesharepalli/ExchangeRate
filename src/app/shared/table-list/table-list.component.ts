import { Component, OnInit, Input, Output, ViewChild, EventEmitter, OnChanges } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface ExchangeRate {
  currency: string;
  exchangeValue: number;
  direction: string;
}

const customColumnsLabels = {
  'direction': 'Increase / Decrease',
  'increasedBy': '%',
  'decreasedBy': '%'
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit  {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @Input() dataSource = [];  
  @Input() columnsList = [];
  @Input() pagination:boolean;
  @Output() onGraphClickHandler = new EventEmitter<string>();
  dataSourceMT = new MatTableDataSource<ExchangeRate>([]);

  constructor() {
  }

  ngOnInit() {
    this.dataSourceMT = new MatTableDataSource<ExchangeRate>(this.dataSource);
    this.dataSourceMT.paginator = this.paginator;
  }
 
  handleCharClickHandler(value) {
    this.onGraphClickHandler.emit(value);
  }


  getColHeaderLabel = (column) => {
    if(customColumnsLabels.hasOwnProperty(column)) {
      return customColumnsLabels[column];
    }

    return column;

  }

}
