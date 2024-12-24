sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
], function (Controller,MessageBox)  {
    "use strict";

    return Controller.extend("creatingvalidate.controller.View1", {
        onInit() {
        },

        onClick: function() {
             var username= this.getView().byId("idusername").getValue();
             var usernumber= this.getView().byId("idusernumber").getValue();
            if (username && usernumber){
                sap.m.MessageBox.success("this data is validate")
            }
            else{

                alert("Data is not validation")
            }

        }
    });
});