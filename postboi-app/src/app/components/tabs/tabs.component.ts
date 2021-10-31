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
  selected = new FormControl(0);

  addTab(selectAfterAdding: boolean) {
    this.tabs.push('New Request');

    if (selectAfterAdding) {
      this.selected.setValue(this.tabs.length - 1);
    }
  }

  removeTab(index: number) {
    this.tabs.splice(index, 1);
  }

  ngOnInit(): void {
  }

}
