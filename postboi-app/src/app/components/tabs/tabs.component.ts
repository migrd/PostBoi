import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

/**
 * @title Tab group with dynamically changing tabs
 */

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  selectAfterAdding = true;
  tabs = ['Request'];
  selectedTab = new FormControl(0);
  reqType = 'GET';
  reqUrl = null;

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New Request');

    if (selectAfterAdding) {
      this.selectedTab.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  makeRequest(){
    switch (this.reqType) {
      case 'GET':
        console.log('GET');
        break;
      case 'POST':
        console.log('POST');
        break;
        case 'PUT':
          console.log('PUT');
        break;
        case 'DELETE':
          console.log('DELETE');
    }
  }

  ngOnInit(): void {
  }

}
