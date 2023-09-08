import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent {
  @Input() value: string;
  @Output() cellClick = new EventEmitter<void>();

  handleClick() {
    this.cellClick.emit();
  }

  constructor() {
    this.value = '';
  }
}
