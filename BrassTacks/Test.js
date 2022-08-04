import { BrassTacks } from "./BrassTacks"
import * as assert from "node:assert"
class Test{
    constructor(){
        this.tests()

    }
    tests(){

        this.isOverLimit()
        this.isRecursive()
        this.primPattAbstract()
        this.isBT()
        this.BTT()
    }

    isBT(){

    }
    BTT(){

    }
    isOverLimit(){
        var levels=5;
        var limit=2;
        var bt = new BrassTacks(levels, limit)
        assert.equal(bt.isOverLimit('000'), true)
        assert.equal(bt.isOverLimit('111'), true)
        assert.equal(bt.isOverLimit('11'), false)
        assert.equal(bt.isOverLimit('00'), false)
        assert.equal(bt.isOverLimit('10'), false)
        assert.equal(bt.isOverLimit('01'), false)

    }

    isRecursive(){

    }

    primPattAbstract(){

    }
}