// OpenSkinJS v2.1.1 (c) HeyItsShuga. Licensed under MIT.
console.log("%c[OpenSkin] %c Loading application \"" + openskin + "\"", "color:#358311", "color: gray");

function sanLite(str) {
  str = String(str).replace(/undefined|nil|null|\<|\>|\{|\}/g,"");
  return str;
}
function sanCustom(str) {
  str = String(str).replace(/undefined|nil|null/g,"");
  return str;
}

var OpenSkin_jsonContents;
var OpenSkin_jsonAppName = openskin;
function OpenSkin() {
  this.application = openskin

  // default: remote JSON file
  this.get = function(url, loadAfter) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.send();
    request.onload = function() {
        request.onerror = function() {
            throw "Invalid URL."
        }
        if (request.status >= 200 && request.status < 400) {
            OpenSkin_jsonContents = JSON.parse(request.responseText);
        } else {
            throw "Can't access data."
        }
        if(loadAfter == true) {
            OpenSkin.load()
        }
        return OpenSkin_jsonContents;
        }
    }
    
  
   // import via remote JSON file
   // duplicate of this.get so removing!
    this.getJSON = function(url, loadAfter) { 
        this.get(url, loadAfter);
        return OpenSkin_jsonContents;
    }
   this.getStr = function(str, loadAfter) {
     OpenSkin_jsonContents = JSON.parse(str);
     if(loadAfter == true) {
        this.load()
     }
     return OpenSkin_jsonContents;
    }
   // import via object
   this.getObj = function(str, loadAfter) {
    OpenSkin_jsonContents = str;
    if(loadAfter == true) {
        this.load()
    }
    return OpenSkin_jsonContents;
   }

  this.load = function() {
    var element = "";

    element += ".navbar, .navbar-inner, .searchbar, .ios .navbar .title {" + sanLite(OpenSkin_jsonContents.styles[0].header) + ";" + "}";
    element += ".md .navbar-inner, .md {" + sanLite(OpenSkin_jsonContents.styles[0].mdHeader) + ";" + "}";
    element += ".md .tabBar{" + sanLite(OpenSkin_jsonContents.styles[0].navbar) + ";" + "}";
    element += ".ios .icon:not(.fab-ico):not(.ico-colored-bkg), .ico-white-bkg {" + sanLite(OpenSkin_jsonContents.styles[0].iOSicon) + ";" + "}";
    element += ".md .icon:not(.fab-ico):not(.ico-white-bkg):not(.color-black):not(.actions-button-media>i), .ico-colored-bkg {" + sanLite(OpenSkin_jsonContents.styles[0].MDicon) + ";" + "}";

    element += ".md .tab-link:not(.tab-link-active) :not(.fab-ico), .md .tab-link:not(.tab-link-active) :not(.fab-ico) > i {" + sanLite(OpenSkin_jsonContents.styles[0].MDoutOfFocus) + ";" + "}";
    element += ".ios .tab-link:not(.tab-link-active) :not(.fab-ico), .ios .tab-link:not(.tab-link-active) :not(.fab-ico) > i {" + sanLite(OpenSkin_jsonContents.styles[0].iOSoutOfFocus) + ";" + "}";
    element += ".md .tab-link-active > span {" + sanLite(OpenSkin_jsonContents.styles[0].MDinFocus) + ";" + "}";
    element += ".ios .tab-link-active > span {" + sanLite(OpenSkin_jsonContents.styles[0].iOSinFocus) + ";" + "}";
    element += ".md .color-theme-red .toggle input[type=checkbox]:checked+.toggle-icon:after {" + sanLite(OpenSkin_jsonContents.styles[0].MDtoggleHead) + ";" + "}";
    element += ".md .color-theme-red .toggle input[type=checkbox]:checked+.toggle-icon {" + sanLite(OpenSkin_jsonContents.styles[0].MDtoggleBody) + ";" + "}";
    element += ".ios .toggle-icon:after {" + sanLite(OpenSkin_jsonContents.styles[0].iOStoggleHead) + ";" + "}";
    element += ".ios .toggle input[type=checkbox]:checked+.toggle-icon {" + sanLite(OpenSkin_jsonContents.styles[0].iOStoggleBody) + ";" + "}";
    element += ".fabCircle {" + sanLite(OpenSkin_jsonContents.styles[0].fab) + ";" + "}";
    element += ".back > span, .back > div, .ios .searchbar-disable-button {" + sanLite(OpenSkin_jsonContents.styles[0].tint) + ";" + "}";
    try { // Back arrow: create svg to go with given color value. Potentially unstable.
        color = sanLite(OpenSkin_jsonContents.styles[0].tint).replace("!important","").replace(" ","");
        color = /color:?(.*)(;|$)?/g.exec(color)[1].replace(";","");
        svgCode = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 20\"><path d=\"M10,0l2,2l-8,8l8,8l-2,2L0,10L10,0z\" fill=\"" + color + "\"/></svg>";
        element += ".ios i.icon.icon-back {background-image: url('data:image/svg+xml;utf8," + svgCode + "')!important}";
    } catch(err) {}

    element += "body, text.card-footer-inner-text, div.card-footer-inner-text {" + sanLite(OpenSkin_jsonContents.styles[0].label) + "}";
    element += ".list-button, .button, .active {" + sanLite(OpenSkin_jsonContents.styles[0].button) + "}";
    element += ".modal {" + sanLite(OpenSkin_jsonContents.styles[0].alert) + "}";
    element += ".page-content, .card, #games-list>.row {" + sanLite(OpenSkin_jsonContents.styles[0].containerBackground) + "}";
    element += ".item-content, .inset>ul>div>div>a>.card, .swiper-slide, .list, .inset, .list.inset>ul>div.row, .div.block.inset {" + sanLite(OpenSkin_jsonContents.styles[0].cell) + "}";
    element += ".item-after {" + sanLite(OpenSkin_jsonContents.styles[0].cellChevron) + "}";
    element += ".toolbar {" + sanLite(OpenSkin_jsonContents.styles[0].toolbar) + "}";
    element += ".block-title {" + sanLite(OpenSkin_jsonContents.styles[0].cellGroupTitle) + "}";
    // iGBA methods are officially in the OpenSkin spec.
    element += "#emulatorPopup, .popup-emu, .emulator-view {" + sanLite(OpenSkin_jsonContents.styles[0].emulatorBackground) + ";" + "}";
    element += "#emulatorTarget {" + sanLite(OpenSkin_jsonContents.styles[0].emulatorScreen) + ";" + "}";
    element += "#triggerL, .button-l {" + sanLite(OpenSkin_jsonContents.styles[0].triggerL) + "}";
    element += "#triggerR, .button-r {" + sanLite(OpenSkin_jsonContents.styles[0].triggerR) + "}";
    element += "#center, .arrow-button-centerr {" + sanLite(OpenSkin_jsonContents.styles[0].center) + "}";
    element += "#right, .arrow-button-right {" + sanLite(OpenSkin_jsonContents.styles[0].right) + "}";
    element += "#left, .arrow-button-left {" + sanLite(OpenSkin_jsonContents.styles[0].left) + "}";
    element += "#up, .arrow-button-up {" + sanLite(OpenSkin_jsonContents.styles[0].up) + "}";
    element += "#down, .arrow-button-down {" + sanLite(OpenSkin_jsonContents.styles[0].down) + "}";
    element += "#aBtn, .button-a {" + sanLite(OpenSkin_jsonContents.styles[0].aBtn) + "}";
    element += "#bBtn, .button-b {" + sanLite(OpenSkin_jsonContents.styles[0].bBtn) + "}";
    element += "#startbtn, .menu-button-start {" + sanLite(OpenSkin_jsonContents.styles[0].startBtn) + "}";
    element += "#select, .menu-button-select {" + sanLite(OpenSkin_jsonContents.styles[0].select) + "}";
    element += ".ios .searchbar, .searchbar-input-wrap>input {" + sanLite(OpenSkin_jsonContents.styles[0].searchbar) + "}";
    element += ".ios.navbar:after, .ios .subnavbar:after, .ios .toolbar:before, .ios .list:before, .ios list ul:before, .ios .list:after, .ios .list ul:after, .ios .searchbar:after, .ios .list .item-inner:after .ios .list .list-button:after, .ios .list. item-divider:after, .ios .list .list-group-title:after, .ios .list .list-group-title:after {" + sanLite(OpenSkin_jsonContents.styles[0].hairlines) + "}";

    if(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName]) {
      element += ".navbar, .navbar-inner, .searchbar, .ios .navbar .title {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].header) + ";" + "}";
      element += ".md .navbar-inner, .md {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].mdHeader) + ";" + "}";
      element += ".md .tabBar {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].navbar) + ";" + "}";
      element += ".ios .icon:not(.fab-ico):not(.ico-colored-bkg), .ico-white-bkg  {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].iOSicon) + ";" + "}";
      element += ".md .icon:not(.fab-ico):not(.ico-white-bkg):not(.color-black):not(.actions-button-media>i), .ico-colored-bkg   {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].MDicon) + ";" + "}";

      element += ".md .tab-link:not(.tab-link-active) :not(.fab-ico), .md .tab-link:not(.tab-link-active) :not(.fab-ico) > i {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].MDoutOfFocus) + ";" + "}";
      element += ".ios .tab-link:not(.tab-link-active) :not(.fab-ico), .ios .tab-link:not(.tab-link-active) :not(.fab-ico) > i {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].iOSoutOfFocus) + ";" + "}";
      element += ".md .tab-link-active > span {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].MDinFocus) + ";" + "}";
      element += ".ios .tab-link-active > span {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].iOSinFocus) + ";" + "}";
      element += ".md .color-theme-red .toggle input[type=checkbox]:checked+.toggle-icon:after {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].MDtoggleHead) + ";" + "}";
      element += ".md .color-theme-red .toggle input[type=checkbox]:checked+.toggle-icon {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].MDtoggleBody) + ";" + "}";
      element += ".ios .toggle-icon:after {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].iOStoggleHead) + ";" + "}";
      element += ".ios .toggle input[type=checkbox]:checked+.toggle-icon {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].iOStoggleBody) + ";" + "}";
      element += ".fabCircle {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].fab) + ";" + "}";
      element += ".back > span, .back > div, .ios .searchbar-disable-button {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].tint) + ";" + "}";
      try { // Back arrow: create svg to go with given color value. Potentially unstable.
         color = sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].tint).replace("!important","").replace(" ","");
         color = /color:?(.*)(;|$)?/g.exec(color)[1].replace(";","");
         svgCode = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 12 20\"><path d=\"M10,0l2,2l-8,8l8,8l-2,2L0,10L10,0z\" fill=\"" + color + "\"/></svg>";
         element += ".ios i.icon.icon-back {background-image: url('data:image/svg+xml;utf8," + svgCode + "')!important}";
      } catch(err) {}

      element += "body, text.card-footer-inner-text, div.card-footer-inner-text {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].label) + "}";
      element += ".list-button, .button, .active {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].button) + "}";
      element += ".modal {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].alert) + "}";
      element += ".page-content, .card, #games-list>.row {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].containerBackground) + "}";
      element += ".item-content, .inset>ul>div>div>a>.card, .swiper-slide, .list, .inset, .list.inset>ul>div.row, .div.block.inset {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].cell) + "}";
      element += ".item-after {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].cellChevron) + "}";
      element += ".toolbar {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].toolbar) + "}";
      element += ".block-title {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].cellGroupTitle) + "}";
      // iGBA methods are officially in the OpenSkin spec.
      element += "#emulatorPopup, .popup {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].emulatorBackground) + ";" + "}";
      element += "#emulator_target {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].emulatorScreen) + ";" + "}";
      element += "#triggerL, .button-l {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].triggerL) + "}";
      element += "#triggerR, .button-r {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].triggerR) + "}";
      element += "#center, .arrow-button-centerr {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].center) + "}";
      element += "#right, .arrow-button-right {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].right) + "}";
      element += "#left, .arrow-button-left {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].left) + "}";
      element += "#up, .arrow-button-up {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].up) + "}";
      element += "#down, .arrow-button-down {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].down) + "}";
      element += "#aBtn, .button-a {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].aBtn) + "}";
      element += "#bBtn, .button-b {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].bBtn) + "}";
      element += "#startbtn, .menu-button-start {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].startBtn) + "}";
      element += "#select, .menu-button-select {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].select) + "}";
      element += ".ios .searchbar, .searchbar-input-wrap>input {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].searchbar) + "}";
      element += ".ios.navbar:after, .ios .subnavbar:after, .ios .toolbar:before, .ios .list:before, .ios list ul:before, .ios .list:after, .ios .list ul:after, .ios .searchbar:after, .ios .list .item-inner:after .ios .list .list-button:after, .ios .list. item-divider:after, .ios .list .list-group-title:after, .ios .list .list-group-title:after {" + sanLite(OpenSkin_jsonContents.styles[0][OpenSkin_jsonAppName][0].hairlines) + "}";

    }

    // Custom CSS
    try {
      element += sanCustom(OpenSkin_jsonContents.styles[0].custom[0][OpenSkin_jsonAppName])
    } catch(n) {}

    if(document.getElementById("openskin_stylesheet")) {
      document.getElementById("openskin_stylesheet").innerHTML = element;
    } else {
      var style = document.createElement("style");
      style.id = "openskin_stylesheet";
      style.innerHTML = element;
      document.head.appendChild(style);
    }

    return true
  }
  this.skin = function(url) {
      return OpenSkin_jsonContents;
  }
}

var OpenSkin = new OpenSkin();
