import React, { Component } from 'react';

class Intro extends Component {
	render() {
		return (
			<div>
				<h1>Welcome Back {this.props.name}</h1>
			</div>
		);
	}
}

export default Intro;