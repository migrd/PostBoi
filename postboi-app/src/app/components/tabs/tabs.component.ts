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
  tabs = [{
    index: 0,
    reqType: 'GET'
  }];
  selectedTab = new FormControl(0);
  reqType = 'GET';
  reqUrl = new FormControl('');

  addTab(selectAfterAdding: boolean, index: number) {
    this.tabs.push({index: this.tabs.indexOf(this.tabs[index]), reqType: this.reqType} );
    console.log(this.tabs)

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
