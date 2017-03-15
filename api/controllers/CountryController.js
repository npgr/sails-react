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
				res.locals.data = data
				//res.locals.data = JSON.stringify(data)
				res.view("Country/list")
			})
	}
};

