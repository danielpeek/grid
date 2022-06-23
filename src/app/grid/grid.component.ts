import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() columns: number = 1;
  @HostBinding('style.grid-template-columns')
  get _columns() {
    return `repeat(${this.columns}, 1fr)`
  }

  @Input() rows: number = 1;
  @HostBinding('style.grid-template-rows')
  get _rows() {
    return `repeat(${this.rows}, 1fr)`
  }

  @Input() gap: number = 16;
  @HostBinding('style.gap')
  get _gap() {
    return `${this.gap}px`
  }

  constructor() { }

  ngOnInit(): void {
  }

}
