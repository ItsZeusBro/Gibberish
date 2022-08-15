import * as util from "node:util"
import * as assert from "node:assert"
import {Test} from "test/Test.js"

class GibberGen{
	constructor(invalid=false, max_depth=10, max_width=10, dist=0.5, pk=['payload']){
		//dist is the array to object distribution
		this.invalid=invalid;
		this.max_depth=max_depth;
		this.max_width=max_width;
		this.dist=dist;
		this.pk=pk;
		this.gg=this.gibberGen(max_depth, max_width);
	}

	gibberGen(max_depth, max_width){

	}
}

console.log(new Test().randInt(5))
