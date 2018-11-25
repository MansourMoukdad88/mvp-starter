import React from 'react';

class AddUsers extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name :'',
			title : '',
			text :''

		}
		// Bind all methods
		this.addUserClick = this.addUserClick.bind(this)
		this.onChangeName = this.onChangeName.bind(this)
		this.onChangeTitle = this.onChangeTitle.bind(this)
		this.onChangeText = this.onChangeText.bind(this)

		this.btnShowData = this.btnShowData.bind(this)
	}
	// set all the methods with setState
	onChangeName(x){
		this.setState({
			name: x.target.value
		})
	}
	onChangeTitle(x){
		this.setState({
			title: x.target.value
		})
	}
	onChangeText(x){
		this.setState({
			text: x.target.value
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
			<h2 id ='text'>Name : <input placeholder = "Your Name" value = {this.state.name} onChange={this.onChangeName}/></h2>
			<h2 id ='text'> Title: <input placeholder = "The Title" value = {this.state.title} onChange={this.onChangeTitle}/></h2>
			
			<h2 id ='txt'>Text: <input placeholder = "Text" id ="any" value = {this.state.text} onChange={this.onChangeText}/></h2>
			<div id='btn'><button onClick ={this.addUserClick} > Add </button></div>
				<div id='btn'><button onClick = {this.btnShowData}> Show Surveys</button></div>



			{this.props.users.map(function(user,i) {
   			return (
   						
   				<h3  id ='user'  key={i}> 
   					The Name is  : {user.name},    The Title   : {user.title},   He Said   : {user.text} 
				</h3>
   				)
  				 })}
			</div>

			)
	}

}
export default AddUsers;