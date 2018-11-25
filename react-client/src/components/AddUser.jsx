import React from 'react';

class AddUsers extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name :'',
			title : '',
			text :''

		}
		this.addUserClick = this.addUserClick.bind(this)
		this.onChangeName = this.onChangeName.bind(this)
		this.onChangeTitle = this.onChangeTitle.bind(this)
		this.onChangeText = this.onChangeText.bind(this)


		this.btnShowData = this.btnShowData.bind(this)
	}
	onChangeName(e){
		this.setState({
			name: e.target.value
		})
	}
	onChangeTitle(e){
		this.setState({
			title: e.target.value
		})
	}
	onChangeText(e){
		this.setState({
			text: e.target.value
		})
	}



	addUserClick(){
		this.props.onAdd(this.state.name,this.state.title,this.state.text)
	}

	btnShowData(){
		this.props.onShow();
	}

	render(){
		
		return(
			<div>
			<div id='btn'><button onClick = {this.btnShowData}> Show Surveys</button></div>
			<br/>
			<h2 id ='text'>Name : <input value = {this.state.name} onChange={this.onChangeName}/></h2>
			<h2 id ='text'> Tile: <input value = {this.state.title} onChange={this.onChangeTitle}/></h2>
			
			<h2 id ='txt'>Text: <input id ="any" value = {this.state.text} onChange={this.onChangeText}/></h2>
			<div id='btn'><button onClick ={this.addUserClick} > Add </button></div>
			<br/>



			{this.props.users.map(function(user,i) {
   			return (
   						
   				<h2  id ='user'  key={i}> 
   					{user.name} THE TITLE : {user.title} THE TEXT : {user.text} 
				</h2>
   				
   				)
  				 })}
			</div>

			)
	}

}
export default AddUsers;