!function(a){define(function(require,b,c){function d(b){for(var c=b.eventList,d=!0,e=0;e<c.length;++e)"Stop"!==c[e].Action&&(a("#alarm_table").table("add",c[e],-1),d&&(!n&&a("#alarm_tip").prop("checked")&&a("#d_alarmtip").show(),window.playAlarmSound(a("#sound_path").val()),d=!1))}function e(a){var b=m[a];h.EventManager.attach(b.events).done(function(a){b.sid=a})}function f(a){var b=m[a];void 0!=b&&h.EventManager.detach(b.sid,b.events)}function g(){webApp.NotifyVersion?j.devNotify.reconnect():p.$("#alarm_frame").attr("src","/cgi-bin/SubscribeNotify.cgi?sessionId="+h.getSession()),o.each(function(b,c){var d=a(c),f=d.data("event");d.prop("checked")&&e(f)})}var h=require("jsCore/rpc"),i=require("jsCore/ability"),j=require("common/common"),k=require("jsCore/plugin"),l=require("jsCore/pageBase"),m=null,n=!1,o=null,p=null,q=null,r=null;c.exports=l.extend({init:function(b){p=this,m={videoMotion:{events:["VideoMotion"],sid:-1},storageLowSpace:{events:["StorageLowSpace"],sid:-1},storageFailure:{events:["StorageFailure"],sid:-1},videoBlind:{events:["VideoBlind"],sid:-1},externalAlarm:{events:["AlarmLocal"],sid:-1},illegalAccess:{events:["LoginFailure"],sid:-1},audioDetect:{events:[],sid:-1},ivs:{events:["CrossLineDetection","CrossRegionDetection","LeftDetection","VideoAbnormalDetection","SceneChange","TakenAwayDetection","FaceDetection","RioterDetection","MoveDetection","WanderDetection","CrossFenceDetection","ParkingDetection","NumberStat","RetrogradeDetection","TrafficJunction"],sid:-1},VideoAbnormalDetection:{events:["VideoAbnormalDetection","SceneChange"],sid:-1},HeatImagingTemper:{events:["HeatImagingTemper"],sid:-1},BetweenRulesTemperDiffAlarm:{events:["BetweenRulesTemperDiffAlarm"],sid:-1},HotSpotWarning:{events:["HotSpotWarning"],sid:-1},ColdSpotWarning:{events:["ColdSpotWarning"],sid:-1},FireWarning:{events:["FireWarning","SmokeDetection"],sid:-1}},webApp.NotifyVersion?(p.$("#alarm_table_frame").remove(),p.$("#alarm_table").table({pageable:!1,height:454,columns:[{title:tl("w_Numbers"),width:"10%",render:function(a){return a._index+1}},{title:tl("w_Time"),width:"30%",render:function(a){var b="";if(a.Data&&a.Data.LocaleTime)b=a.Data.LocaleTime;else if(a.Data&&a.Data.UTC){var c=new Date;c.setTime(1e3*a.Data.UTC),b+=c.getFullYear()+"-",b+=jQuery.pad(c.getMonth()+1,2)+"-",b+=jQuery.pad(c.getDate(),2)+" ",b+=jQuery.pad(c.getHours(),2)+":",b+=jQuery.pad(c.getMinutes(),2)+":",b+=jQuery.pad(c.getSeconds(),2)}return b}},{title:tl("w_Alarm Type"),width:"30%",render:function(a){var b=tl(a.Code);return a.Data&&a.Data.Type&&(b+="("+tl(a.Data.Type)+")"),b}},{title:tl("w_Alarm Channel"),width:"30%",render:function(a){return a.Index+1}}]})):(p.$("#alarm_table").remove(),p.$("#player").remove()),webApp.IsLocalStore||(p.$("input[data-event=storageLowSpace]").closest("label").remove(),p.$("input[data-event=storageFailure]").closest("label").remove()),webApp.ALARM_IN_NUMBER||p.$("input[data-event=externalAlarm]").closest("label").remove(),-1!==webApp.DeviceType.indexOf("TPC")&&(-1!==webApp.DeviceType.indexOf("-T")&&login.chkAuthority("TemperatureConfig")&&(p.$("input[data-event=HeatImagingTemper]").closest("label").show(),p.$("input[data-event=BetweenRulesTemperDiffAlarm]").closest("label").show(),p.$("input[data-event=HotSpotWarning]").closest("label").show(),p.$("input[data-event=ColdSpotWarning]").closest("label").show()),i.get("FireWarning").done(function(a){a.Support&&p.$("input[data-event=FireWarning]").closest("label").show()}));var c=i.get("VideoDetectCaps").done(function(a){a&&a.UnFocusDetect?(m.videoBlind.events.push("VideoUnFocus"),p.$("input[data-event=videoBlind]").next("span").text(tl("w_videoOn"))):p.$("input[data-event=videoBlind]").next("span").text(tl("w_Video Shelter"))}),e=i.get("WirelessAlarm").done(function(a){a&&a.Support&&m.externalAlarm.events.push("AlarmExtended")}),f=!1,k=i.get("AudioFileManager").done(function(a){a&&a.Support&&(f=!0,m.audioDetect.events.push("AudioDetect"))}),l=i.get("AnomalyDetect").done(function(a){a&&(f=!0,m.audioDetect.events.push("AudioAnomaly"))}),o=i.get("MutationDetect").done(function(a){a&&(f=!0,m.audioDetect.events.push("AudioMutation"))}),q=i.get("VideoDetectCaps").done(function(a){a&&a.SupportMovedDetect?m.ivs&&m.ivs.events.splice(3,1):p.$("input[data-event=VideoAbnormalDetection]").closest("label").remove()});p.$("input[data-event=VideoAbnormalDetection]").closest("label").remove();var s=i.is("DSPConflict").done(function(a){(!webApp.IsIPCIntel&&!webApp.IsSDIntel||a)&&(p.$("input[data-event=ivs]").closest("label").remove(),delete m.ivs)});p.$("input[data-event=ivs]").closest("label").remove(),a.when(c,e,k,l,o,q,s).done(function(){f||p.$("input[data-event=audioDetect]").closest("label").remove(),b&&(p.render(),webApp.NotifyVersion||a("#alarm_tip").prop("checked")&&a("[data-event]:checked").length&&(r=setInterval(function(){h.send("getEventnum").done(function(b){b.params.number>0&&a("#d_alarmtip").show()})},1e3)),n=!1)}),p.$("#sound_path").click(function(a){p.onSelectFile(a)}),p.$("#alarm_sound").click(function(){var b=a(this).prop("checked");if(p.disabled("#sound_path",!b),p.disabled("[btn-for=onSelectFile]",!b),!b&&(p.$("#sound_path").val(""),!webApp.NotifyVersion)){var c="c://notexistfile"+(new Date).getTime()+".mp3";h.send("getvideopath",{videopath:c})}}),webApp.NotifyVersion?j.devNotify.subscribe("client.notifyEventStream",d):p.$("#alarm_frame").attr("src","/cgi-bin/SubscribeNotify.cgi?sessionId="+h.getSession()),app.addEvent("RECONNECTION",g),b&&(p.render(),n=!1)},render:function(){a("#d_alarmtip").hide(),n=!0,clearInterval(r),p._renderElements()},_renderElements:function(){h.ConfigManager.getConfig("AlarmConfig").done(function(a){q=a,q.AlarmEvent&&(p.$("input[data-event=videoMotion]").prop("checked",q.AlarmEvent.videoMotion),p.$("input[data-event=storageLowSpace]").prop("checked",q.AlarmEvent.storageLowSpace),p.$("input[data-event=storageFailure]").prop("checked",q.AlarmEvent.storageFailure),p.$("input[data-event=videoBlind]").prop("checked",q.AlarmEvent.videoBlind),p.$("input[data-event=externalAlarm]").prop("checked",q.AlarmEvent.externalAlarm),p.$("input[data-event=illegalAccess]").prop("checked",q.AlarmEvent.illegalAccess),p.$("input[data-event=audioDetect]").prop("checked",q.AlarmEvent.audioDetect),p.$("input[data-event=VideoAbnormalDetection]").prop("checked",q.AlarmEvent.VideoAbnormalDetection),p.$("input[data-event=FireWarning]").prop("checked",q.AlarmEvent.FireWarning),p.$("input[data-event=BetweenRulesTemperDiffAlarm]").prop("checked",q.AlarmEvent.BetweenRulesTemperDiffAlarm),p.$("input[data-event=HotSpotWarning]").prop("checked",q.AlarmEvent.HotSpotWarning),p.$("input[data-event=ColdSpotWarning]").prop("checked",q.AlarmEvent.ColdSpotWarning)),p.$("#alarm_tip").prop("checked",q.AlarmTip),p.$("#alarm_sound").prop("checked",q.AlarmSound.Enable),p.$("#sound_path").val(q.AlarmSound.Path),q.AlarmSound.Enable?(p.disabled("#sound_path",!1),p.disabled("[btn-for=onSelectFile]",!1)):(p.disabled("#sound_path",!0),p.disabled("[btn-for=onSelectFile]",!0));var b=["videoMotion","storageLowSpace","storageFailure","videoBlind","illegalAccess","audioDetect","HeatImagingTemper","FireWarning","BetweenRulesTemperDiffAlarm","HotSpotWarning","ColdSpotWarning","externalAlarm","SceneChange","FireWarning"];b.each(function(a){f(a)}),q.AlarmEvent.videoMotion?e(p.$("input[data-event=videoMotion]").data("event")):f(p.$("input[data-event=videoMotion]").data("event")),q.AlarmEvent.storageLowSpace?e(p.$("input[data-event=storageLowSpace]").data("event")):f(p.$("input[data-event=storageLowSpace]").data("event")),q.AlarmEvent.storageFailure?e(p.$("input[data-event=storageFailure]").data("event")):f(p.$("input[data-event=storageFailure]").data("event")),q.AlarmEvent.videoBlind?e(p.$("input[data-event=videoBlind]").data("event")):f(p.$("input[data-event=videoBlind]").data("event")),q.AlarmEvent.illegalAccess?e(p.$("input[data-event=illegalAccess]").data("event")):f(p.$("input[data-event=illegalAccess]").data("event")),q.AlarmEvent.audioDetect?e(p.$("input[data-event=audioDetect]").data("event")):f(p.$("input[data-event=audioDetect]").data("event")),q.AlarmEvent.HeatImagingTemper?e(p.$("input[data-event=HeatImagingTemper]").data("event")):f(p.$("input[data-event=HeatImagingTemper]").data("event")),q.AlarmEvent.FireWarning?e(p.$("input[data-event=FireWarning]").data("event")):f(p.$("input[data-event=FireWarning]").data("event")),q.AlarmEvent.BetweenRulesTemperDiffAlarm?e(p.$("input[data-event=BetweenRulesTemperDiffAlarm]").data("event")):f(p.$("input[data-event=BetweenRulesTemperDiffAlarm]").data("event")),q.AlarmEvent.HotSpotWarning?e(p.$("input[data-event=HotSpotWarning]").data("event")):f(p.$("input[data-event=HotSpotWarning]").data("event")),q.AlarmEvent.ColdSpotWarning?e(p.$("input[data-event=ColdSpotWarning]").data("event")):f(p.$("input[data-event=ColdSpotWarning]").data("event")),q.AlarmEvent.externalAlarm?e(p.$("input[data-event=externalAlarm]").data("event")):f(p.$("input[data-event=externalAlarm]").data("event")),q.AlarmEvent.VideoAbnormalDetection?e(p.$("input[data-event=SceneChange]").data("event")):f(p.$("input[data-event=SceneChange]").data("event")),q.AlarmEvent.FireWarning?e(p.$("input[data-event=FireWarning]").data("event")):f(p.$("input[data-event=FireWarning]").data("event"))})},leave:function(){n=!1,webApp.NotifyVersion||p.$("#alarm_tip").prop("checked")&&p.$("[data-event]:checked").length&&(r=setInterval(function(){h.send("getEventnum").done(function(b){b.params.number>0&&a("#d_alarmtip").show()})},1e3))},onSave:function(){q.AlarmEvent={videoMotion:p.$("input[data-event=videoMotion]").prop("checked"),storageLowSpace:p.$("input[data-event=storageLowSpace]").prop("checked"),storageFailure:p.$("input[data-event=storageFailure]").prop("checked"),videoBlind:p.$("input[data-event=videoBlind]").prop("checked"),externalAlarm:p.$("input[data-event=externalAlarm]").prop("checked"),illegalAccess:p.$("input[data-event=illegalAccess]").prop("checked"),audioDetect:p.$("input[data-event=audioDetect]").prop("checked"),VideoAbnormalDetection:p.$("input[data-event=VideoAbnormalDetection]").prop("checked"),FireWarning:p.$("input[data-event=FireWarning]").prop("checked"),BetweenRulesTemperDiffAlarm:p.$("input[data-event=BetweenRulesTemperDiffAlarm]").prop("checked"),HotSpotWarning:p.$("input[data-event=HotSpotWarning]").prop("checked"),ColdSpotWarning:p.$("input[data-event=ColdSpotWarning]").prop("checked")},q.AlarmTip=p.$("#alarm_tip").prop("checked"),q.AlarmSound.Enable=p.$("#alarm_sound").prop("checked"),q.AlarmSound.Path=p.$("#sound_path").val(),h.ConfigManager.setConfig("AlarmConfig",q).done(function(){p.$(".u-tip:first").tip("success","Succeed in saving configure")}).fail(function(){p.$(".u-tip:first").tip("error","Saving failure")});var a=["videoMotion","storageLowSpace","storageFailure","videoBlind","illegalAccess","audioDetect","HeatImagingTemper","FireWarning","BetweenRulesTemperDiffAlarm","HotSpotWarning","ColdSpotWarning","externalAlarm","SceneChange","FireWarning"];a.each(function(a){f(a)}),q.AlarmEvent.videoMotion?e(p.$("input[data-event=videoMotion]").data("event")):f(p.$("input[data-event=videoMotion]").data("event")),q.AlarmEvent.storageLowSpace?e(p.$("input[data-event=storageLowSpace]").data("event")):f(p.$("input[data-event=storageLowSpace]").data("event")),q.AlarmEvent.storageFailure?e(p.$("input[data-event=storageFailure]").data("event")):f(p.$("input[data-event=storageFailure]").data("event")),q.AlarmEvent.videoBlind?e(p.$("input[data-event=videoBlind]").data("event")):f(p.$("input[data-event=videoBlind]").data("event")),q.AlarmEvent.illegalAccess?e(p.$("input[data-event=illegalAccess]").data("event")):f(p.$("input[data-event=illegalAccess]").data("event")),q.AlarmEvent.audioDetect?e(p.$("input[data-event=audioDetect]").data("event")):f(p.$("input[data-event=audioDetect]").data("event")),q.AlarmEvent.HeatImagingTemper?e(p.$("input[data-event=HeatImagingTemper]").data("event")):f(p.$("input[data-event=HeatImagingTemper]").data("event")),q.AlarmEvent.FireWarning?e(p.$("input[data-event=FireWarning]").data("event")):f(p.$("input[data-event=FireWarning]").data("event")),q.AlarmEvent.BetweenRulesTemperDiffAlarm?e(p.$("input[data-event=BetweenRulesTemperDiffAlarm]").data("event")):f(p.$("input[data-event=BetweenRulesTemperDiffAlarm]").data("event")),q.AlarmEvent.HotSpotWarning?e(p.$("input[data-event=HotSpotWarning]").data("event")):f(p.$("input[data-event=HotSpotWarning]").data("event")),q.AlarmEvent.ColdSpotWarning?e(p.$("input[data-event=ColdSpotWarning]").data("event")):f(p.$("input[data-event=ColdSpotWarning]").data("event")),q.AlarmEvent.externalAlarm?e(p.$("input[data-event=externalAlarm]").data("event")):f(p.$("input[data-event=externalAlarm]").data("event")),q.AlarmEvent.VideoAbnormalDetection?e(p.$("input[data-event=SceneChange]").data("event")):f(p.$("input[data-event=SceneChange]").data("event")),q.AlarmEvent.FireWarning?e(p.$("input[data-event=FireWarning]").data("event")):f(p.$("input[data-event=FireWarning]").data("event"))},destory:function(){a("#d_alarmtip").hide(),webApp.NotifyVersion?j.devNotify.detach("client.notifyEventStream"):p.$("#alarm_frame").attr("src",""),app.removeEvent("RECONNECTION",g),m=null,n=!1,clearInterval(r)},onSelectFile:function(){var b=[{},{description:"All Files",extensions:["*"]}];return a.browser.ie?(b[0].description="Music Files (*.mp3;*.wav;*.mav;*.avi;*.wma;*.wmv)",b[0].extensions=["mp3","wav","mav","avi","wma","wmv"]):a.browser.Platform.mac?(b[0].description="Music Files (*.mp3;*.wav)",b[0].extensions=["mp3","wav"]):(b[0].description="Music Files (*.wav)",b[0].extensions=["wav"]),k.ShowSaveOrOpenDlg("openFile","",b).done(function(a){p.$("#sound_path").val(a[1].replace(/\\/g,"/")),webApp.NotifyVersion||h.send("getvideopath",{videopath:a[1].replace(/\\/g,"/")}),"nacl"===k.type&&k.ConnectAudioPath()}),!1}}),window.playAlarmSound=function(b){if(b)if(a.browser.ie){var c=a("#player")[0];c.url=b,c.controls.play(),setTimeout(function(){c.controls.stop()},7e3)}else clearTimeout(window.playAlarmSound.timer),window.playAlarmSound.timer=null,k.OpenAudioFile(b),window.playAlarmSound.timer=setTimeout(function(){k.OpenAudioFile("NULL")},7e3)},window.alarmCGIKeepAlive=a.noop})}(jQuery);