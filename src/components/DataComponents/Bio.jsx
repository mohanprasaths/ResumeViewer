import React from 'react'
var _ = require('lodash');
import styles from './Bio.css'

var Bio = React.createClass({
  render : function(){
    return(
      <div className={styles.bgColorBlack+" "+ styles.decentPadding}>
        <div className="row">
          <div className="col-sm-7 ">
          <div className="col-sm-3 col-xs-4">
        <img className={styles.decentPicture} href={this.props.data.pictureUrl} src={this.props.data.pictureUrl} value="ssss" ></img>
        </div>
        <div className={"col-sm-9 col-xs-8"+" "+styles.padding20}>
          <span className={styles.namesBoard}>{this.props.data.firstName}  </span>
          <span className={styles.namesBoard}>{this.props.data.lastName}</span><br></br>
          <span className={styles.headline}>{this.props.data.headline}</span>
        </div>
        </div>
        <div className="col-sm-5 ">
          <table className="padding4">
            <tbody>
            <tr>
              <td>
                <span className={styles.question +" "+"pull-right"}>Name : </span>
              </td>
              <td>
                <span className={styles.data}>{this.props.data.firstName} </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={styles.question+" "+"pull-right"}>E-Mail : </span>
              </td>
              <td>
                <span className={styles.data}>{this.props.data.emailAddress} </span>
              </td>
            </tr>
            <tr>
              <td>
                <span className={styles.question+" "+"pull-right"}>Phone number : </span>
              </td>
              <td>
                <span className={styles.data}>{this.props.data.phonenumber} </span>
              </td>
            </tr>
            </tbody>
          </table>

        </div>
        </div>
        <div className={"row"+" "+styles.decentPadding}>
          <span className={styles.aboutMe+" "+styles.decentPadding}>{this.props.data.summary}</span>
        </div>
      </div>
    )
  }
})

export default Bio
