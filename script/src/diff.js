import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			list: [{id: 1,val: 'aa'}, {id: 2, val: 'bb'}, {id: 3, val: 'cc'}]
		}
	}

	click() {
		this.state.list.reverse()
		this.setState({})
	}

	add() {
		this.state.list.push({id: 4, val: 'dd'})
		this.setState({})
	}
	splice() {
		this.state.list.splice(1,1)
		this.setState({})
	}

	render() {
		return (
            <ul>
                <div onClick={this.splice.bind(this)}>delete</div>
                <div onClick={this.add.bind(this)}>add</div>
                <div onClick={this.click.bind(this)}>reverse</div>
                {
                	this.state.list.map(function(item, index) {
                		return (
                            <Li key={index} val={item.val}></Li>
                		)
                	}.bind(this))
                }
            </ul>
		)
	}
}

class Li extends React.Component{
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		console.log('===mount===')
	}
	componentWillUpdate(nextProps, nextState) {
		console.log('===update====')
	}
	render() {
		return (
            <li>
                {this.props.val}
                <input type="text"></input>
            </li>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('app'))