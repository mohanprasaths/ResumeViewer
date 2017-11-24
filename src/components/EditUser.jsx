import React from 'react'
import {connect} from 'react-redux';
var _ = require('lodash');
import Bio from './DataComponents/Bio.jsx'
import Education from './DataComponents/Education.jsx'
import Employment from './DataComponents/Employment.jsx'
import Project from './DataComponents/Project.jsx'
import Achivement from './DataComponents/Achivements.jsx'

var MainPage = React.createClass({
  componentDidMount() {
    console.log(this.props.user.userdata)
  },
	render : function(){
	return(

  <div className="container">
      <div className="row">
      <Bio data={_.get(this.props,'user.userdata',"")}></Bio>
      </div>
      <div className="row">
          <Education data={_.get(this.props,'user.userdata',"")}></Education>
      </div>
      <div className="row">
        <Employment data={_.get(this.props,'user.userdata',"")}></Employment>
      </div>
      <div className="row">
        <Project data={_.get(this.props,'user.userdata',"")}></Project>
      </div>
      <div className="row">
        <Achivement data={_.get(this.props,'user.userdata',"")}></Achivement>
      </div>
	</div>
		)
	}
})

const mapStateToProps = (state) => {
  return {
    user : state.user,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
