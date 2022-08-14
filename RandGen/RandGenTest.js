import { RandGen } from "./RandGen.js";
import * as assert from "node:assert";
class RandGenTest{
	constructor(n){
		this.randStr(n)
		this.randInt(n)
		this.randArr(n)
		this.randObj(n)
	}

	randStr(n){
		var str = new RandGen().randStr(n)
		console.log("randStr", str)
		assert.equal(typeof str === 'string', true)
		assert.equal(str.length<=n, true)

		var strArr = new RandGen().randStr(n, true)
		console.log("randStr", strArr)
		assert.equal(Array.isArray(strArr), true)
		for(var i=0; i<strArr.length; i++){
			assert.equal(typeof strArr[i] === 'string', true)
			assert.equal(strArr[i].length<=n, true)
		}
	}

	randInt(n){
		var int = new RandGen().randInt(n)
		console.log("randInt", int)
		assert.equal(typeof int === 'number', true)
		assert.equal(int<=n, true)

		var intArr = new RandGen().randInt(n, true)
		console.log("randInt", intArr)
		assert.equal(Array.isArray(intArr), true)
		for(var i=0; i<intArr.length; i++){
			assert.equal(typeof intArr[i] === 'number', true)
			assert.equal(intArr[i]<=n, true)
		}
	}

	randArr(n){
		var arr = new RandGen().randArr(n)
		console.log("randArr", arr)
		assert.equal(Array.isArray(arr), true)
		assert.equal(arr.length<=n, true)
	}

	randObj(n){
		var obj = new RandGen().randObj(n)
		console.log('randObj', obj)
		assert.equal(typeof obj === 'object', true)
		this._randObj(n, obj)
		
	}
	_randObj(n, obj){
		for(var i=0; i<n-1; i++){
			var key = Object.keys(obj)[i]
			assert.equal(typeof key === 'string', true)
			assert.equal(obj[key]!=undefined, true)
			this._randObj(n-1, obj[key])
		}
	}

	rand(){

	}

	
	randSelection(){

	}

}


new RandGenTest(5)