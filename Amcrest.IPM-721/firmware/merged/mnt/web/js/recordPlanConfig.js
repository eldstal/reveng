!function(a){function b(b,c){c||a.each(b,function(c,d){a.each(d,function(a,d){b[c][a]=(4294967291&parseInt(d.split(" ")[0]))+" "+d.split(" ")[1]})})}function c(b){b.find("[section]").timefield(),a.each(b.find("label[cfg^=rec_]"),function(c,d){a(d).on("click",function(){b.find("input[cfg="+a(this).attr("cfg")+"]").trigger("click")})}),b.find("input[cfg=rec_week_all]").on("click",function(){var c=a(this).prop("checked"),d=b.find("input[cfg^=rec_day]").filter(function(){return!a(this).prop("disabled")});a.each(d,function(){a(this).prop("checked",c)})}),b.find("input[cfg^=rec_day]").on("click",function(){for(var a=!0,c=0;8>c;c++)if(!b.find("input[cfg=rec_day_"+c+"]").prop("checked")){a=!1;break}b.find("input[cfg=rec_week_all]").prop("checked",a)}),b.find(":text").keyup(function(c){var d=a(c.target),e=d.closest("div[section]").attr("section")-0,f=d.closest("div[section]").attr("ii")-0,g=d.data("index");if(39===c.which)return 0===f&&2===g?b.find("div[section="+e+"][ii=1]").children(":text:eq(0)").select():1===f&&2===g&&5>e?b.find("div[section="+(e+1)+"][ii=0]").children(":text:eq(0)").select():(5!==e||1!==f||2!==g)&&b.find("div[section="+e+"][ii="+f+"]").children(":text:eq("+(g+1)+")").select(),!1;if(37===c.which)return 1===f&&0===g?b.find("div[section="+e+"][ii=0]").children(":text:eq(2)").select():0===f&&0===g&&e>0?b.find("div[section="+(e-1)+"][ii=1]").children(":text:eq(2)").select():(0!==e||0!==f||0!==g)&&b.find("div[section="+e+"][ii="+f+"]").children(":text:eq("+(g-1)+")").select(),!1;if(38===c.which)return e>0&&b.find("div[section="+(e-1)+"][ii="+f+"]").children(":text:eq("+g+")").select(),!1;if(40===c.which)return 5>e&&b.find("div[section="+(e+1)+"][ii="+f+"]").children(":text:eq("+g+")").select(),!1;if(2===d.val().length){if(0===f&&2===g)return b.find("div[section="+e+"][ii=1]").children(":text:eq(0)").select(),!1;if(1===f&&2===g&&5>e)return b.find("div[section="+(e+1)+"][ii=0]").children(":text:eq(0)").select(),!1}}).blur(function(c){var d=a(c.target),e=d.closest("div[section]"),f=e.attr("section")-0,g=e.attr("ii")-0,h=[];return h[g]=e.timefield("value").split(":"),h[(g+1)%2]=b.find("div[section="+f+"][ii="+(g+1)%2+"]").timefield("value").split(":"),3600*h[0][0]+60*h[0][1]+1*h[0][2]>3600*h[1][0]+60*h[1][1]+1*h[1][2]&&b.find("div[section="+f+"][ii=1]").timefield("value",h[0].join(":")),!1})}function d(b,c,d){d.find(".u-dialog-content").find("input[type=checkbox]").prop({checked:!1,disabled:!1}),d.find("input[cfg=rec_day_"+c+"]").prop({checked:!0,disabled:!0}),d.find("label[cfg^=rec_day]").removeClass("fn-color-red"),d.find("label[cfg=rec_day_"+c+"]").addClass("fn-color-red"),a.each(b[c],function(b,c){var e=c.match(/([\d]+) (\d\d):(\d\d):(\d\d)-(\d\d):(\d\d):(\d\d)/),f=d.find("[section="+b+"]"),g=[];g[0]=e[2]+":"+e[3]+":"+e[4],g[1]=e[5]+":"+e[6]+":"+e[7],f.each(function(b,c){a(c).timefield("value",g[b])}),f.parent().find("[chktype=general]").prop("checked",!!(1&e[1])),f.parent().find("[chktype=motion]").prop("checked",!!(2&e[1])),f.parent().find("[chktype=alarm]").prop("checked",!!(4&e[1]))})}function e(b,c){var d=[];a.each(b.find("input[cfg^=rec_day]"),function(b){a(this).prop("checked")&&d.push(b)});for(var e=0;e<d.length;e++)for(var f=0;6>f;f++){var g,h,i=b.find("[section="+f+"]"),j=0;i.parent().find("[chktype=general]").prop("checked")&&(j|=1),i.parent().find("[chktype=motion]").prop("checked")&&(j|=2),i.parent().find("[chktype=alarm]").prop("checked")&&(j|=4),g=i.eq(0).timefield("value"),h=i.eq(1).timefield("value"),c[d[e]][f]=j+" "+g+"-"+h}return c}define(function(require,a,b){b.exports=require("jsCore/pageTab")}),define("rec_config",function(require,f,g){var h,i,j=require("jsCore/rpc"),k=require("jsCore/pageBase"),l=null,m=null,n=0,o=null;require("widget/js/dui.schedule"),require("widget/js/dui.iconlist"),require("widget/js/dui.iconSelect"),g.exports=k.extend({init:function(){m=this,webApp.CHANNEL_NUMBER>1&&(m.$("#rec_config_channel").parent().removeClass("fn-hide"),m.$("#rec_config_channel").parent().next("div").removeClass("fn-hide"),o=a("#rec_config_channel").iconSelect({channelNumber:webApp.CHANNEL_NUMBER,allEnable:!1,change:function(a,b){n=b.ch,m._renderElements()}}),o.iconSelect("index",n)),h=webApp.ALARM_IN_NUMBER>0||webApp.IsLocalStore,m.$("#r_c_timesec").addClass("ui-timeplan-holiday").append(a("#rec_schedule").html()).find(".schedule_canvas").attr("id","r_c_canvas"),m.$("#r_c_canvas").schedule({holiday:!0,type:h?["general","motion","alarm"]:["general","motion"]}),m.$(".ui-timeplan-button a").on("click",function(){m.onSetup(a(this).attr("day"))}),a.each(m.$("label[cfg]"),function(b,c){a(c).on("click",function(){m.$("input[cfg="+a(this).attr("cfg")+"]").trigger("click")})}),m.$("input[cfg]").on("click",function(){m.onChangeType()}),m.$("#r_c_dialog").append(a("#rec_dialog").html()).find(".u-dialog").attr("id","dialog1"),i=m.$("#dialog1").dialog({confirm:function(a,b){l[n].TimeSection=e(i,l[n].TimeSection),b.ui.close(),m._renderElements()}}).detach().appendTo(document.body),c(i),h||(m.$(".schedule_showAlarmInfo").hide(),m.$('input[cfg = "rec_alarm"]').prop("checked",!1),a('#dialog1 input[chktype = "alarm"]').parent().hide()),m.onChangeType(),m.render()},render:function(){m._getConfig(!1)},destory:function(){i.remove()},_getConfig:function(a){j.ConfigManager.getConfig("Record").done(function(b){l=b,m._renderElements(),a&&m.tip("success","Operateingsuccess"),m.disabled("[btn-for=onConfirm]",!1)}).fail(function(){m.tip("error","Operateingfailure"),m.disabled("[btn-for=onConfirm]",!0)})},_renderElements:function(){b(l[n].TimeSection,h),m.$("#r_c_canvas").schedule("render",l[n].TimeSection)},onChangeType:function(){var a=[];m.$("input[cfg=rec_general]").prop("checked")&&a.push("general"),m.$("input[cfg=rec_motion]").prop("checked")&&a.push("motion"),m.$("input[cfg=rec_alarm]").prop("checked")&&a.push("alarm"),m.$("#r_c_canvas").schedule("setType",a)},onSetup:function(a){d(l[n].TimeSection,parseInt(a),i),i.dialog("show")},onDefault:function(){j.ConfigManager.getDefault("Record").done(function(a){l[n]=a[n],m._renderElements(l),m.tip("success","Defaultsuccess")}).fail(function(){m.tip("error","Defaultfailure")})},onRefresh:function(){m._getConfig(!0)},onConfirm:function(){j.ConfigManager.getConfig("Record").done(function(a){var b=a[n].PreRecord;a=l,a[n].PreRecord=b,j.ConfigManager.setConfig("Record",a).done(function(){m.tip("success","Succeed in saving configure")}).fail(function(){m.tip("success","Succeed in saving configure")})})}})}),define("rec_snapshot",function(require,f,g){var h,i,j=require("jsCore/rpc"),k=require("jsCore/pageBase"),l=null,m=null,n=0,o=null;g.exports=k.extend({init:function(){m=this,webApp.CHANNEL_NUMBER>1&&(m.$("#rec_snapshot_channel").parent().removeClass("fn-hide"),m.$("#rec_snapshot_channel").parent().next("div").removeClass("fn-hide"),o=a("#rec_snapshot_channel").iconSelect({channelNumber:webApp.CHANNEL_NUMBER,allEnable:!1,change:function(a,b){n=b.ch,m._renderElements()}}),o.iconSelect("index",n)),h=webApp.ALARM_IN_NUMBER>0||webApp.IsLocalStore,m.$("#r_s_timesec").addClass("ui-timeplan-holiday").append(a("#rec_schedule").html()).find(".schedule_canvas").attr("id","r_s_canvas"),m.$("#r_s_canvas").schedule({holiday:!0,type:h?["general","motion","alarm"]:["general","motion"]}),m.$(".ui-timeplan-button a").on("click",function(){m.onSetup(m.$(this).attr("day"))}),a.each(m.$("label[cfg]"),function(b,c){a(c).on("click",function(){m.$("input[cfg="+a(this).attr("cfg")+"]").trigger("click")})}),m.$("input[cfg]").on("click",function(){m.onChangeType()}),m.$("#r_s_dialog").append(a("#rec_dialog").html()).find(".u-dialog").attr("id","dialog2"),i=m.$("#dialog2").dialog({confirm:function(a,b){l[n].TimeSection=e(i,l[n].TimeSection),b.ui.close(),m._renderElements()}}).detach().appendTo(document.body),c(i),h||(m.$(".schedule_showAlarmInfo").hide(),m.$('input[cfg = "rec_alarm"]').prop("checked",!1),a('#dialog2 input[chktype = "alarm"]').parent().hide()),m.onChangeType(),m.render()},render:function(){m._getConfig(!1)},destory:function(){i.remove()},_getConfig:function(a){j.ConfigManager.getConfig("Snap").done(function(b){l=b,m._renderElements(),a&&m.tip("success","Operateingsuccess"),m.disabled("[btn-for=onConfirm]",!1)}).fail(function(){m.tip("error","Operateingfailure"),m.disabled("[btn-for=onConfirm]",!0)})},_renderElements:function(){b(l[n].TimeSection,h),m.$("#r_s_canvas").schedule("render",l[n].TimeSection)},onChangeType:function(){var a=[];m.$("input[cfg=rec_general]").prop("checked")&&a.push("general"),m.$("input[cfg=rec_motion]").prop("checked")&&a.push("motion"),m.$("input[cfg=rec_alarm]").prop("checked")&&a.push("alarm"),m.$("#r_s_canvas").schedule("setType",a)},onSetup:function(a){d(l[n].TimeSection,parseInt(a),i),i.dialog("show")},onDefault:function(){j.ConfigManager.getDefault("Snap").done(function(a){l[n]=a[n],m._renderElements(l),m.tip("success","Defaultsuccess")}).fail(function(){m.tip("error","Defaultfailure")})},onRefresh:function(){m._getConfig(!0)},onConfirm:function(){j.ConfigManager.getConfig("Snap").done(function(a){a=l,j.ConfigManager.setConfig("Snap",a).done(function(){m.tip("success","Succeed in saving configure")}).fail(function(){m.tip("success","Succeed in saving configure")})})}})}),define("rec_holiday",function(require,a,b){{var c=require("jsCore/pageBase"),d=require("jsCore/rpc"),e=require("common/common");require("jsCore/ability")}require("widget/js/dui.calendar");var f,g,h,i,j,k,l=null,m=0,n=0;b.exports=c.extend({init:function(){l=this,j=l.$("#pla_hol_record"),k=l.$("#pla_hol_snap"),d.Global.getCurrentTime().done(function(a){l.year=a.split(" ")[0].split("-")[0],l.month=Number(a.split(" ")[0].split("-")[1])-1,n=l.month,l.initCalendar()}),l.render()},initCalendar:function(){var a=new Date(l.year,l.month,1);i=l.$("#pla_calendar").calendar({date:a,disableYear:!0,selectManyDays:!0,isShowToday:!1,change:function(a,b){n=b.month-1,l.monthday=b.monthDays,f&&l._renderCalendar()},select:function(a,b){f&&l._changeHolidayMask(b.day-1,b.isSelected)}})},render:function(){d.Global.getCurrentTime().done(function(a){l.year=a.split(" ")[0].split("-")[0],l.month=Number(a.split(" ")[0].split("-")[1])-1,l._getConfig()})},_getConfig:function(a){d.ConfigManager.getConfig(["Holiday","Record","Snap"]).done(function(b){f=b[0].params.table,g=b[1].params.table,h=b[2].params.table,l._renderElement(!0),l.disabled("[btn-for=onSave]",!1),a&&l.tip("success","Operateingsuccess")}).fail(function(){l.disabled("[btn-for=onSave]",!1),l.tip("error","Operateingfailure")})},_renderElement:function(a){j.prop("checked",g[m].HolidayEnable),k.prop("checked",h[m].HolidayEnable),l._renderCalendar(a)},_renderCalendar:function(a){a&&(n=l.month),i&&i.calendar("refresh",new Date(l.year,n));for(var b=0;b<l.monthday;b++)if(f.MonthMask[n]&1<<b){var c=l.year+"/"+(n+1)+"/"+(b+1);i&&i.calendar("select",c)}},onConfirm:function(){return g[m].HolidayEnable=j.prop("checked"),h[m].HolidayEnable=k.prop("checked"),d.ConfigManager.setConfig(["Holiday","Record","Snap"],[f,g,h]).done(function(a){e.chkMutilCallRet(a)?l.tip("success","Succeed in saving configure"):l.tip("error","Saving failure")}),!1},onRefresh:function(){return this._getConfig(!0),!1},_changeHolidayMask:function(a,b){b?f.MonthMask[n]|=1<<a:f.MonthMask[n]&=~(1<<a)}})})}(jQuery);