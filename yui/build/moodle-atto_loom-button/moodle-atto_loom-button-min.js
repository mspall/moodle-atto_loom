YUI.add("moodle-atto_loom-button",function(o,t){o.namespace("M.atto_loom").Button=o.Base.create("button",o.M.editor_atto.EditorPlugin,[],{initializer:function(){this.addButton({callback:this._setupLoom,icon:"bw-icon",iconComponent:"atto_loom",title:"record"})},_setupLoom:function(){window.global=window,require(["atto_loom/index"],t=>{t.isSupported().then(o=>this._checkSupport(t,o))})},_checkSupport:function(o,t){var{supported:t,error:r}=t;t?(t=this.get("publicappid"))?o.setup({publicAppId:t,config:{styles:{fontFamily:this.get("fontfamily"),fontUnitSize:this.get("fontunitsize"),recordButtonColor:this.get("recordbuttoncolor"),recordButtonHoverColor:this.get("recordbuttonhovercolor"),recordButtonActiveColor:this.get("recordbuttonactivecolor"),primaryColor:this.get("primarycolor"),primaryHoverColor:this.get("primaryhovercolor"),primaryActiveColor:this.get("primaryactivecolor")}}}).then(o=>this._showLoomDialogue(o)):this._showErrorDialogue("no-publicappid"):this._showErrorDialogue(r)},_showLoomDialogue:function(o){var t=document.createElement("button"),o=o.configureButton({element:t});o.on("insert-click",async o=>this._insertEmbedUrl(o.embedUrl)),t.click()},_insertEmbedUrl:function(o){var t=this.get("host");t.focus(),t.insertContentAtFocusPoint(o.replace("embed","share"))},_showErrorDialogue:function(o){var t=this.getDialogue({width:500}),r="Error",e=o;o.includes("incompatible-browser")?(r=M.util.get_string("browsererror_title","atto_loom"),e=M.util.get_string("browsererror","atto_loom")):o.includes("no-publicappid")&&(r=M.util.get_string("nopublicappiderror_title","atto_loom"),e=M.util.get_string("nopublicappiderror","atto_loom")),t.set("headerContent",r),t.set("bodyContent",e),t.show()}},{ATTRS:{publicappid:{value:null},fontfamily:{value:null},fontunitsize:{value:null},recordbuttoncolor:{value:null},recordbuttonhovercolor:{value:null},recordbuttonactivecolor:{value:null},primarycolor:{value:null},primaryhovercolor:{value:null},primaryactivecolor:{value:null}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin","moodle-atto_loom-sdk"]});