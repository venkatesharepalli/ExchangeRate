import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input() dropDownList:any[];  
  @Input() propertyValue:string;
  @Input() defaultValue:string;
  @Output() onSelectionChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    console.log(this.propertyValue)
  }

  onSelectionChangeHandler(value) {
    this.onSelectionChange.emit(value);
  }

}
