import React from 'react';
import store from './CountryStore'

export default class TableLine extends React.Component {

	render() {
		var idx = Number(this.props.idx)
		var tableLine = [  ]
		
		tableLine.push(<td key='-1'>ops</td>)
		for (var i=0; i < store.fields.length; i++)
			tableLine.push(<td key={i}>{store.data[idx][store.fields[i].name]}</td>)
		return (
			<tr>
				{ tableLine }
			</tr>
		)
	
	}	
	
}