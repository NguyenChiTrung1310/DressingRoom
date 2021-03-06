import React, { Component } from 'react';
import style from './style.module.css';
import { connect } from 'react-redux';
import classes from './style.module.css';

class ModelComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contain: 'images/background/background_998.jpg',
      body: 'images/allbody/bodynew.png',
      bikinitop: 'images/allbody/bikini_branew.png',
      bikinibottom: 'images/allbody/bikini_pantsnew.png',
      model: 'images/model/1000new.png',
      feetleft: 'images/allbody/feet_high_leftnew.png',
      feetright: 'images/allbody/feet_high_rightnew.png',
    };
  }

  render() {
    return (
      <div
        className={style.contain}
        style={{ background: `url(${this.state.contain})` }}
      >
        <div
          className={style.body}
          style={{ background: `url(${this.state.body})` }}
        ></div>
        <div
          className={style.model}
          style={{ background: `url(${this.state.model})` }}
        ></div>
        <div
          className={style.bikinitop}
          style={{ background: `url(${this.state.bikinitop})` }}
        ></div>
        <div
          className={style.bikinibottom}
          style={{ background: `url(${this.state.bikinibottom})` }}
        ></div>
        <div
          className={style.feetleft}
          style={{ background: `url(${this.state.feetleft})` }}
        ></div>
        <div
          className={style.feetright}
          style={{ background: `url(${this.state.feetright})` }}
        ></div>
        <div
          className={classes.bikinitop}
          style={{
            backgroundImage: `url(${this.props.model.topclothes})`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div
          className={classes.bikinibottom}
          style={{
            backgroundImage: `url(${this.props.model.botclothes})`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div
          className={classes.feetleft}
          style={{
            backgroundImage: `url(${this.props.model.shoes})`,
            backgroundSize: 'cover',
          }}
        ></div>
        <div
          className={classes.feetright}
          style={{
            backgroundImage: `url(${this.props.model.shoes})`,
            backgroundSize: 'cover',
          }}
        ></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  model: state.model,
});
export default connect(mapStateToProps)(ModelComponent);
