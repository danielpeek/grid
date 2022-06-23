import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-child',
  templateUrl: './grid-child.component.html',
  styleUrls: ['./grid-child.component.scss']
})
export class GridChildComponent {
  @Input() columnStart?: number;
  @Input() columnEnd?: number;
  @HostBinding('style.grid-column')
  get columnSpan() {
    if (!!this.columnStart && !!this.columnEnd) return `${this.columnStart} / ${this.columnEnd + 1}`;
    else if (!!this.columnStart)  return `${this.columnStart} / ${this.columnStart + 1}`;
    return 'unset'
  }

  @Input() rowStart?: number;
  @Input() rowEnd?: number;
  @HostBinding('style.grid-row')
  get rowSpan() {
    if (!!this.rowStart && !!this.rowEnd) return `${this.rowStart} / ${this.rowEnd + 1}`;
    else if (!!this.rowStart)  return `${this.rowStart} / ${this.rowStart + 1}`;
    return 'unset'
  }
}
