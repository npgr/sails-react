import React from 'react';
import store from './CountryStore'
import TableLine from './TableLine'

export default class List extends React.Component {
	constructor(props) {
		super()
		store.init()
		//console.log('Schema: ',  Global_Schema)
		//console.log('Fields: ',  store.fields)
		//console.log('Data: ', store.data[1])
	}
	
	render() {

		var tableHead = ([
					<th id="th_ops" class="ops"></th>
		])
		for (var i=0; i < store.fields.length; i++)
			tableHead.push(<th>{store.fields[i].description}</th>)
		
		var tableBody = [  ]
		for (var i=0; i < store.data.length; i++)
			tableBody.push(<TableLine idx={i} />)
		
		return(
			<table id="data_table" class="table_list" style={{width:'100%'}}>
			  <thead>
				<tr>{tableHead}</tr>
			  </thead>
			  <tbody>
				{ tableBody }
			  </tbody>
			</table>
		)
	}
}