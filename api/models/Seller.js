/**
 * Seller.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  //migrate: "alter",
  attributes: {
	//_title: "Seller",
	//_card_width: "65em",
	//_btn_left: "35px",
	//_ga: "enabled",
	id: {
		//description: "id",
		type: "integer",
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},
	code: {
		//description: "Code",
		type: "string"
	},
	name: {
		//description: "Name",
		type: "string",
		required: true
	},
	salesregion: {
		//description: "Sales Region",
		type: "string",
		required: true
	},
	user: {
		//description: "User",
		type: "string",
		required: true
	}
//End Attributes
  }
};

