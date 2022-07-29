import { ITreeViewNode } from './tree-view/itree-view-node'

export class TreeViewNode implements ITreeViewNode {

    constructor(value: string, sourceValue: any) {
        this.value = value
        this.sourceValue = sourceValue
        this.childs = []
    }

    value: string
    sourceValue: any
    childs: ITreeViewNode[]
}