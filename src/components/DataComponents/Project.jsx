import React from 'react'
var _ = require('lodash');
import styles from './Project.css'
import common from './common.css'
var colorList=["#3366CC","#DC3912","#FF9900","#109618","#990099"]

var Project = React.createClass({
  render(){
    return(
      <div className={"container-fluid"+" "+common.bgColorBlack}>
        <div className="row">
          <div className={"col-sm-12"}>
            <div className={common.borderBottom +" "+"row"}><span className={styles.Heading}>Project Details</span></div>
            {(_.get(this.props.data,'project',[])).map((single,index)=><SingleProject data={single} key={index} index={index}></SingleProject>)}
          </div>
          </div>
        </div>
      )
  }
});

var SingleProject = React.createClass({
  render(){
    var  toDate ;
    if(this.props.data.iscurrent){toDate =  "Present"}else{toDate =  this.props.data.to}
    return(
      <div className={styles.singleEmp+" "+"col-sm-6"} style={{"background-color":colorList[this.props.index]}}>
        <span className={styles.companyName}>{this.props.data.projectname}</span><span className={common.dateRight}>{this.props.data["from"]} - {toDate}</span>
        <br></br>
        <span className={styles.titleName}>{this.props.data.company}</span>
        <span className={styles.titleName}>{"-["+this.props.data.keyskills+"]"}</span>
        <br></br>
        <div className={styles.descriptionWell}><span >{this.props.data.description.split('\n').map((item, key) => { return <span key={key}>{item}<br/></span>})}</span></div>
      </div>
    )
  }
})

export default Project
