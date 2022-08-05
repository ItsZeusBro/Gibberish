import { BrassTacks } from "./BrassTacks.js"
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
        limit=5
        var bt = new BrassTacks(levels, limit)
        assert.equal(bt.isOverLimit('000000'), true)
        assert.equal(bt.isOverLimit('111111'), true)
        assert.equal(bt.isOverLimit('1'), false)
        assert.equal(bt.isOverLimit('11'), false)
        assert.equal(bt.isOverLimit('111'), false)
        assert.equal(bt.isOverLimit('1111'), false)
        assert.equal(bt.isOverLimit('11111'), false)
        assert.equal(bt.isOverLimit('0'), false)
        assert.equal(bt.isOverLimit('00'), false)
        assert.equal(bt.isOverLimit('000'), false)
        assert.equal(bt.isOverLimit('0000'), false)
        assert.equal(bt.isOverLimit('00000'), false)
        assert.equal(bt.isOverLimit('0'), false)
        assert.equal(bt.isOverLimit('01'), false)
        assert.equal(bt.isOverLimit('010'), false)
        assert.equal(bt.isOverLimit('0101'), false)
        assert.equal(bt.isOverLimit('01010'), false)
        assert.equal(bt.isOverLimit('1'), false)
        assert.equal(bt.isOverLimit('10'), false)
        assert.equal(bt.isOverLimit('101'), false)
        assert.equal(bt.isOverLimit('1010'), false)
        assert.equal(bt.isOverLimit('10101'), false)
    }

    isRecursive(){
        var bt = new BrassTacks(0, 0)

        var recursiveStrings=[]
        for(var _1s=1; _1s<100; _1s++){
            for(var _0s=1; _0s<100; _0s++){
                for(var _r=2; _r<100; _r++){
                    assert.equal(true, bt.isRecursive(("1".repeat(_1s)+"0".repeat(_1s)).repeat(_r)))
                }
            }
        }
    }

    isBT(){
        var bt = new BrassTacks(5, 10)

        var recursiveStrings=[]
        for(var _1s=1; _1s<10; _1s++){
            for(var _0s=1; _0s<10; _0s++){
                for(var _r=2; _r<10; _r++){
                    console.log("1".repeat(_1s)+"0".repeat(_0s)+"1".repeat(_1s))
                    assert.equal(true, bt.isBT("1".repeat(_1s)+"0".repeat(_0s)+"1".repeat(_1s)))
                }
            }
        }
    }

    primPattAbstract(){

    }
}

new Test()