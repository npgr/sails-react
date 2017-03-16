import { observable } from "mobx"

class CountryStore {
	@observable	data = []
	fields = []
	
	init() {
		Global_Schema.createdAt = {
			order: 200,
			description: 'Created At',
			type: 'timestamp with time zone'
		}
		
		Global_Schema.updatedAt = {
			order: 210,
			description: 'Updated At',
			type: 'timestamp with time zone'
		}
		
		for (var i=0; i<Global_Data.length; i++)
			this.data.push(Global_Data[i])
		Global_Data = []
		this.setFields()
	}
	
	set(theData) {
		this.data = theData
	}
	
	setFields() {
		var allFields = Object.keys(Global_Schema)
		for (var i=0; i < allFields.length; i++)
		{
			if (!!Global_Schema[allFields[i]].type) {
				var obj = Global_Schema[allFields[i]]
				obj.name = allFields[i]
				this.fields.push(obj)
			}
		}	
	}
}

var store = new CountryStore

export default store