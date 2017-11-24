import React from 'react'
var _ = require('lodash');
import styles from './Achivements.css'
import common from './common.css'

var Achivement = React.createClass({
  render(){
    return(
      <div className={"container-fluid"+" "+common.bgColorBlack}>
        <div className="row">
          <div className={"col-sm-12"}>
            <div className={common.borderBottom +" "+"row"}><span className={styles.Heading}>Achivement Details</span></div>
            {(_.get(this.props.data,'achivement',[])).map((single,index)=><SingleAchivement data={single} key={index}></SingleAchivement>)}
          </div>
          </div>
        </div>
      )
  }
});

var SingleAchivement = React.createClass({
  render(){
    var  toDate ;
    if(this.props.data.iscurrent){toDate =  "Present"}else{toDate =  this.props.data.to}
    return(
      <div className={styles.singleEmp}>
        <span className={styles.titleName}>{this.props.data.achivement}</span><span className={common.dateRight}>{this.props.data["date"]}</span>
        <br></br>
      </div>
    )
  }
})

export default Achivement
