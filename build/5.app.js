webpackJsonp([5],{425:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),a=r(o),i=n(23),s=a["default"].createClass({displayName:"Notifications",getInitialState:function(){return{alertVisibleA:!0,alertVisibleB:!0,alertVisibleC:!0,alertVisibleD:!0,showModal:!1}},close:function(){this.setState({showModal:!1})},open:function(){this.setState({showModal:!0})},render:function(){a["default"].createElement(i.Popover,{title:"popover"},"very popover. such engagement"),a["default"].createElement(i.Tooltip,null,"wow.");return a["default"].createElement("div",null,a["default"].createElement("div",{className:"row"},a["default"].createElement("div",{className:"col-lg-12"},a["default"].createElement(i.PageHeader,null,"Notifications"))),a["default"].createElement("div",{className:"row"},a["default"].createElement("div",{className:"col-lg-6"},a["default"].createElement(i.Panel,{header:a["default"].createElement("span",null,"Alert Styles")},a["default"].createElement(i.Alert,{bsStyle:"success"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",a["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."),a["default"].createElement(i.Alert,{bsStyle:"info"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",a["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."),a["default"].createElement(i.Alert,{bsStyle:"warning"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",a["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."),a["default"].createElement(i.Alert,{bsStyle:"danger"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",a["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."))),a["default"].createElement("div",{className:"col-lg-6"},a["default"].createElement(i.Panel,{header:a["default"].createElement("span",null,"Dismissable Alerts")},this.state.alertVisibleA?a["default"].createElement(i.Alert,{bsStyle:"success",onDismiss:this.handleAlertDismiss.bind(this,"A")},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",a["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."):null,this.state.alertVisibleB?a["default"].createElement(i.Alert,{bsStyle:"info",onDismiss:this.handleAlertDismiss.bind(this,"B")},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",a["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."):null,this.state.alertVisibleC?a["default"].createElement(i.Alert,{bsStyle:"warning",onDismiss:this.handleAlertDismiss.bind(this,"C")},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",a["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."):null,this.state.alertVisibleD?a["default"].createElement(i.Alert,{bsStyle:"danger",onDismiss:this.handleAlertDismiss.bind(this,"D")},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",a["default"].createElement("a",{href:"javascript:void(0)",className:"alert-link"},"Alert Link"),"."):null))),a["default"].createElement("div",{className:"row"},a["default"].createElement("div",{className:"col-lg-6"},a["default"].createElement(i.Panel,{header:a["default"].createElement("span",null,"Modals")},a["default"].createElement(i.Button,{bsStyle:"primary",bsSize:"large",onClick:this.open},"Launch Demo Modal"),a["default"].createElement(i.Modal,{show:this.state.showModal,onHide:this.close},a["default"].createElement(i.Modal.Header,{closeButton:!0},a["default"].createElement(i.Modal.Title,null,"Modal Title")),a["default"].createElement(i.Modal.Body,null,a["default"].createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),a["default"].createElement(i.Modal.Footer,null,a["default"].createElement(i.Button,{onClick:this.close},"Close"),a["default"].createElement(i.Button,{bsStyle:"primary"}," Save changes"))))),a["default"].createElement("div",{className:"col-lg-6"},a["default"].createElement(i.Panel,{header:a["default"].createElement("span",null,"Tooltips and Popovers")},a["default"].createElement("h4",null,"Tooltip Demo"),a["default"].createElement("div",null,a["default"].createElement(i.OverlayTrigger,{placement:"left",overlay:a["default"].createElement(i.Tooltip,null,"Check this out!")},a["default"].createElement(i.Button,null,"Tooltip on left")),a["default"].createElement(i.OverlayTrigger,{placement:"top",overlay:a["default"].createElement(i.Tooltip,null,"Check this out!")},a["default"].createElement(i.Button,null,"Tooltip on top")),a["default"].createElement(i.OverlayTrigger,{placement:"bottom",overlay:a["default"].createElement(i.Tooltip,null,"Check this out!")},a["default"].createElement(i.Button,null,"Tooltip on bottom")),a["default"].createElement(i.OverlayTrigger,{placement:"right",overlay:a["default"].createElement(i.Tooltip,null,"Check this out!")},a["default"].createElement(i.Button,null,"Tooltip on right"))),a["default"].createElement("br",null),a["default"].createElement("h4",null,"Clickable Popover Demo"),a["default"].createElement("div",null,a["default"].createElement(i.OverlayTrigger,{trigger:"click",placement:"left",overlay:a["default"].createElement(i.Popover,{title:"Popover left"},a["default"].createElement("strong",null,"Hello!")," Check this info.")},a["default"].createElement(i.Button,null,"Popover on left")),a["default"].createElement(i.OverlayTrigger,{trigger:"click",placement:"top",overlay:a["default"].createElement(i.Popover,{title:"Popover top"},a["default"].createElement("strong",null,"Hello!")," Check this info.")},a["default"].createElement(i.Button,null,"Popover on top")),a["default"].createElement(i.OverlayTrigger,{trigger:"click",placement:"bottom",overlay:a["default"].createElement(i.Popover,{title:"Popover bottom"},a["default"].createElement("strong",null,"Hello!")," Check this info.")},a["default"].createElement(i.Button,null,"Popover on bottom")),a["default"].createElement(i.OverlayTrigger,{trigger:"click",placement:"right",overlay:a["default"].createElement(i.Popover,{title:"Popover right"},a["default"].createElement("strong",null,"Hello!")," Check this info.")},a["default"].createElement(i.Button,null,"Popover on right")))))))},handleAlertDismiss:function(e){switch(e){case"A":this.setState({alertVisibleA:!1});break;case"B":this.setState({alertVisibleB:!1});break;case"C":this.setState({alertVisibleC:!1});break;case"D":this.setState({alertVisibleD:!1})}}});t["default"]=s,e.exports=t["default"]}});