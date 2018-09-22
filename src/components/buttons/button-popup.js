import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';


 class PopupButton extends React.Component<{}, {}> {
  constructor() {
        super();
        this.state = {

        }
    }

    render() {

      const {
        changePopupShowOrHide,
        initStateOfdatas
      } = this.props;

    let onClick = ()=>{
        changePopupShowOrHide()
        initStateOfdatas()
      }

        return (
          <Button variant="contained" color="primary" onClick={onClick} style={{backgroundColor: "#1FB9E6"}}>
               Popup
          </Button>

        );
    }


}

export default PopupButton;
