(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"5pGK":function(e,t,n){e.exports={buttonGreen:"call-to-action-module--button-green--1tcEk",buttonBlack:"call-to-action-module--button-black--3WFHG"}},C6JS:function(e,t,n){"use strict";n("q1tI");var o=n("qKvR"),c=function(){return Object(o.c)("pre",null,"",Object(o.c)("span",{style:{color:"orange"}},"\n    @Override\n    public void "),Object(o.c)("span",{style:{color:"cornsilk"}},"initUI()")," {\n        \n      (...) ",Object(o.c)("span",{style:{color:"grey"}},"// Adding components to UI"),"\n      Label lblTitle = ",Object(o.c)("span",{style:{color:"orange"}},"new "),"Label(",Object(o.c)("span",{style:{color:"lightgreen"}},'"Coronavirus (COVID-19) charts and stats"'),", ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"CENTER"),");\n      lblTitle.setForeColor(Color.",Object(o.c)("span",{style:{color:"cornflowerblue"}},"WHITE "),");\n      lblTitle.setFont(Font.getFont(",Object(o.c)("span",{style:{color:"cornflowerblue"}},"true "),", ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"36 "),"));\n      add(lblTitle, ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"LEFT "),", ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"TOP "),"+ ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"this"),".fmH, ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"FILL"),", ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"PREFERRED"),");\n        \n      (...)\n      \n    }")};t.a=c,void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"TitleCorona",filename:"src/components/code-snippets/title-corona.js"}}),void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"TitleCorona",filename:"src/components/code-snippets/title-corona.js"}})},Yl76:function(e,t,n){e.exports={container:"code-corona-label-module--container--2-Zom",code:"code-corona-label-module--code--2K9bE",button:"code-corona-label-module--button--3t74O"}},ZXdF:function(e,t,n){"use strict";n("q1tI");var o=n("5pGK"),c=n.n(o),r=n("qKvR"),a=function(e){var t,n=e.color,o=e.text,a=e.path;return Object(r.c)("div",null,Object(r.c)("a",((t={href:""}).href=a,t),"green"===n?Object(r.c)("button",{className:c.a.buttonGreen},o):Object(r.c)("button",{className:c.a.buttonBlack},o)))};t.a=a,void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"TCButton",filename:"src/components/button.js"}}),void 0!==a&&a&&a===Object(a)&&Object.isExtensible(a)&&!a.hasOwnProperty("__filemeta")&&Object.defineProperty(a,"__filemeta",{configurable:!0,value:{name:"TCButton",filename:"src/components/button.js"}})},gX5E:function(e,t,n){"use strict";n.r(t);n("q1tI");var o=n("C6JS"),c=(n("hfiL"),n("pRzQ"),n("ZXdF")),r=n("Yl76"),a=n.n(r),l=n("qKvR"),s=function(){return Object(l.c)("div",{className:a.a.container},Object(l.c)("div",{className:a.a.code},Object(l.c)(o.a,null)),Object(l.c)("div",{className:a.a.button},Object(l.c)(c.a,{color:"black",text:"BACK",path:"/easy-to-use"})))};t.default=s,void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"CodeCoronaLabel",filename:"src/pages/code-corona-label.js"}}),void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"CodeCoronaLabel",filename:"src/pages/code-corona-label.js"}})},hfiL:function(e,t,n){"use strict";n("q1tI");var o=n("qKvR"),c=function(){return Object(o.c)("pre",null,"",Object(o.c)("span",{style:{color:"orange"}},"\n    @Override\n    public void "),Object(o.c)("span",{style:{color:"cornsilk"}},"initUI()")," {\n        \n      (...) ",Object(o.c)("span",{style:{color:"grey"}},"// Adding components to UI"),"\n\n      Button btnStartStop = ",Object(o.c)("span",{style:{color:"orange"}},"new "),"Button(",Object(o.c)("span",{style:{color:"lightgreen"}},'"Start"'),");\n      ",Object(o.c)("span",{style:{color:"grey"}},"// Adding listener to start or stop the animation"),"\n      btnStartStop.addPressListener(e ",Object(o.c)("span",{style:{color:"orange"}},"-> "),"{\n        ",Object(o.c)("span",{style:{color:"orange"}},"if ")," (btnStartStop.getText().equals(",Object(o.c)("span",{style:{color:"lightgreen"}},'"Start"'),")) {\n          restartAnimation();\n          btnStartStop.setText(",Object(o.c)("span",{style:{color:"lightgreen"}},'"Stop"'),");\n        } ",Object(o.c)("span",{style:{color:"orange"}},"else "),"{\n          MainWindow.getMainWindow().removeUpdateListener(updateListener);\n          btnStartStop.setText(",Object(o.c)("span",{style:{color:"lightgreen"}},'"Start"'),");\n        }\n      });\n\n      (...)\n\n      add(btnStartStop, ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"LEFT "),"+ ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"this"),".fmH, ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"AFTER "),"+ ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"this"),".fmH);\n        \n      (...)\n      \n    }")};t.a=c,void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"ButtonCorona",filename:"src/components/code-snippets/button-corona.js"}}),void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"ButtonCorona",filename:"src/components/code-snippets/button-corona.js"}})},pRzQ:function(e,t,n){"use strict";n("q1tI");var o=n("qKvR"),c=function(){return Object(o.c)("pre",null,Object(o.c)("span",{style:{color:"orange"}},"\n    private void "),Object(o.c)("span",{style:{color:"cornsilk"}},"fillData()")," {\n\n        confirmedList.clear();\n        recoveredList.clear();\n        deathsList.clear();\n        ",Object(o.c)("span",{style:{color:"grey"}},"\n        // Getting the information and filling the lists used to fill the CoronaChart"),Object(o.c)("span",{style:{color:"orange"}},"\n        if "),"(!offlineCheck.isChecked())\n            response = getCoronavirusData(\n              ",Object(o.c)("span",{style:{color:"lightgreen"}},'"https://coronavirus-map.p.rapidapi.com/v1/summary/latest"'),", \n              HttpStream.",Object(o.c)("span",{style:{color:"cornflowerblue"}},"GET"),"\n              );",Object(o.c)("span",{style:{color:"orange"}},"\n        else"),"\n            response = ",Object(o.c)("span",{style:{color:"orange"}},"new "),"JSONObject(",Object(o.c)("span",{style:{color:"orange"}},"new "),"String(Vm.getFile(",Object(o.c)("span",{style:{color:"lightgreen"}},'"request.json"'),")));\n\n        JSONObject data = response.getJSONObject(",Object(o.c)("span",{style:{color:"lightgreen"}},'"data"'),");\n        dates = data.names();\n        array = data.toJSONArray(dates);\n        ",Object(o.c)("span",{style:{color:"orange"}},"for "),"(",Object(o.c)("span",{style:{color:"orange"}},"int "),"i = ",Object(o.c)("span",{style:{color:"cornflowerblue"}},"0"),"; i < array.length(); i++) {\n            date = dates.getString(i);\n            item = array.getJSONObject(i);\n            MyDate myDate = ",Object(o.c)("span",{style:{color:"orange"}},"new "),"MyDate(Integer.parseInt(Convert.remove(date, ",Object(o.c)("span",{style:{color:"lightgreen"}},'"-"'),")));\n            confirmedList.add(\n              ",Object(o.c)("span",{style:{color:"orange"}},"new Data"),"<MyDate, Integer>(myDate, item.getInt(",Object(o.c)("span",{style:{color:"lightgreen"}},'"total_cases"'),"))\n              );\n            recoveredList.add(\n              ",Object(o.c)("span",{style:{color:"orange"}},"new Data"),"<MyDate, Integer>(myDate, item.getInt(",Object(o.c)("span",{style:{color:"lightgreen"}},'"recovered"'),"))\n              );\n            deathsList.add(",Object(o.c)("span",{style:{color:"orange"}},"new Data"),"<MyDate, Integer>(myDate, item.getInt(",Object(o.c)("span",{style:{color:"lightgreen"}},'"deaths"'),")));\n        }\n\n        ",Object(o.c)("span",{style:{color:"grey"}},"// Sorts the data by date;"),"\n        Collections.sort(confirmedList, ",Object(o.c)("span",{style:{color:"orange"}},"new Comparator"),"<",Object(o.c)("span",{style:{color:"orange"}},"Data"),"<MyDate, Integer>>() {\n                ",Object(o.c)("span",{style:{color:"orange"}},"\n            @Override\n            public int")," ",Object(o.c)("span",{style:{color:"cornsilk"}},"compare"),"(",Object(o.c)("span",{style:{color:"orange"}},"Data"),"<MyDate, Integer> ",Object(o.c)("span",{style:{color:"plum"}},"o1"),", ",Object(o.c)("span",{style:{color:"orange"}},"Data"),"<MyDate, Integer> ",Object(o.c)("span",{style:{color:"plum"}},"o2"),") {\n                ",Object(o.c)("span",{style:{color:"orange"}},"return")," o1.x.compareTo(o2.x);\n            }\n        });\n        Collections.sort(recoveredList, new Comparator<Data<MyDate, Integer>>() {\n        ",Object(o.c)("span",{style:{color:"orange"}},"\n            @Override\n            public int")," ",Object(o.c)("span",{style:{color:"cornsilk"}},"compare"),"(",Object(o.c)("span",{style:{color:"orange"}},"Data"),"<MyDate, Integer> ",Object(o.c)("span",{style:{color:"plum"}},"o1"),", ",Object(o.c)("span",{style:{color:"orange"}},"Data"),"<MyDate, Integer> ",Object(o.c)("span",{style:{color:"plum"}},"o2"),") {\n                ",Object(o.c)("span",{style:{color:"orange"}},"return")," o1.x.compareTo(o2.x);\n            }\n        });\n        Collections.sort(deathsList, new Comparator<Data<MyDate, Integer>>() {\n        ",Object(o.c)("span",{style:{color:"orange"}},"\n            @Override\n            public int")," ",Object(o.c)("span",{style:{color:"cornsilk"}},"compare"),"(",Object(o.c)("span",{style:{color:"orange"}},"Data"),"<MyDate, Integer> ",Object(o.c)("span",{style:{color:"plum"}},"o1"),", ",Object(o.c)("span",{style:{color:"orange"}},"Data"),"<MyDate, Integer> ",Object(o.c)("span",{style:{color:"plum"}},"o2"),") {\n                ",Object(o.c)("span",{style:{color:"orange"}},"return")," o1.x.compareTo(o2.x);\n            }\n        });\n    }\n    ")};t.a=c,void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"ImportCorona",filename:"src/components/code-snippets/import-corona.js"}}),void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"ImportCorona",filename:"src/components/code-snippets/import-corona.js"}})}}]);
//# sourceMappingURL=component---src-pages-code-corona-label-js-40526ae8b6610a0ff1b7.js.map