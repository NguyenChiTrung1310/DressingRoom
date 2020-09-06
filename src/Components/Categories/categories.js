import React, { Component } from 'react';
import { connect } from 'react-redux';

class categories extends Component {
  _choosenCategory = (payload) => {
    this.props.dispatch({
      type: 'SET_CATEGORY',
      payload,
    });
  };

  render() {
    return (
      <div className='btn -group p-3'>
        {this.props.categoryList.map((item, index) => (
          <button
            key={index}
            className={
              this.props.choosenCategory === item.type
                ? 'btn btn-primary'
                : 'btn btn-secondary'
            }
            onClick={() => this._choosenCategory(item.type)}
          >
            {item.showName}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categoryList: state.categories,
  choosenCategory: state.choosenCategory,
});

export default connect(mapStateToProps)(categories);
