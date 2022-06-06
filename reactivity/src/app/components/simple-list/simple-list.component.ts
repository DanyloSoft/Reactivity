import {Component, Input, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-simple-list',
  templateUrl: './simple-list.component.html',
  styleUrls: ['./simple-list.component.scss']
})
export class SimpleListComponent implements OnInit {

  public list = [{txt: 'Item 1'}, {txt: 'Item 2'}, {txt: 'Item 3'}];
  @Input() SimpleValuePassed = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.updateList(changes);
  }

  private updateList(currentValue: any) {

  }
}
