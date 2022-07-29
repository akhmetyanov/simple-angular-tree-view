import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TreeViewNode } from './tree-view-node'

@Injectable({
  providedIn: 'root'
})
export class TreeViewNodesProducesService {

  nodes$: BehaviorSubject<TreeViewNode[]> = new BehaviorSubject<TreeViewNode[]>([])

  constructor() {
    this.makeTestData()
  }

  private makeTestData() {

    let arr: TreeViewNode[] = []

    arr.push(new TreeViewNode(
      'Nested level -1, object ' + 0, 
      { somePropOfObject: 'object of -1 level. Object number is ' + 0 }
    ))

    for (let i = 1; i < 10; i++) {

      arr.push(new TreeViewNode(
          'Nested level 0, object ' + i, 
          { somePropOfObject: 'object of 0 level. Object number is ' + i }
        ))

      for (let j = 0; j < 10; j++) {
        arr[i].childs
          .push(new TreeViewNode(
            'Nested level 1, object ' + j, 
            { somePropOfObject: 'object of 1 level. Object number is ' + j }
          ))

        for (let k = 0; k < 10; k++) {
          arr[i].childs[j].childs
            .push(new TreeViewNode(
              'Nested level 2, object ' + j, 
              { somePropOfObject: 'object of 2 level. Object number is ' + k }
            ))

            for (let l = 0; l < 10; l++) {
              arr[i].childs[j].childs[k].childs
                .push(new TreeViewNode(
                  'Nested level 3, object ' + l, 
                  { somePropOfObject: 'object of 3 level. Object number is ' + l }
                ))

                for (let z = 0; z < 10; z++) {
                  arr[i].childs[j].childs[k].childs[l].childs
                    .push(new TreeViewNode(
                      'Nested level 3, object ' + z, 
                      { somePropOfObject: 'object of 4 level. Object number is ' + z }
                    ))
                }
            }
        }
      }
      
      
    }

    this.nodes$.next(arr)
  }

}
