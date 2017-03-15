import { observable } from "mobx"

class CountryStore {
	@observable	data = []
	fields = []
	
	init() {
		//console.log('Global Data: ', Global_Data)
		if (Global_Data.length > 0)
			this.fields = Object.keys(Global_Data[0])
		
		for (var i=0; i<Global_Data.length; i++)
			this.data.push(Global_Data[i])
		Global_Data = []
		//console.log('this.data8: ', this.data[0])
	}
	
	set(theData) {
		this.data = theData
	}
	
	getFields() {
		return this.fields
	}
}

var store = new CountryStore

//Global_Data = []

export default store