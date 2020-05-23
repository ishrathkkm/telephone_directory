import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { PersonInterface } from '../interface';
@Component({
  selector: 'app-telephone-item',
  templateUrl: './telephone-item.component.html',
  styleUrls: ['./telephone-item.component.scss']
})
export class TelephoneItemComponent implements OnInit {
  @Input('selectedItem') selectedItem: PersonInterface;
  @Output() emitData = new EventEmitter<PersonInterface>();
  @Input('editActive') editActive: boolean = false;
  mobile: number;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedItem) {
      this.mobile = changes.selectedItem.currentValue.mobile;
      this.editActive = false;
    }
  }
  ngOnInit() {
    this.mobile = this.selectedItem.mobile
  }
  editNumber() {
    this.editActive = true;
  }
  save() {
    let data = this.selectedItem;
    data.mobile = this.mobile
    this.editActive = false;
    this.emitData.emit(data);
  }

}
