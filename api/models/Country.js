/**
 * Country.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	//migrate: "alter",
  	//_card_width: "60em",
	//_btn_left: "30px",
	//_ga: "enabled",
	id: {
		//description: "id",
		//order: 1,
		type: "integer",
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},
	code: {
		//description: "Code",
		//order: 2,
		type: "string"
	},
	name: {
		//description: "Name",
		//order: 3,
		type: "string",
		required: true
	}
	//End Attributes
  }
};

