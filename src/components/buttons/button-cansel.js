import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class ButtonCancel extends React.Component {

  render(){


    const {cancalAndCose} = this.props

    return (
      <Button color="primary" style={{color: "#1FB9E6", marginLeft: 10,}} onClick={cancalAndCose}>
        Отмена
      </Button>
    )
  }
}

export default ButtonCancel;
