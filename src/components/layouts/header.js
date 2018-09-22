import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Close from "@material-ui/icons/Close"


 class Header extends React.Component {

  render(){
    const {changePopupShowOrHide} = this.props;

    return (
      <AppBar position="static" color="default" style={{display: "flex", flexDirection: "row",}}>
        <Toolbar>
          <Typography variant="title" color="inherit">
            Структура номеров
          </Typography>

          </Toolbar>


          <IconButton  aria-label="Delete" style={{padding: 0,}}>
            <Close onClick={changePopupShowOrHide} />
          </IconButton>
      </AppBar>
    )
  }
}

// <button type="button" name="button" onClick={changePopupShowOrHide}> + </button>
export default Header
