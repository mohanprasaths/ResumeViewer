import React from 'react'
var _ = require('lodash');
import styles from './Employment.css'
import common from './common.css'

var Employment = React.createClass({
  render(){
    return(
      <div className={"container-fluid"+" "+common.bgColorBlack}>
        <div className="row">
          <div className={"col-sm-12"}>
            <div className={common.borderBottom +" "+"row"}><span className={styles.Heading}>Employment Details</span></div>
            {(_.get(this.props.data,'work',[])).map((single,index)=><SingleEmployment data={single} key={index}></SingleEmployment>)}
          </div>
          </div>
        </div>
      )
  }
});

var SingleEmployment = React.createClass({
  render(){
    var  toDate ;
    if(this.props.data.iscurrent){toDate =  "Present"}else{toDate =  this.props.data.to}
    return(
      <div className={styles.singleEmp}>
        <span className={styles.companyName}>{this.props.data.title}</span><span className={common.dateRight}>{this.props.data["from"]} - {toDate}</span>
        <br></br>
        <span className={styles.titleName}>{this.props.data.company}</span>
        <span className={styles.titleName}>{"@"+this.props.data.location}</span>
        <br></br>
        <div className={styles.descriptionWell}><span >{this.props.data.description.split('\n').map((item, key) => { return <span key={key}>{item}<br/></span>})}</span></div>
      </div>
    )
  }
})

export default Employment
