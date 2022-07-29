import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ITreeViewNode } from './itree-view-node';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreeViewComponent {
  @Input() nodes: ITreeViewNode[] = []
  @Output() selected: EventEmitter<ITreeViewNode> = new EventEmitter<ITreeViewNode>()
  @Input() selectedNode: ITreeViewNode | null = null

  visibleChilds: number[] = []

  constructor(
  ) { }

  onArrowClick(arrow: HTMLDivElement, index: number) {
    arrow = arrow.childNodes[0] as HTMLDivElement

    if (arrow.classList.contains('arrow-right')) {
      arrow.classList.remove('arrow-right')
      arrow.classList.add('arrow-down')
    } else {
      arrow.classList.remove('arrow-down')
      arrow.classList.add('arrow-right')
    }

    if (this.visibleChilds.includes(index)) {
      let i = this.visibleChilds.indexOf(index)
      this.visibleChilds.splice(i, 1)
    } else {
      this.visibleChilds.push(index)
    }
  }

  onSelectValue(value: ITreeViewNode) {
    this.selectedNode = value
    this.selected.emit(value)
  }
}
