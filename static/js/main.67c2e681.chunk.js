(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,,,function(e,t,n){e.exports=n(41)},,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(18),r=n.n(l),c=(n(26),n(27),function(){return o.a.createElement("div",{className:"header"},"Custom Page Creator")}),i=n(3),d=n(2),s=n(7),m=n(8),u=n(10),g=n(9),E=n(11),p=n(19),w=n.n(p),f=(n(30),function(e){var t=e.addRowClicked,n=e.addElementClicked;return o.a.createElement("div",{className:"toolbar"},o.a.createElement("div",{className:"options"},o.a.createElement("button",{className:"option",onClick:function(){return t()}},"Add Row"),o.a.createElement("button",{className:"option",onClick:function(){return n()}},"Add Element")))}),v=n(20),h="heading",C="image",b="empty",P=n(5),k=(n(36),n(16),function(e){var t=e.id,n=e.data,a=e.type,l=e.rowPos,r=e.columnPos;return o.a.createElement(L.Consumer,null,function(e){var c=e.editElementClicked,i=e.deleteElementClicked;return o.a.createElement("div",{className:"element heading"},o.a.createElement("div",{className:"element-options"},o.a.createElement(P.a,{onClick:function(){return c({id:t,data:n,type:a,rowPos:l,columnPos:r})},title:"Edit",icon:"edit"}),o.a.createElement(P.a,{onClick:function(){return i({id:t,data:n,type:a,rowPos:l,columnPos:r})},title:"Delete",icon:"trash"})),n)})}),D=(n(37),function(e){var t=e.id,n=e.data,a=e.type,l=e.rowPos,r=e.columnPos;return o.a.createElement(L.Consumer,null,function(e){var c=e.deleteElementClicked;return o.a.createElement("div",{className:"element image"},o.a.createElement("div",{className:"element-options"},o.a.createElement(P.a,{onClick:function(){return c({id:t,data:n,type:a,rowPos:l,columnPos:r})},title:"Delete",icon:"trash"})),o.a.createElement("img",{alt:"Img Element",src:n}))})}),A=function(e){var t=e.type;return o.a.createElement("div",null,"Unknown type ",t)},N=function(e){var t=e.rowPos,n=e.columnPos;return o.a.createElement(L.Consumer,null,function(e){var a=e.addElementClicked,l=e.elementDropped,r=e.elementIsDraggedOver,c=e.isElementDragged;return o.a.createElement("div",{className:"element empty ".concat(c?"element-dragged":""),onDrop:function(){return l({rowPos:t,columnPos:n})},onDragOver:function(e){return e.preventDefault()&&r({rowPos:t,columnPos:n})}},o.a.createElement("button",{onClick:function(){return a({rowPos:t,columnPos:n})}},c?"Drop here":"Add New Element"))})},O=function(e){var t=e.type;switch(t){case h:return o.a.createElement(k,e);case C:return o.a.createElement(D,e);case b:return o.a.createElement(N,e);default:return o.a.createElement(A,{type:t})}},y=(n(38),function(e){var t=e.column,n=Object(v.a)(e,["column"]);return o.a.createElement("div",{className:"column"},o.a.createElement(O,Object.assign({},n,t.element)))}),j=function(e){var t=e.handleClick;return o.a.createElement("div",{className:"row add-new-row"},o.a.createElement("button",{onClick:function(){return t()}},"Add new row"))},R=function(e){var t=e.row,n=e.pos;return o.a.createElement("div",{className:"row"},t.columns.map(function(e,t){return o.a.createElement(y,{columnPos:t,rowPos:n,column:e,key:e.id})}))},S=function(e){var t=e.rows,n=e.showAddRow;return o.a.createElement("div",{className:"rows"},t.length>0?t.map(function(e,t){return o.a.createElement(R,{row:e,pos:t,key:e.id})}):o.a.createElement(j,{handleClick:n}))},x=(n(17),function(e){var t=e.open,n=e.closeAddRow,a=e.addRowWithColumns;return o.a.createElement("div",{className:"sidebar add-row ".concat(t?"open":"")},o.a.createElement("div",{className:"close-btn",onClick:function(){return n()}},"X"),o.a.createElement("div",{className:"title"},"Add Row"),o.a.createElement("div",{className:"options"},o.a.createElement("div",{className:"option",onClick:function(){return a(1)}},"1 Column"),o.a.createElement("div",{className:"option",onClick:function(){return a(2)}},"2 Column"),o.a.createElement("div",{className:"option",onClick:function(){return a(3)}},"3 Column"),o.a.createElement("div",{className:"option",onClick:function(){return a(4)}},"4 Column"),o.a.createElement("div",{className:"option",onClick:function(){return a(5)}},"5 Column"),o.a.createElement("div",{className:"option",onClick:function(){return a(6)}},"6 Column")))}),I=(n(39),function(e){var t=e.open,n=e.closeAddElement,a=e.addHeading,l=e.addImage,r=e.elementDragged,c=e.dragEndHappened;return o.a.createElement("div",{className:"sidebar add-element ".concat(t?"open":"")},o.a.createElement("div",{className:"close-btn",onClick:function(){return n()}},"X"),o.a.createElement("div",{className:"title"},"Add Element"),o.a.createElement("div",{className:"options"},o.a.createElement("div",{draggable:!0,onDragStart:function(){return r(h)},onDragEnd:function(){return c()},className:"option",onClick:function(){return a()}},"Heading"),o.a.createElement("label",{draggable:!0,onDragStart:function(){return r(C)},onDragEnd:function(){return c()},htmlFor:"upload-image",className:"option"},"Image",o.a.createElement("input",{id:"upload-image",type:"file",accept:"image/x-png,image/gif,image/jpeg",onChange:function(e){return l(e.target.files)}}))))}),H=(n(40),function(e){var t=e.show,n=e.overlayClicked;return o.a.createElement("div",{onClick:function(){return n()},className:"overlay ".concat(t?"show":"")})}),T=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,l=new Array(a),r=0;r<a;r++)l[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={newData:null,sidebarOpen:!1},n.dataUpdated=function(e){n.setState({newData:e})},n.getTypeOfInput=function(){var e=n.state.newData;switch(n.props.elementToEdit.type){case h:return o.a.createElement("input",{className:"heading",type:"text",value:e,onChange:function(e){return n.dataUpdated(e.target.value)}});default:return""}},n.submitNewData=function(){var e=n.state.newData;n.props.onSubmit(e)},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.open,a=t.closeEditElement;return o.a.createElement("div",{className:"sidebar editing-element ".concat(n?"open":"")},o.a.createElement("div",{className:"close-btn",onClick:function(){return a()}},"X"),o.a.createElement("div",{className:"title"},"Editor"),n&&this.getTypeOfInput(),o.a.createElement("button",{className:"submit",onClick:function(){return e.submitNewData()}},"Submit"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=e.elementToEdit,a=e.open,o=t.sidebarOpen;return!a&&o?{newData:null,sidebarOpen:!1}:a&&!o?{newData:n.data,sidebarOpen:!0}:null}}]),t}(a.Component),F={border:"3px dashed",width:"calc(100% - 48px - 6px - 24px)",margin:"0 12px",padding:"24px",fontSize:"24px"},W=function(e){var t=e.elementDropped,n=e.elementIsDraggedOver;return o.a.createElement("div",{style:F,className:"drop-zone",onDrop:function(){return t({dropZone:!0})},onDragOver:function(e){return e.preventDefault()&&n({dropZone:!0})}},"Drop here to create a new row for the element")},U=function(){return w()()},X=function(){return{type:b}},Z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Heading";return{type:h,data:e}},z=function(e){return{type:C,data:e}},B=function(e){for(var t=[],n=0;n<e;n++){var a={id:U()};a.element=X(),t.push(a)}return t},J=function(e){return e.map(function(e){return{id:U(),element:e}})},L=o.a.createContext({addElementClicked:function(){}}),$=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(u.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(o)))).state={showAddRow:!1,showAddElement:!1,rows:[{id:1,columns:[{id:1,element:{type:h,data:"Hello world!"}}]}],addingElementAtPos:null,showEditingElement:!1,elementToEdit:null,elementDragged:null},n.toggleAddRow=function(){var e=n.state.showAddRow;n.setState({showAddRow:!e})},n.closeAddRow=function(){return n.setState({showAddRow:!1})},n.toggleAddElement=function(){var e=n.state.showAddElement;n.setState({showAddElement:!e})},n.closeAddElement=function(){return n.setState({showAddElement:!1}),!0},n.overlayClicked=function(){var e=n.state,t=e.showAddRow,a=e.showAddElement,o=e.showEditingElement;t&&n.toggleAddRow(),a&&n.toggleAddElement(),o&&n.toggleEditElement()},n.addRowWithColumns=function(e){console.log("add new row with columns --\x3e ",e),n.closeAddRow(),n.addNewRow({noOfColumns:e})},n.addNewRow=function(e){var t=e.noOfColumns,a=e.columnElements,o={id:U(),columns:a?J(a):B(t)},l=n.state.rows,r=[].concat(Object(d.a)(l),[o]);return n.setState({rows:r}),o.id},n.getFirstEmptyColumn=function(){for(var e=n.state.rows,t=0;t<e.length;t++)for(var a=e[t].columns,o=0;o<a.length;o++){if(a[o].element.type===b)return{rowPos:t,columnPos:o}}return{rowPos:null,columnPos:null}},n.addNewElement=function(e){var t=e.element,a=n.state.addingElementAtPos;if(a){console.log("adding element at pos --\x3e ",a);var o=a.rowPos,l=a.columnPos;n.addNewElementAtPos({rowPos:o,columnPos:l,element:t})}else{var r=[t];n.addNewRow({noOfColumns:1,columnElements:r})}},n.addNewElementAtPos=function(e){var t=e.rowPos,a=e.columnPos,o=e.element;if(-1!==t&&-1!==a){var l=n.state.rows,r=l[t],c=r.columns[a];console.log("row --\x3e ",r," column ",c);var s=Object(i.a)({},c,{element:o}),m=Object(i.a)({},r,{columns:[].concat(Object(d.a)(r.columns.slice(0,a)),[s],Object(d.a)(r.columns.slice(a+1)))}),u=[].concat(Object(d.a)(l.slice(0,t)),[m],Object(d.a)(l.slice(t+1)));n.setState({rows:u,addingElementAtPos:null})}else console.error("invalid position --\x3e ",t,a)},n.addHeading=function(){console.log("add new heading element");var e=Z();n.addNewElement({element:e})},n.addImage=function(e){if(console.log("add image --\x3e ",e),FileReader&&e&&e.length){var t=new FileReader;t.onload=function(){var e=t.result,a=z(e);n.addNewElement({element:a})},t.readAsDataURL(e[0])}},n.addElementClicked=function(e){var t=e.rowPos,a=e.columnPos;n.setState({addingElementAtPos:{rowPos:t,columnPos:a}},function(){return n.toggleAddElement()})},n.editElementClicked=function(e){var t=e.type,a=e.rowPos,o=e.columnPos,l=e.data;console.log("element clicked --\x3e ",t,l,a,o),n.setState({elementToEdit:e}),n.toggleEditElement()},n.updateElementData=function(e){var t=e.rowPos,a=e.columnPos,o=e.value,l=n.state.rows,r=l[t],c=r.columns,s=c[a],m=s.element,u=Object(i.a)({},m,{data:o}),g=Object(i.a)({},s,{element:u}),E=Object(i.a)({},r,{columns:[].concat(Object(d.a)(c.slice(0,a)),[g],Object(d.a)(c.slice(a+1)))}),p=[].concat(Object(d.a)(l.slice(0,t)),[E],Object(d.a)(l.slice(t+1)));n.setState({rows:p})},n.editElementSubmitted=function(e){console.log("data submit for edit element --\x3e ",e);var t=n.state.elementToEdit,a=t.type,o=t.columnPos,l=t.rowPos;switch(a){case h:n.updateElementData({columnPos:o,rowPos:l,value:e})}n.closeEditElement()},n.toggleEditElement=function(){var e=n.state.showEditingElement;n.setState({showEditingElement:!e})},n.closeEditElement=function(){return n.setState({showEditingElement:!1,elementToEdit:null})},n.deleteElementAtPos=function(e){var t=e.rowPos,a=e.columnPos;if(-1!==t&&-1!==a){var o=n.state.rows,l=o[t],r=l.columns[a],c=X(),s=Object(i.a)({},r,{element:c}),m=Object(i.a)({},l,{columns:[].concat(Object(d.a)(l.columns.slice(0,a)),[s],Object(d.a)(l.columns.slice(a+1)))}),u=[].concat(Object(d.a)(o.slice(0,t)),[m],Object(d.a)(o.slice(t+1)));n.setState({rows:u})}else console.error("invalid position --\x3e ",t,a)},n.deleteElementClicked=function(e){var t=e.rowPos,a=e.columnPos;console.log("delete element clicked --\x3e ",t,a),n.deleteElementAtPos({rowPos:t,columnPos:a})},n.elementDragged=function(e){console.log("element is being dragged --\x3e ",e),n.setState({elementDragged:e}),n.closeAddElement()},n.addDroppedElement=function(){switch(n.state.elementDragged){case h:n.addHeading();break;case C:console.log("added a new image"),n.refs.imageFileInput.click()}},n.elementDropped=function(e){var t=e.dropZone,a=e.rowPos,o=e.columnPos;t?n.addDroppedElement():a>=0&&o>=0&&(console.log("adding element at pos --\x3e ",a,o),n.setState({addingElementAtPos:e},function(){return n.addDroppedElement()}))},n.elementIsDraggedOver=function(e){e.rowPos,e.columnPos},n.dragEndHappened=function(){console.log("drag end happened, resetting element dragged var"),n.setState({elementDragged:null})},n}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.showAddRow,a=t.showAddElement,l=t.rows,r=t.showEditingElement,c=t.elementToEdit,i=t.elementDragged;return o.a.createElement(L.Provider,{value:{addElementClicked:this.addElementClicked,editElementClicked:this.editElementClicked,deleteElementClicked:this.deleteElementClicked,elementDropped:this.elementDropped,elementIsDraggedOver:this.elementIsDraggedOver,isElementDragged:!!i}},o.a.createElement("div",{className:"editor"},o.a.createElement(f,{addRowClicked:this.toggleAddRow,addElementClicked:this.toggleAddElement}),o.a.createElement(S,{rows:l,showAddRow:this.toggleAddRow}),o.a.createElement(x,{open:n,closeAddRow:this.toggleAddRow,addRowWithColumns:this.addRowWithColumns}),o.a.createElement(I,{open:a,closeAddElement:this.toggleAddElement,addHeading:function(){return e.closeAddElement()&&e.addHeading()},addImage:function(t){return e.closeAddElement()&&e.addImage(t)},elementDragged:this.elementDragged,dragEndHappened:this.dragEndHappened}),o.a.createElement(T,{open:r,elementToEdit:c,onSubmit:this.editElementSubmitted,closeEditElement:this.closeEditElement}),i&&o.a.createElement(W,{elementDropped:this.elementDropped,elementIsDraggedOver:this.elementIsDraggedOver}),o.a.createElement(H,{show:n||a||r,overlayClicked:function(){return e.overlayClicked()}}),o.a.createElement("input",{style:{display:"none"},ref:"imageFileInput",id:"upload-image",type:"file",accept:"image/x-png,image/gif,image/jpeg",onChange:function(t){return e.addImage(t.target.files)}})))}}]),t}(a.Component),q=n(6),G=n(12);q.b.add(G.a,G.b);var K=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(c,null),o.a.createElement($,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(K,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[21,1,2]]]);
//# sourceMappingURL=main.67c2e681.chunk.js.map