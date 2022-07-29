import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { TreeViewNode } from './tree-view-node';
import { TreeViewNodesProducesService } from './tree-view-nodes-produces.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nodes: TreeViewNode[] = []
  nodes$: Subject<TreeViewNode[]> = new Subject<TreeViewNode[]>()

  constructor(
    private treeViewNodesProducerService: TreeViewNodesProducesService
  ) {
    this.treeViewNodesProducerService.nodes$.subscribe(n => {
      this.nodes = n
    })
  }

  onSelectNode(node: TreeViewNode) {
    console.log(node)
  }
}
