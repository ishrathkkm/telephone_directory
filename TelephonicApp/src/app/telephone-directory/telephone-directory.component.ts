import { Component, OnInit } from '@angular/core';
import { Person } from '../person.modal';
import { PersonInterface } from '../interface';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-telephone-directory',
  templateUrl: './telephone-directory.component.html',
  styleUrls: ['./telephone-directory.component.scss']
})
export class TelephoneDirectoryComponent implements OnInit {
  personList: PersonInterface[] = [];
  searchText: string;
  selectedName: string;
  selectedItem: PersonInterface;
  editActive:boolean = false;
  constructor(private service: PersonService) { }

  ngOnInit() {
    let DataList = this.service.getDummyData();
    DataList.forEach((item: PersonInterface) => {
      this.createPersons(item);
    });
    this.sortPersonData();
    this.getSelectedData();
  }
  sortPersonData() {
    this.personList.sort((a, b) => {
      var nameA = a.name.toLowerCase();
      var nameB = b.name.toLowerCase();
      if (nameA < nameB)
        return -1
      if (nameA > nameB)
        return 1
      return 0
    })
  }
  createPersons(data: PersonInterface) {
    let person = new Person();
    person.name = data.name
    person.address = data.address;
    person.age = data.age;
    person.mobile = data.mobile;
    this.personList.push(person);
  }
  selectRow(data: PersonInterface) {
    this.selectedItem = null;
    this.editActive = false;
    this.selectedItem = data;
    this.selectedName = data.name;
    localStorage.setItem('peopleData', JSON.stringify(data));
  }
  getSelectedData() {
    let selectedItem = localStorage.getItem('peopleData');
    if (selectedItem) {
      this.selectedName = JSON.parse(selectedItem)._name;
    } else {
      this.selectedName = this.personList[0].name;
    }
  }
  updateData(data) {
    this.personList.map((item) => {
      if (item.name != data.name) {
        return item
      } else {
        return data
      }
    })
  }
}
