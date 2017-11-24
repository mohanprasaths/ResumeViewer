import React from 'react'
var _ = require('lodash');
import styles from './Education.css'
import common from './common.css'
import { Line, Circle } from 'rc-progress';
import { Chart } from 'react-google-charts';

var colorList=["#3366CC","#DC3912","#FF9900","#109618","#990099"]


var Education = React.createClass({
  render : function(){
    var top5skillsData = [];
    top5skillsData.push(["Skill","Rating",{"role":"style"}])
    var allSkills = [];
    allSkills.push(["Skill","Rating"])
    var allSkillsWithExp = [];
    allSkillsWithExp.push(["Skill","id","Experience","Rating"])
    var skills = (_.get(this.props.data,'skills',[]))
    var sortedArray = _.sortBy(skills, ['rating']);
    if(sortedArray.length > 0){
    if(sortedArray.length > 5){
    for(var j=0,i=sortedArray.length-1;i>=sortedArray.length-5;i--,j++){
      var obj = [];
      obj.push(sortedArray[i].skillname)
      obj.push(parseFloat(sortedArray[i].rating))
      obj.push(colorList[j])
      top5skillsData.push(obj)
    }}
    for(var i=0;i<sortedArray.length;i++){
      var obj = [];
      obj.push(sortedArray[i].skillname)
      obj.push(parseFloat(sortedArray[i].rating))
      allSkills.push(obj);
    }
    for(var i=0;i<sortedArray.length;i++){
      var obj = [];
      obj.push(sortedArray[i].skillname)
      obj.push(i+1)
      obj.push(parseFloat(sortedArray[i].experience))
      obj.push(parseFloat(sortedArray[i].rating))

      allSkillsWithExp.push(obj)
    }
  }
  else{

  }
    console.log(skills)

    return(
      <div className="container-fluid">
      <div className="row">
      <div className={"col-sm-12"+" "+styles.bgColorBlack} >
        <div className={styles.borderBottom +" "+"row"}><span className={styles.Heading}>Education Details</span></div>
        {(_.get(this.props.data,'education',[])).map((single,index)=><SingleEducation data={single} key={index}></SingleEducation>)}
      </div>
      <div className={"col-sm-12"+" "+styles.bgColorBlack}>
        <div className="row">
        <div className="col-sm-6">
        <Chart
        chartType="BarChart"
        data={top5skillsData}
        options={{"legend":{"position":"none"},"bar":{"groupWidth":"100%"},"backgroundColor":"#444444","vAxis":{"format":"none","baseline":1,"baselineColor":"green","textStyle":{"color": 'white',"fontSize":"12"},"gridlines":{"color":"red"}},
      "hAxis":{"maxValue":10,"minValue":0,"textStyle":{"color": 'white'},"gridlines":{"color":"grey"},"title":"Rating","titleTextStyle":{"color":"white","fontSize":"16"}},"title":"Top 5 skills","titleTextStyle":{"color":"white","fontSize":"16","bold":true}
        ,"animation":{"duration":1000,"easing":"inAndOut","startup":"true"}}}
        width="100%"
        height="300px"
        is3D="true"
      />
    </div>
    <div className="col-sm-6">
    <Chart
    chartType="PieChart"
    data={allSkills}
    options={{"title":"All Skills","pieHole":0.5,"is3D":false,"backgroundColor":"#444444","legend":{"textStyle":{"color":"white"}},"pieSliceBorderColor":"#444444"
  ,"titleTextStyle":{"color":"white","fontSize":"16","bold":true},"animation":{"duration":1000,"easing":"linear","startup":"true"}}}
    width="100%"
    height="350px"
    is3D="true"
  />
</div>
</div>
      </div>
      </div>
      <div className={"row"+" "+styles.bgColorGreen}>
          <Chart
          chartType="BubbleChart"
          data={allSkillsWithExp}
          options={{"chartArea":{"backgroundColor":"#444444"},"colors":['white',"grey"],"colorAxis":{"minValue":1,"maxValue":10,"legend":{"textStyle":{"color":"white"}}},"bubble":{"opacity":0.5,"textStyle":{"color":"white","fontSize":10}},"title":"Skills and Experience chart","titleTextStyle":{"color":"white","fontSize":"16","bold":true},"titlePosition":"out"
          ,"hAxis": {"title": 'Skill-Ratings',"minValue":1,"titleTextStyle":{"color":"white","fontSize":17}},"vAxis": {"title": 'Experience',"minValue":null,"titleTextStyle":{"color":"white","fontSize":17}},"backgroundColor":"#444444"}}
          width="100%"
          height="350px"
          is3D="true"
        />
      </div>
      </div>

    )
  }
})


export default Education

var SingleEducation = React.createClass({
  render:function(){
    return(
      <div className={styles.singleEdu}>
        <span className={styles.schoolName}>{this.props.data.school}</span><span className={common.dateRight}>{this.props.data["start-date"]} - {this.props.data["end-date"]}</span>
        <br></br>
        <span className={styles.degree}>{this.props.data.degree}</span><span>       -          </span>
          <span className={styles.percentage}>{this.props.data.percentage}%</span>
        <br></br>
        <div className={styles.sizeChart}><Circle percent={this.props.data.percentage} strokeWidth="4" strokeColor="#16A086" /></div>

      </div>
    )
  }
})
