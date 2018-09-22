import React, { Component } from 'react';
import  ReactDOM from "react-dom";
import Elements from "./elements/elements";
import Header from "./layouts/header"
import ButtonSave from "./buttons/button-save"
import ButtonAdd from "./buttons/button-add"
import ButtonCancel from "./buttons/button-cansel"



 class PopupClass extends React.Component<{}, {}> {
    popup: HTMLElement;


    render() {

      const {
        changePopupShowOrHide,
        closeWithoutSave,
        closeAndSave,
        removeTheElement,
        valueOnChange,
        addNewElement,
        dataLists,
        selectOnChange
      } = this.props;


      let removeFromAppToPopup = (idToRemove)=>{

        removeTheElement(idToRemove)
      }


      let saveAndCose = () => {
        closeAndSave()
        changePopupShowOrHide()
      }



      let cancalAndCose = () => {
          closeWithoutSave()
          changePopupShowOrHide()
      }

      let returnValueTovalueOnChange = (id, value)=>{
        valueOnChange(id, value)
      }
      let returnSelectTovalueOnChange = (id, select)=>{
        selectOnChange(id, select)
      }

        return (

          <div className="wrapper">
            <Header
              changePopupShowOrHide = {changePopupShowOrHide}
            />
            <main>

            <Elements
              listData = {dataLists}
              removeElem = {removeFromAppToPopup}
              returnValueTovalueOnChange = {returnValueTovalueOnChange}
              returnSelectTovalueOnChange = {returnSelectTovalueOnChange}
              />

              <div className="add_elements">
              <ButtonAdd
                addNewElement={addNewElement}
              />
              </div>
            </main>
            <footer>
              <ButtonSave

                saveAndCose = {saveAndCose}
              />
              <ButtonCancel
              cancalAndCose={cancalAndCose}
              />

            </footer>
          </div>

        );
    }

}


export default PopupClass;
