import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-button-group',
  templateUrl: './toggle-button-group.component.html',
  styleUrls: ['./toggle-button-group.component.scss']
})
export class ToggleButtonGroupComponent {
  
  @Input() dataList:any[];  
  @Input() propertyValue:string;
  @Input() defaultValue:string;
  @Input() routing:boolean;
  @Output() onToggleValueChange = new EventEmitter<object>();

  constructor() { }

  toggleChange(value) {
    this.onToggleValueChange.emit(value);
  }

}
