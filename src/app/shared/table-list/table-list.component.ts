import { Component, OnInit, Input, Output, ViewChild, EventEmitter } from '@angular/core';
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
export class TableListComponent implements OnInit {
  @Input() dataSource = new MatTableDataSource<ExchangeRate>([]);
  @Input() columnsList = [];
  @Input() pagination:boolean = false;
  @Output() onGraphClickHandler = new EventEmitter<string>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() {
   }

  ngOnInit() {
    setTimeout(() => this.dataSource.paginator = this.paginator);
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
