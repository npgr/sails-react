/**
 * CountryController
 *
 * @description :: Server-side logic for managing Countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	list: function(req, res) {
		Country.find()
			.exec(function(err, data){
				var fs = require('fs')
				var Hjson = require('hjson')
				var mdl = fs.readFileSync('./api/models/Country.js').toString().replace('module.exports = {', '').replace('};','')
				mdl = mdl.replace('//End Attributes','').replace(/\/\//g,'')
				var obj = Hjson.parse(mdl);
				//res.locals.schema = Country.schema
				res.locals.schema = obj.attributes
				res.locals.data = data
				//res.locals.data = JSON.stringify(data)
				res.view("Country/list")
			})
	}
};

