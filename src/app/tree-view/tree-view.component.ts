import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { ITreeViewNode } from './itree-view-node';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeViewComponent {

  @Input() nodes: ITreeViewNode[] | null | undefined = []
  @Output() selected: EventEmitter<ITreeViewNode> = new EventEmitter<ITreeViewNode>()
  @Input() _selected: ITreeViewNode | null = null

  constructor() { }

  onArrowClick(nested: HTMLDivElement, arrow: HTMLDivElement) {
    arrow = arrow.childNodes[0] as HTMLDivElement

    if (arrow.classList.contains('arrow-right')) {
      arrow.classList.remove('arrow-right')
      arrow.classList.add('arrow-down')
    } else {
      arrow.classList.remove('arrow-down')
      arrow.classList.add('arrow-right')
    }

    nested.classList.toggle('visible')
  }

  onSelectValue(value: ITreeViewNode) {
      this._selected = value
      this.selected.emit(value)
  }
}
