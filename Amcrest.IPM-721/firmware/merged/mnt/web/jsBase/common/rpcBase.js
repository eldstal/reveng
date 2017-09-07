!function(a){define(function(require,b,c){function d(b,c){var d={},b=b;this.instance=function(e,f){var g=k.getSession(),h=JSON.stringify(a.extend(e,f));return d[g]&&d[g][h]&&"rejected"!==d[g][h].state()&&c!==!1?d[g][h]:d[g]?d[g][h]=k.send(b,e,f):(d={},d[g]={},d[g][h]=k.send(b,e,f))}}function e(){return m}function f(a){m=a}function g(b,c,d){return a.extend({method:b,params:c||null,id:l++,session:e()},d)}function h(b,c,d){return void 0==d&&(d=!0),a.Deferred(function(e){a.ajax({type:"POST",url:c||"/RPC2",data:i.encryptionConfig(JSON.stringify(b)),dataType:"json",jsonp:!1,async:d}).done(function(a){a.result?e.resolve(a):e.reject(a)}).fail(e.reject)}).promise()}var i=require("common/common"),j=i.Cookie,k=c.exports={},l=1,m=0;k.getSession=e,k.Global={firstLogin:function(b,c){var d={method:"global.login",params:a.extend({userName:b,password:"",clientType:"Web3.0"},c),id:l++};return h(d,"/RPC2_Login").always(function(a){f(a.session)})},secondLogin:function(b,c,d){return h(g("global.login",a.extend({userName:b,password:c,clientType:"Web3.0"},d)),"/RPC2_Login").done(function(){j.set("DhWebClientSessionID",e(),{path:"/"}),j.set("username",b,{path:"/",expires:30}),i.setSession(e())})},logout:function(a){return h(g("global.logout"),null,a)},keepAlive:function(a){return h(g("global.keepAlive",{timeout:a||300})).then(function(a){return a.params.timeout})},getCurrentTime:function(){return h(g("global.getCurrentTime")).then(function(b){return"string"===a.type(b.result)?b.result:b.params.time})},setCurrentTime:function(a,b){return h(g("global.setCurrentTime",{time:a,tolerance:b}))}},k.ConfigManager=function(){function b(b,c,d){void 0==d&&(d=!1);var e={};return"array"===a.type(b)?(e=[],a.each(b,function(b,f){var g={name:f};"array"===a.type(c)?(g.channel=c[b],g.onlyLocal=d):"number"===a.type(c)&&(g.channel=c,g.onlyLocal=d),e.push(g)})):"array"===a.type(c)?(e=[],a.each(c,function(a){e.push({name:b,channel:a,onlyLocal:d})})):(e={name:b},"number"===a.type(c)&&(e.channel=c,e.onlyLocal=d)),e}function c(b,c,d,e){var f={};return"array"===a.type(b)?(f=[],a.each(b,function(b,g){var h={name:g,table:c[b],options:e||[]};"array"===a.type(d)?h.channel=d[b]:"number"===a.type(d)&&(h.channel=d),f.push(h)})):"array"===a.type(d)?(f=[],a.each(d,function(a,d){f.push({name:b,table:c[a],channel:d,options:e||[]})})):(f={name:b,table:c,options:e||[]},"number"===a.type(d)&&(f.channel=d)),f}var d={};return d.getConfig=function(c,d,e){return k.send("configManager.getConfig",b(c,d,e)).then(function(b){return a.isArray(c)?b.params:b.params.table})},d.setConfig=function(b,d,e,f){return k.send("configManager.setConfig",c(b,d,e,f)).then(function(c){return a.isArray(b)?c.params:c.params.options})},d.getDefault=function(c,d){return k.send("configManager.getDefault",b(c,d)).then(function(b){return a.isArray(c)?b.params:b.params.table})},d.setTemporaryConfig=function(b,d,e,f){return k.send("configManager.setTemporaryConfig",c(b,d,e,f)).then(function(c){return a.isArray(b)?c.params:c.params.options})},d.restoreTemporaryConfig=function(c,d){return k.send("configManager.restoreTemporaryConfig",b(c,d)).then(function(b){return a.isArray(c)?b.params:b.params.options})},d.restore=function(a,b){return k.send("configManager.restore",{names:a,options:b||[]}).then(function(a){return a.params.options})},d.restoreExcept=function(a,b){return k.send("configManager.restoreExcept",{names:a,options:b}).then(function(a){return a.params.options})},d.deleteFile=function(){return k.send("configManager.deleteFile")},d.setChnlConfig=function(a,b,c,d){return d=d||[],k.send("configManager.setChannelConfig",{name:a,table:b,channels:c,options:d}).then(function(a){return a.params.options||[]})},d}(),k.VideoStatServer=function(){var a={};return d.call(a,"videoStatServer.factory.instance"),a.clearSectionStat=function(b){return a.instance({channel:b||0}).then(function(a){return k.send("videoStatServer.clearSectionStat",void 0,{object:a.result})})},a.startFind=function(b,c){return a.instance({channel:c||0}).then(function(a){return k.send("videoStatServer.startFind",{condition:b},{object:a.result}).then(function(a){return a.params})})},a.doFind=function(b,c,d,e){return a.instance({channel:e||0}).then(function(a){return k.send("videoStatServer.doFind",{token:b,beginNumber:c,count:d},{object:a.result}).then(function(a){return a.params})})},a.stopFind=function(b,c){return a.instance({channel:c||0}).then(function(a){return k.send("videoStatServer.stopFind",{token:b},{object:a.result})})},a}(),k.MagicBox=new function(){this.reboot=function(){return k.send("magicBox.reboot")},this.getMainBoardCount=function(){return k.send("magicBox.getMainBoardCount").then(function(a){return a.params.count})},this.getSerialNo=function(){return k.send("magicBox.getSerialNo").then(function(a){return a.params.sn})},this.getProductDefinition=function(b){return a.isArray(b)?k.send("magicBox.getProductDefinition",a.map(b,function(a){return{name:a}})).then(function(a){return a.params}):k.send("magicBox.getProductDefinition",{name:b}).then(function(a){return a.params.definition})},this.getDeviceType=function(){return k.send("magicBox.getDeviceType").then(function(a){return a.params.type})},this.getMemoryInfo=function(){return k.send("magicBox.getMemoryInfo").then(function(a){return a.params})},this.getCPUUsage=function(a){return k.send("magicBox.getCPUUsage",{index:a||0}).then(function(a){return a.params.usage})},this.getDeviceClass=function(){return k.send("magicBox.getDeviceClass").then(function(a){return a.params.type})},this.getProcessInfo=function(){return k.send("magicBox.getProcessInfo").then(function(a){return a.params.info})},this.getSubModules=function(){return k.send("magicBox.getSubModules").then(function(a){return a.params.subModules})},this.get2DCode=function(b){return k.send("magicBox.get2DCode",{type:b}).then(function(b){var c=a.Deferred(),d=b.params.code;return d?c.resolve(d):c.reject(""),c},function(){return""})},this.getSystemInfoNew=function(){return k.send("magicBox.getSystemInfoNew").then(function(a){return a.params.info})},this.getHardwareVersion=function(){return k.send("magicBox.getHardwareVersion").then(function(a){return a.params.version})},this.getVendor=function(){return k.send("magicBox.getVendor").then(function(a){return a.params.Vendor})},this.shutDown=function(){return k.send("magicBox.shutdown")}},k.NetApp=new function(){this.getNetInterfaces=function(){return k.send("netApp.getNetInterfaces").then(function(a){return a.params.netInterface})},this.getMobileRSSI=function(a){return k.send("netApp.getMobileRSSI",{Name:a}).then(function(a){return a.params.info||{}})},this.getMobileInterfaces=function(){return k.send("netApp.getMobileInterfaces").then(function(a){return a.params.netInterface||[]})},this.getNetDataStat=function(a){return k.send("netApp.getNetDataStat",{Name:a}).then(function(a){return a.params})},this.checkIPConflict=function(a,b){return k.send("netApp.checkIPConflict",{Interface:b||"eth0",Address:a}).then(function(){return!0},function(){return!1})},this.getNetCaps=function(){return k.send("netApp.getCaps").then(function(a){return a.params.caps||{}})},this.getDialInfo=function(a){return k.send("netApp.getDialInfo",{Name:a}).then(function(a){return a.params})},this.scanWLanDevices=function(a,b){return k.send("netApp.scanWLanDevices",{Name:a,SSID:b}).then(function(a){return a.params.wlanDevice||[]})},this.getPppoeState=function(){return k.send("netApp.getPppoeState").then(function(a){return a.params.State})},this.getPppoeIp=function(){return k.send("netApp.getPppoeIp").then(function(a){return a.params.ipaddr})},this.getPppoeDns=function(){return k.send("netApp.getPppoeDns").then(function(a){return a.params.ipaddr})},this.connectByWps=function(a,b,c,d){return k.send("netApp.connectByWps",{info:{Type:a,ApPin:b,SSID:c,WLanPin:d}}).then(function(b){return 1===a?b.params.info:""})},this.sendTestMail=function(){return k.send("netApp.sendTestMail").then(function(a){return a.result})}},k.Log=new function(){this.startFind=function(a){return k.send("log.startFind",{condition:a}).then(function(a){return a.params.token})},this.getCount=function(b){return a.Deferred(function(c){k.send("log.getCount",{token:b}).done(function(b){"number"===a.type(b.params.count)?c.resolve(b.params.count):c.reject()}).fail(function(){c.reject()})})},this.doSeekFind=function(a,b,c){return k.send("log.doSeekFind",{token:a,offset:b,count:c}).then(function(a){return a.params})},this.stopFind=function(a){return k.send("log.stopFind",{token:a})},this.clear=function(){return k.send("log.clear")}},k.UserManager=function(){var a={};return a.getActiveUserInfoAll=function(){return k.send("userManager.getActiveUserInfoAll").then(function(a){return a.params.users||[]})},a.getUserInfo=function(a){return k.send("userManager.getUserInfo",{name:a}).then(function(a){return a.params.user})},a.getAuthorityList=function(){return k.send("userManager.getAuthorityList").then(function(a){return a.params})},a.addUser=function(a){return k.send("userManager.addUser",{user:a})},a.deleteUser=function(a){return k.send("userManager.deleteUser",{name:a})},a.modifyPassword=function(a,b,c){return k.send("userManager.modifyPassword",{name:a,pwd:b,pwdOld:c})},a.modifyUser=function(a,b){return k.send("userManager.modifyUser",{name:a,user:b})},a.addGroup=function(a){return k.send("userManager.addGroup",{group:a})},a.deleteGroup=function(a){return k.send("userManager.deleteGroup",{name:a})},a.modifyGroup=function(a,b){return k.send("userManager.modifyGroup",{name:a,group:b})},a.getUserInfoAll=function(){return k.send("userManager.getUserInfoAll").then(function(a){return a.params.users})},a.getGroupInfoAll=function(){return k.send("userManager.getGroupInfoAll").then(function(a){return a.params})},a.getErrorNo=function(){return k.send("userManager.getErrorNo").then(function(a){return a.params.error})},a}(),k.CertManager=function(){var a={};return a.getSvrCertInfo=function(){return k.send("CertManager.getSvrCertInfo").then(function(a){return a.params})},a.importSvrCert=function(a,b,c){return k.send("CertManager.importSvrCert",{salt:a,cipher:b,content:c})},a.exportRootCert=function(){return k.send("CertManager.exportRootCert")},a.getSvrCertSubject=function(){return k.send("CertManager.getSvrCertSubject")},a.removeSvrCert=function(){return k.send("CertManager.removeSvrCert")},a}(),k.DockUser=function(){var a={};return a.getUserInfoAll=function(){return k.send("DockUser.getUserInfoAll").then(function(a){return a.params.users||[]})},a.addUser=function(a,b,c){return k.send("DockUser.addUser",{salt:a,cipher:b,content:c})},a.deleteUser=function(a){return k.send("DockUser.deleteUser",{name:a})},a.modifyPassword=function(a,b,c){return k.send("DockUser.modifyPassword",{salt:a,cipher:b,content:c})},a.modifyUser=function(a,b){return k.send("DockUser.modifyUser",{name:a,user:b})},a}(),k.PTZ=new function(){d.call(this,"ptz.factory.instance");var a=this,b=0;this._getSeq=function(){var a=parseInt(m).toString(2).slice(-24),c=("00000000"+b.toString(2)).slice(-8);return b=(b+1)%256,parseInt(a+c,2)},this.start=function(b,c,d,e,f,g){return this.instance({channel:g||0}).then(function(g){return k.send("ptz.start",{code:b,arg1:c,arg2:d,arg3:e,arg4:f},{object:g.result,seq:a._getSeq()})})},this.stop=function(b,c,d,e,f,g){return this.instance({channel:g||0}).then(function(g){return k.send("ptz.stop",{code:b,arg1:c,arg2:d,arg3:e,arg4:f},{object:g.result,seq:a._getSeq()})})},this.getCurrentProtocolCaps=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.getCurrentProtocolCaps",void 0,{object:a.result}).then(function(a){return a.params.caps})})},this.getProtocolList=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.getProtocolList",void 0,{object:a.result}).then(function(a){return a.params.list})})},this.getProtocol=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.getProtocol",void 0,{object:a.result}).then(function(a){return a.params.info})})},this.focusContinuously=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.focusContinuously",{speed:a,timeout:b},{object:c.result})})},this.focusManually=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.focusManually",{change:a},{object:b.result})})},this.stopFocus=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.stopFocus",null,{object:a.result})})},this.adjustIris=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.adjustIris",{change:a},{object:b.result})})},this.auxControl=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.auxControl",{"function":a,open:b},{object:c.result})})},this.menuControl=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.menuControl",{key:a},{object:b.result})})},this.lensInit=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.lensInit",void 0,{object:a.result})})},this.restartCamera=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.restartCamera",void 0,{object:a.result})})},this.reset=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.reset",void 0,{object:a.result})})},this.restartPtz=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.restartPtz",void 0,{object:a.result})})},this.setPreset=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.setPreset",{name:b,index:a},{object:c.result})})},this.getPresets=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.getPresets",void 0,{object:a.result}).then(function(a){return a.params.presets})})},this.gotoPreset=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.gotoPreset",{speed:b,index:a},{object:c.result})})},this.removePreset=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.removePreset",{index:a},{object:b.result})})},this.setTour=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.setTour",{name:b,index:a},{object:c.result})})},this.getTours=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.getTours",void 0,{object:a.result}).then(function(a){return a.params.tours})})},this.removeTour=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.removeTour",{index:a},{object:b.result})})},this.startTour=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.startTour",{index:a},{object:b.result})})},this.stopTour=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.stopTour",{index:a},{object:b.result})})},this.autoTour=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.autoTour",void 0,{object:a.result})})},this.moveAbsolutely=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.moveAbsolutely",{position:a,speed:b},{object:c.result})})},this.moveRelatively=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.moveRelatively",{translation:a,speed:b},{object:c.result})})},this.moveDirectly=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.moveDirectly",{screen:a,speed:b},{object:c.result})})},this.moveContinuously=function(b,c,d){return this.instance({channel:d||0}).then(function(d){return k.send("ptz.moveContinuously",{speed:b,timeout:c},{object:d.result,seq:a._getSeq()})})},this.continueMoveDirectly=function(a,b,c,d,e){return this.instance({channel:e||0}).then(function(e){return k.send("ptz.continueMoveDirectly",{screenDetail:{index:a,timeInterval:b,isLastScreen:c},screen:d},{object:e.result})})},this.stopMove=function(b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.stopMove",void 0,{object:b.result,seq:a._getSeq()})})},this.isMoving=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.isMoving",void 0,{object:a.result}).then(function(a){return a.params.moving})})},this.getStatus=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.getStatus",void 0,{object:a.result}).then(function(a){return a.params.status})})},this.focusRegion=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.focusRegion",{mode:a,rect:b},{object:c.result})})},this.setDirection=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.setDirection",{direction:a},{object:b.result})})},this.enableLimit=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.enableLimit",{enable:a},{object:b.result})})},this.markLimit=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.markLimit",{type:a},{object:b.result})})},this.gotoLimit=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.gotoLimit",{type:a},{object:b.result})})},this.setScanLimit=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.setScanLimit",{index:a,limitMode:b},{object:c.result})})},this.stopScan=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.stopScan",{index:a},{object:b.result})})},this.startScan=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.startScan",{index:a,speed:b},{object:c.result})})},this.stopPatternReplay=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.stopPatternReplay",{index:a},{object:b.result})})},this.startPatternReplay=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.startPatternReplay",{index:a},{object:b.result})})},this.stopPatternRecord=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("ptz.stopPatternRecord",{index:a},{object:b.result})})},this.startPatternRecord=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.startPatternRecord",{index:a,name:b},{object:c.result})})},this.moveAutoPan=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.moveAutoPan",{speed:a,timeout:b},{object:c.result})})},this.setStatisticPlan=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.setStatisticPlan",{type:a,id:b},{object:c.result})})},this.gotoStatisticPlan=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.gotoStatisticPlan",{type:a,id:b},{object:c.result})})},this.getLifetimeEncrypt=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.getLifetimeEncrypt",null,{object:a.result}).then(function(a){return a.params.lifetime})})},this.getOperationStatus=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.getOperationStatus",null,{object:a.result}).then(function(a){return a.params.status})})},this.getMotorSteps=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("ptz.getMotorSteps",null,{object:a.result}).then(function(a){return a.params.steps})})},this.setMotorSteps=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("ptz.setMotorSteps",{steps:a,speed:b},{object:c.result})})}},k.PTZBase=function(){var a={};return a.moveContinuously=function(a,b,c,d){return k.send("ptzBase.moveContinuously",{speed:a,timeout:b,zoomSource:c,channel:d||0})},a}(),k.Encode=new function(){this.getConfigCaps=function(a,b,c){return k.send("encode.getConfigCaps",{channel:a,config:b,stream:c||"All"}).then(function(a){return a.params.caps})},this.updateOverlayPicture=function(a){return k.send("encode.updateOverlayPicture",{Pictures:a}).then(function(a){return a.params.Infos})},this.getSmartCaps=function(a,b){return k.send("encode.getSmartCaps",{channel:b||0,config:a}).then(function(a){return a.params.caps})}},k.DevIntelliTracker=function(){var a={};return d.call(a,"devIntelliTracker.factory.instance"),a.getLockLeft=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devIntelliTracker.getLockLeft",void 0,{object:a.result}).then(function(a){return a.params.time})})},a.setLockDuration=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("devIntelliTracker.setLockDuration",{time:a},{object:b.result})})},a.start=function(b){return a.instance({channel:b||0}).then(function(a){return rpc.send("devIntelliTracker.start",void 0,{object:a.result})})},a.stop=function(b){return a.instance({channel:b||0}).then(function(a){return rpc.send("devIntelliTracker.stop",void 0,{object:a.result})})},a.trackObject=function(b,c){return a.instance({channel:c||0}).then(function(a){return rpc.send("devIntelliTracker.trackObject",{object:b},{object:a.result})})},a.gotoScene=function(b,c){return a.instance({channel:c||0}).then(function(a){return rpc.send("devIntelliTracker.gotoScene",{scene:b},{object:a.result})})},a.markScene=function(b,c){return a.instance({channel:c||0}).then(function(a){return rpc.send("devIntelliTracker.markScene",{scene:b},{object:a.result})})},a.markSceneMaxZoom=function(b,c){return a.instance({channel:c||0}).then(function(a){return rpc.send("devIntelliTracker.markSceneMaxZoom",{scene:b},{object:a.result})})},a.markSceneLimit=function(b,c,d){return a.instance({channel:d||0}).then(function(a){return rpc.send("devIntelliTracker.markSceneLimit",{scene:b,type:c},{object:a.result})})},a.gotoSceneLimit=function(b,c,d){return a.instance({channel:d||0}).then(function(a){return rpc.send("devIntelliTracker.gotoSceneLimit",{scene:b,type:c},{object:a.result})})},a}(),k.CommPort=function(){var a={};return d.call(a,"commPort.factory.instance"),a.getProtocolList=function(){return this.instance().then(function(a){return k.send("commPort.getProtocolList",void 0,{object:a.result}).then(function(a){return a.params.list})})},a}(),k.DevVideoAnalyse=new function(){d.call(this,"devVideoAnalyse.factory.instance"),this.getCaps=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devVideoAnalyse.getCaps",void 0,{object:a.result}).then(function(a){return a.params.caps})})},this.getTemplateRule=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("devVideoAnalyse.getTemplateRule",{rule:a},{object:b.result}).then(function(a){return a.params})})},this.testCalibrateWithScreenPoints=function(a,b,c,d){return this.instance({channel:d||0}).then(function(d){return k.send("devVideoAnalyse.testCalibrateWithScreenPoints",{type:a,start:b,end:c},{object:d.result}).then(function(a){return a.params.length})})}},k.VideoInAnalyse=new function(){this.getCaps=function(a){return k.send("VideoInAnalyse.getCaps",{channel:a||0}).then(function(a){return a.params.caps})},this.getTemplateRule=function(a,b){return k.send("VideoInAnalyse.getTemplateRule",{channel:b||0,"class":a}).then(function(a){return a.params})},this.getTemplateGlobal=function(a){return k.send("VideoInAnalyse.getTemplateGlobal",{channel:a||0}).then(function(a){return a.params})},this.getTemplateModule=function(a,b){return k.send("VideoInAnalyse.getTemplateModule",{channel:b||0,"class":a}).then(function(a){return a.params})}},k.DevAudioInput=new function(){d.call(this,"devAudioInput.factory.instance"),this.getCollect=function(){return k.send("devAudioInput.factory.getCollect").then(function(a){return a.params.channels||0})},this.getCaps=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devAudioInput.getCaps",void 0,{object:a.result}).then(function(a){return a.params.caps})})}},k.DevAudioEncode=new function(){d.call(this,"devAudioEncode.factory.instance"),this.getFormatCaps=function(a,b){return this.instance({channel:b||0,stream:a||"Main"}).then(function(a){return k.send("devAudioEncode.getFormatCaps",void 0,{object:a.result}).then(function(a){return a.params.formats})})}},k.VideoProcessManager=function(){var a={};return a.getCaps=function(a,b){return k.send("VideoProcessManager.getCaps",{name:a,channel:b||0}).then(function(a){return a.params.caps})},a}(),k.DevVideoDetect=new function(){d.call(this,"devVideoDetect.factory.instance"),this.getCaps=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devVideoDetect.getCaps",void 0,{object:a.result}).then(function(a){return a.params.caps})})},this.attachMotionData=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("devVideoDetect.attachMotionData",{proc:a},{object:b.result})})},this.detachMotionData=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("devVideoDetect.detachMotionData",{proc:a},{object:b.result})})}},k.DevAudioDetect=function(){var a={};return d.call(a,"devAudioDetect.factory.instance"),a.getCaps=function(b){return a.instance({channel:b||0}).then(function(a){return k.send("devAudioDetect.getCaps",void 0,{object:a.result}).then(function(a){return a.params.caps})})},a.detachDetectData=function(b,c){return a.instance({channel:b||0}).then(function(a){return k.send("devAudioDetect.detachDetectData",{proc:c},{object:a.result})})},a.attachDetectData=function(b,c){return a.instance({channel:b||0}).then(function(a){return k.send("devAudioDetect.attachDetectData",{proc:c},{object:a.result})})},a}(),k.DevAudioOutput=new function(){d.call(this,"devAudioOutput.factory.instance"),this.getCollect=function(){return k.send("devAudioOutput.factory.getCollect").then(function(a){return a.params.channels||0})},this.getCaps=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devAudioOutput.getCaps",void 0,{object:a.result}).then(function(a){return a.params.caps})})}},k.DevVideoOutput=new function(){d.call(this,"devVideoOutput.factory.instance"),this.getCollect=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devVideoOutput.factory.getCollect",void 0,{object:a.result}).then(function(a){return a.params.channels})})},this.getCaps=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devVideoOutput.getCaps",void 0,{object:a.result}).then(function(a){return a.params.caps})})},this.enumModes=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devVideoOutput.enumModes",void 0,{object:a.result}).then(function(a){return a.params.modeTable})})}},k.DdnsClient=function(){var a={};return a.getStatus=function(){return k.send("ddnsClient.getStatus").then(function(a){return a.params.status})},a.getDomainNames=function(a){return k.send("ddnsClient.getDomainNames",{ddnsInfo:a}).then(function(a){return a.params.names})},a.testHostName=function(a,b,c,d,e,f){return k.send("ddnsClient.testHostName",{Protocol:a,Address:b,Port:c,HostName:d,UserName:e,Password:f}).then(function(a){return a.params.Detail})},a}(),k.DevVideoInput=new function(){d.call(this,"devVideoInput.factory.instance"),this.getCollect=function(){return k.send("devVideoInput.factory.getCollect").then(function(a){return a.params.channels||0})},this.getCaps=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devVideoInput.getCaps",void 0,{object:a.result}).then(function(a){return a.params.caps})})},this.getCapsEx=function(a,b){return this.instance({channel:a||0}).then(function(a){return k.send("devVideoInput.getCapsEx",{Name:b||"All"},{object:a.result}).then(function(a){return a.params.caps})})},this.getFocusStatus=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devVideoInput.getFocusStatus",void 0,{object:a.result}).then(function(a){return a.params.status})})},this.getVideoInStatus=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devVideoInput.getVideoInStatus",void 0,{object:a.result}).then(function(a){return a.params.status})})},this.autoFocus=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devVideoInput.autoFocus",void 0,{object:a.result})})},this.stopAutoFocus=function(a){return this.instance({channel:a||0}).then(function(a){return k.send("devVideoInput.stopAutoFocus",void 0,{object:a.result})})},this.focusRegion=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("devVideoInput.focusRegion",{mode:a,rect:b},{object:c.result})})},this.adjustFocus=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("devVideoInput.adjustFocus",{focus:a,zoom:b},{object:c.result})})},this.adjustFocusContinuously=function(a,b,c){return this.instance({channel:c||0}).then(function(c){return k.send("devVideoInput.adjustFocusContinuously",{focus:a,zoom:b},{object:c.result})})},this.exposureRegion=function(a,b){return this.instance({channel:b||0}).then(function(b){return k.send("devVideoInput.exposureRegion",{rect:a},{object:b.result})})}},k.DevVideoEncode=new function(){d.call(this,"devVideoEncode.factory.instance"),this.getCaps=function(a,b,c){return this.instance({channel:b||0,group:c||0,stream:a||"Main"}).then(function(a){return k.send("devVideoEncode.getCaps",void 0,{object:a.result}).then(function(a){return a.params.caps})})},this.setIFrame=function(a,b,c){return this.instance({channel:b||0,group:c||0,stream:a||"Main"}).then(function(a){return k.send("devVideoEncode.setIFrame",void 0,{object:a.result})})}},k.Alarm=new function(){this.getInSlots=function(){return k.send("alarm.getInSlots").then(function(a){return a.params.inputs||0})},this.getOutSlots=function(){return k.send("alarm.getOutSlots").then(function(a){return a.params.outputs||0})},this.getAlarmCaps=function(){return k.send("alarm.getAlarmCaps").then(function(a){return a.params.caps||{}})},this.getOutState=function(){return k.send("alarm.getOutState").then(function(a){return a.params.state})}},k.Security=function(){var a={};return a.getEncryptInfo=function(){return k.send("Security.getEncryptInfo").then(function(a){return a.params})},a.getEncryptDog=function(){return k.send("Security.getEncryptDog").then(function(a){return a.params.info})},a.addUser=function(a,b,c){return k.send("Security.addUser",{salt:a,cipher:b,content:c})},a.modifyPasswordByType=function(a,b,c){return k.send("Security.modifyPasswordByType",{salt:a,cipher:b,content:c})},a.modifyPasswordPlain=function(a,b,c){return k.send("Security.modifyPasswordPlain",{salt:a,cipher:b,content:c})},a.getConfig=function(a,b,c){return k.send("Security.getConfig",{salt:a,cipher:b,content:c}).then(function(a){return a.params.content})},a.setConfig=function(a,b,c){return k.send("Security.setConfig",{salt:a,cipher:b,content:c}).then(function(a){return a.params&&a.params.content})},a}(),k.FaceBoard=new function(){this.getFanSpeedEx=function(a){return k.send("faceBoard.getFanSpeedEx",{type:a}).then(function(a){return a.params.info})},this.getTemperatureEx=function(a){return k.send("faceBoard.getTemperatureEx",{type:a}).then(function(a){return a.params.info})},this.getCaps=function(){return k.send("faceBoard.getCaps").then(function(a){return a.params.caps})}},k.Nat=new function(){this.getTurnStatus=function(){return k.send("Nat.getTurnStatus").then(function(a){return a.params.Status})},this.createP2PChannel=function(a){return k.send("Nat.createP2PChannel",{Info:a}).then(function(a){return a.params.Info})}},k.MediaFileFind=new function(){this.create=function(a){return k.send("mediaFileFind.factory.create",void 0,{subClassID:a}).then(function(a){return a.result})},this.findFile=function(a,b){return k.send("mediaFileFind.findFile",{condition:b},{object:a})},this.findNextFile=function(a,b){return k.send("mediaFileFind.findNextFile",{count:b},{object:a}).then(function(a){return a.params})},this.close=function(a){return k.send("mediaFileFind.close",void 0,{object:a})},this.destroy=function(a){return k.send("mediaFileFind.destroy",void 0,{object:a})
}},k.Storage=new function(){this.getCaps=function(){return k.send("storage.getCaps").then(function(a){return a.params.caps})},this.testNAS=function(a){return k.send("storage.testNAS",{NAS:a}).then(function(a){return a.result})},this.getPortInfo=function(){return k.send("storage.getPortInfo").then(function(a){return a.params.info||{}})},this.getBoundTimeEx=function(a){return k.send("storage.getBoundTimeEx",{DiskList:a}).then(function(a){return a.params.time||[]})}},k.DevStorage=function(){var a={};return d.call(a,"devStorage.factory.instance"),a.getSmartValue=function(b){return a.instance({name:b}).then(function(a){return k.send("devStorage.getSmartValue",null,{object:a.result}).then(function(a){return a.params.values})})},a.formatPatition=function(b,c,d){return a.instance({name:b}).then(function(a){return k.send("devStorage.formatPatition",{part:c||"",fs:d||""},{object:a.result})})},a.eject=function(b){return a.instance({name:b}).then(function(a){return k.send("devStorage.eject",void 0,{object:a.result})})},a.getDeviceInfo=function(b){return a.instance({name:b}).then(function(a){return k.send("devStorage.getDeviceInfo",void 0,{object:a.result}).then(function(a){return a.params.device})})},a}(),k.EventManager=new function(){this.attach=function(a,b){return k.send("eventManager.attach",{codes:a,proc:b}).then(function(a){return a.params&&a.params.SID})},this.detach=function(a,b,c){return k.send("eventManager.detach",{SID:a,codes:b,proc:c})},this.destory=function(){return k.send("eventManager.destroy")},this.instance=function(){return k.send("eventManager.factory.instance").then(function(a){return a.result})},this.confirmEvent=function(a,b,c){return k.send("eventManager.confirmEvent",{code:a,index:b,name:c}).then(function(a){return a.result})},this.getCaps=function(){return this.instance().then(function(a){return k.send("eventManager.getCaps",{object:a.result}).then(function(a){return a.params.caps})})},this.getEventIndexes=function(a){return k.send("eventManager.getEventIndexes",{code:a}).then(function(a){return a.params.indexes||[]})}},k.Speak=function(){var a={};return a.startPlay=function(a){return k.send("speak.startPlay",{path:a}).then(function(a){return a.params.Status})},a.stopPlay=function(){return k.send("speak.stopPlay")},a}(),k.AudioRecordManager=function(){var a={};return a.getStateAll=function(){return k.send("audioRecordManager.getStateAll").then(function(a){return a.params.state})},a.startChannel=function(a,b,c){return k.send("audioRecordManager.startChannel",{stream:a,path:b,channel:c||0})},a.stopChannel=function(a,b){return k.send("audioRecordManager.stopChannel",{stream:a,channel:b||0})},a.startName=function(a,b){return k.send("audioRecordManager.startName",{stream:a,channel:b||0}).then(function(a){return a.params.name})},a.stopName=function(a,b){return k.send("audioRecordManager.stopName",{stream:a,channel:b||0}).then(function(a){return a.params.name})},a}(),k.FileManager=function(){var a={};return a.list=function(a){return k.send("FileManager.list",{path:a}).then(function(a){return a.params.elementInfo},function(){return[]})},a.rename=function(a,b){return k.send("FileManager.rename",{oldName:a,newName:b})},a.removeFiles=function(a){return k.send("FileManager.removeFiles",{fileName:a})},a.getFileNames=function(a){return k.send("FileManager.getFileNames",{directory:a}).then(function(a){return a.params.fileInfo})},a}(),k.UPnPPortmap=new function(){this.refreshUpnpRouter=function(){return k.send("UPnPPortmap.refreshUpnpRouter")},this.getUPnPStatus=function(){return k.send("UPnPPortmap.getUPnPStatus").then(function(a){return a.params.status})},this.getRouterMapping=function(){return k.send("UPnPPortmap.getRouterMapping").then(function(a){return a.params.mapping})}},k.WorkDirectory=new function(){d.call(this,"workDirectory.factory.instance",!1),this.getInfo=function(a){return this.instance({name:a}).then(function(a){return k.send("workDirectory.getInfo",null,{object:a.result}).then(function(a){return a.params.info})})},this.setGroup=function(a,b){return this.instance({name:a}).then(function(a){return k.send("workDirectory.setGroup",{group:b},{object:a.result})})},this.getBitmapEx=function(a,b){return this.instance({name:a}).then(function(a){return k.send("workDirectory.getBitmapEx",{condition:b},{object:a.result}).then(function(a){return a.params.bitmap})})}},k.WorkGroup=new function(){d.call(this,"workGroup.factory.instance"),this.getDirectories=function(a){return this.instance({name:a}).then(function(a){return k.send("workGroup.getDirectories",null,{object:a.result}).then(function(a){return a.params.list})})}},k.RecordManager=new function(){this.start=function(){return k.send("recordManager.start")},this.stop=function(){return k.send("recordManager.stop")},this.getCaps=function(){return k.send("recordManager.getCaps").then(function(a){return a.params.caps})},this.startChannel=function(a){return k.send("recordManager.startChannel",{channel:a})},this.stopChannel=function(a){return k.send("recordManager.stopChannel",{channel:a})}},k.SnapManager=new function(){this.start=function(){return k.send("snapManager.start")},this.stop=function(){return k.send("snapManager.stop")},this.getCaps=function(){return k.send("snapManager.getCaps").then(function(a){return a.params.caps})}},k.IntervideoClient=new function(){this.getVersion=function(a){return k.send("IntervideoClient.getVersion",{name:a}).then(function(a){return a.params.info||[]})}},k.IntervideoManager=function(){var a={};return a.getVersion=function(a){return k.send("IntervideoManager.getVersion",{Name:a}).then(function(a){return a.params.info||{}})},a.getNetStatus=function(){return k.send("IntervideoManager.getNetStatus").then(function(a){return a.params.info})},a}(),k.WideViewControl=new function(){d.call(this,"wideViewControl.factory.instance"),this.getCaps=function(a,b){return this.instance({channel:a}).then(function(a){return k.send("wideViewControl.getCaps",{capsName:b},{object:a.result}).then(function(a){return a.params.caps})})}},k.OSDManager=function(){var a={};return a.getCaps=function(){return k.send("OSDManager.getCaps").then(function(a){return a.params.caps})},a.getCustomCaps=function(){return k.send("OSDManager.getCustomCaps").then(function(a){return a.params.caps})},a}(),k.RainBrush=function(){var a={};return a.moveContinuously=function(a,b){return k.send("rainBrush.moveContinuously",{channel:b||0,interval:a})},a.stopMove=function(a){return k.send("rainBrush.stopMove",{channel:a||0})},a.moveOnce=function(a){return k.send("rainBrush.moveOnce",{channel:a||0})},a}(),k.Upgrader=function(){var a={};return a.getState=function(){return k.send("upgrader.getState").then(function(a){return a.params})},a.start=function(){return k.send("upgrader.start").then(function(a){return a.params})},a.check=function(){return k.send("upgrader.check").then(function(a){return a.params})},a}(),k.FtpTest=function(){var a={};return a.checkAuthority=function(a){return k.send("FtpTest.checkAuthority",{name:a||"FTP1"})},a}(),k.PtzViewRange=function(){var a={};return d.call(a,"ptzViewRange.factory.instance"),a.measureDistance=function(a,b,c){return k.send("PtzViewRange.measureDistance",{channel:a,screenX:b,screenY:c}).then(function(a){return a.params})},a}(),k.send=function(b,c,d){var e=[];return a.isArray(b)&&a.isArray(c)?(a.each(b,function(a,b){e.push(g(b,c[a],d))}),h(g("system.multicall",e))):a.isArray(c)?(a.each(c,function(a,c){e.push(g(b,c,d))}),h(g("system.multicall",e))):a.isArray(b)?(a.each(b,function(a,b){e.push(g(b,c,d))}),h(g("system.mutilcall",e))):h(g(b,c,d))}})}(jQuery);