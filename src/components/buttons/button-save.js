import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class ButtonSave extends React.Component {

  render(){


    const  classes = {
      button: {
        backgroundColor: "#1FB9E6",
      }
    }
    const {saveAndCose} = this.props

    return (
      <Button variant="contained" color="primary" style={{backgroundColor: "#1FB9E6"}} onClick={saveAndCose}>
        Сохранить
      </Button>
    )
  }
}

export default ButtonSave;
