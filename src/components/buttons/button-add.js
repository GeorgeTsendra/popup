import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

class ButtonAdd extends React.Component {

  render(){


    const {addNewElement} = this.props

    return (
      <Button color="primary" className="" onClick={addNewElement} style={{color: "#1FB9E6",}}>
        Добавить
      </Button>
    )
  }
}

export default ButtonAdd;
