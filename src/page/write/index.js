import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Write extends PureComponent {
	render() {
	  if(this.props.login) {
		return (
		  <div>写文章~</div> 
		);
	  } else {
	  	return <Redirect to='/login' />
	  }
	}
}

const mapState = (state) => {
	return {
		login : state.getIn(['login', 'login'])
	}
}

export default connect(mapState, null)(Write);