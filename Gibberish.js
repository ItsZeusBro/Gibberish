import * as util from "node:util"
import {Test} from "test/Test.js"

export class Gibberish{

	paths(schema, pk, path=[], _paths=[]){
		if(Array.isArray(schema)){
			for(var i=0; i<schema.length; i++){
				var val=schema[i];
				if(Array.isArray(val)){
					//push index to path
					var _path = path.slice()
					_path.push(i)
					this.paths(val, pk, _path, _paths)
				}else if(typeof val === 'object'){
					var _path = path.slice()
					_path.push(i)
					this.paths(val, pk, _path, _paths)
				}else{
					path = path.slice()
					path.push({[i]:val})
				}
			}

		}else if(typeof schema === 'object'){
			for(var i=0; i<Object.keys(schema).length; i++){
				var key = Object.keys(schema)[i];
				var val = schema[key]
				if(pk.includes(key)){
					path.push({[key]:val})
				}else{
					var _path = path.slice()
					_path.push(key)
					this.paths(val, pk, _path, _paths)
				}
			}
		}else{
			//base case
			path.push({"base":schema})
			_paths.push(path)
			return
		}
		return _paths
	}
	
	log(obj){
        if(obj){
            console.log(util.inspect(obj, false, null, true))
        }
    }
}

  
var gibberish = new Gibberish()
gibberish.log(gibberish.paths(SCHEMA, ['~DEFAULT~', 'payload']))
