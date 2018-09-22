import React, { Component } from 'react';
import  ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Close from "@material-ui/icons/Close"

 class Element extends React.Component {



    render() {
      const {
          id,
         initOfremoveTheElement,
         initSelect,
         initValue,
         elementreturnValueTovalueOnChange,
         elementreturnSelectTovalueOnChange,
       } = this.props;





        let selectOnChange = (event) => {
          elementreturnSelectTovalueOnChange(id, event.target.value)
        }


       let valueOnChange = (event) => {

          elementreturnValueTovalueOnChange(id, event.target.value)
         }


      const styles = {
        root: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        formControl: {
          minWidth: 120,
        },
      };



        return (

            <div className="">
              <FormControl  style={{marginRight: 10,}}>
              <Select
                  native
                  onChange={selectOnChange}
                  value= {initSelect}
                >
                <option value={1}>Primus</option>
                <option value={2}>Twin</option>
                <option value={3}>Tripple</option>
                <option value={4}>Quadro</option>
              </Select>
            </FormControl>

            <Input style={{width: 50,}}

            type="number"
            placeholder=""
            className=""
            value={
              initValue
              }

            onChange={valueOnChange}
            inputProps={{
              'aria-label': 'Description',
            }}/>

          <Tooltip title="Delete">
              <IconButton color="secondary"  aria-label="Add an alarm" style={{ padding: 0, margin: 5,}}>
              <Close
              onClick={()=>{initOfremoveTheElement(id)}}
              />
            </IconButton>
          </Tooltip>

        </div>
      );
    }

}

export default Element;
