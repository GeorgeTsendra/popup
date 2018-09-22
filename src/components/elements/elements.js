import React, { Component } from 'react';
import ReactDOM from "react-dom";
import Element from "./element/element";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List'


class Elements extends React.Component {

  constructor(props) {
      super(props);
      this.state = {

      };
    }




    render() {


      // const styles = {
      //   root: {
      //     width: '100%',
      //     maxWidth: 360,
      //     position: 'relative',
      //
      //     maxHeight: 400,
      //   },
      //   listSection: {
      //     backgroundColor: 'inherit',
      //   },
      //   ul: {
      //     backgroundColor: 'inherit',
      //     padding: 0,
      //   },
      // };

      const {
          listData,
          removeElem,
          returnValueTovalueOnChange,
          returnSelectTovalueOnChange
        } = this.props;

      let  initRemoveTheElement = (idToRemove)=> {
          removeElem(idToRemove)
        }

      let elementreturnValueTovalueOnChange = (id, value)=>{
          returnValueTovalueOnChange(id, value)
        }

      let elementreturnSelectTovalueOnChange = (id, select)=>{
          returnSelectTovalueOnChange(id, select)
        }


      let dataToMap = listData.map((value,index,arr) => {
        return (
          <List key={index}>
            <Element
            id = {value.id}
            initValue = {value.initValue}
            initSelect = {value.initSelect}
            initOfremoveTheElement = {initRemoveTheElement}
            elementreturnValueTovalueOnChange = {elementreturnValueTovalueOnChange}
            elementreturnSelectTovalueOnChange = {elementreturnSelectTovalueOnChange}
            />
          </List>
        )
      })

        return (
              <div className="container">
              {dataToMap}
            </div>
        );
    }

}

export default Elements;
