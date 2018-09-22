import React, { Component } from 'react';
import {Button} from 'material-ui';
import Popup from "reactjs-popup";
import PopupClass from "./components/popup";
import PopupButton from "./components/buttons/button-popup";

import './App.css';


class App extends Component {

  constructor() {
      super();
      this.state = {
        value: "",
        popupIsOpen: false,
        listData: [],
        listStore: [],
        listStoreFromDataToSave: [],
      }
  }

  openPopup = ()=> {
    this.setState({
      popupIsOpen: !this.state.popupIsOpen,
    })
  }



  initStateOfdatas = ()=> {
    const newListDataInitStateOfdatas = [...this.state.listData]
    this.setState({
      listStore: newListDataInitStateOfdatas,
      listStoreFromDataToSave: newListDataInitStateOfdatas,
    })
    console.log("initStateOfdatas init");
  }

  closeWithoutSave = ()=>{
    const newlistStoreFromDataToSaveCloseWithoutSave = [...this.state.listStoreFromDataToSave]
    this.setState({
      listData: newlistStoreFromDataToSaveCloseWithoutSave,

    })
    console.log("closeWithoutSave");
    console.log(this.state.listData);
  }


  closeAndSave = () => {
    const newListStoreCloseAndSave = [...this.state.listStore]
    this.setState({
      listData: newListStoreCloseAndSave,

    })
    console.log("closeAndSave");
    console.log(this.state.listData);
  }


  removeTheElement = (idToRemove) => {
      let newArrStore = [...this.state.listStore]
      newArrStore.forEach((value,index,arr)=>{

        if (value.id == idToRemove) {
          newArrStore.splice(index, 1)
        }
      })
      this.setState({
        listStore: newArrStore,
      })
    }


    valueOnChange = (id , value) => {
    let newlistStore =  [...this.state.listStore]

    newlistStore.forEach((element)=>{
      if(element.id == id){
        element.initValue = value
        console.log(id, value);
      }
    })
      this.setState({
        listStore: newlistStore,
      })
    }



    selectOnChange = (id , select) => {
    let newlistStore =  [...this.state.listStore]

    newlistStore.forEach((element)=>{
      if(element.id == id){
        element.initSelect = select
        console.log(id, select);
      }
    })
      this.setState({
        listStore: newlistStore,
      })
    }





    addNewElement = () => {
      let newListData = [...this.state.listStore];
      newListData.push({
        id: Math.random()*100000000000000000,
        initValue: "",
        initSelect: "",
      })
      this.setState({
        listStore: newListData,

      })
      console.log("listStore was added");
    }


  render() {

    console.log(this.state.listData , "listData");
    console.log(this.state.listStore, "listStore");
    console.log(this.state.listStoreFromDataToSave, "listStoreFromDataToSave");

    if (this.state.popupIsOpen) {
        return (
          <React.Fragment>
            <PopupClass
            changePopupShowOrHide = {this.openPopup}
            closeWithoutSave = {this.closeWithoutSave}
            closeAndSave = {this.closeAndSave}
            removeTheElement = {this.removeTheElement}
            valueOnChange = {this.valueOnChange}
            selectOnChange = {this.selectOnChange}
            addNewElement = {this.addNewElement}
            dataLists = {this.state.listStore}
            valueOnChange = {this.valueOnChange}
            />


          </React.Fragment>
        )
    }

      return(
        <div className="App">
          <PopupButton
            changePopupShowOrHide = {this.openPopup}
            initStateOfdatas = {this.initStateOfdatas}
          />

        </div>
      );
    }
}

export default App;
