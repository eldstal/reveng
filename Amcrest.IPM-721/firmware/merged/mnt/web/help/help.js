var isIE = navigator.appName.indexOf("Microsoft") != -1;

function $(id) {
    return document.getElementById(id);
}

function onloadsuccess() {
    var search = window.location.search.split('=');
    if ((search[1] || '').contains('2')) {
        if ($('help_wifi')) {
            $('help_wifi').style.display = 'none';
        }
        if ($('help_camera')) {
            $('help_camera').style.display = 'none';
        }
        if ($('help_3g')) {
            $('help_3g').style.display = 'none';
        }
        if ($('help_ad$ldap')) {
            $('help_3g').style.display = 'none';
        }
    } else {
        if ($('help_wifi')) {
            $('help_wifi').style.display = '';
        }
        if ($('help_camera')) {
            $('help_camera').style.display = '';
        }
        if ($('help_3g')) {
            $('help_3g').style.display = '';
        }
        if ($('help_ad$ldap')) {
            $('help_3g').style.display = '';
        }
    }

}

function addSeachParams() {
    var search = window.location.search;
    if (search) {
        $$('a').each(function(ele) {
            var href = ele.get('href');
            if (href && href != 'javascript:;') {
                ele.set('href', href + search);
            }
        });
    }
}

function back() {
    var curDevice = window.location.search || '',
        url = window.location.href.split('/help')[0];   

    if(window.location.href.contains('SimpChinese')) {
        location.href = url +'/help/SimpChinese/help.htm' +curDevice+'';    
    } else {
        location.href = url + '/help/English/help.htm' +curDevice+'';
    }
}

function previewHelp() {
    var curDevice = window.location.search.split('=');
    if ((curDevice[1] || '').contains('2')) {
        if ($('help_preview_remark')) {
            $('help_preview_remark').style.display = '';
        }
        if ($('help_preview_gesture')) {
            $('help_preview_gesture').style.display = '';
        }
        if ($('help_preview_ptz')) {
            $('help_preview_ptz').style.display = '';
        }
        if ($('help_preview_ivs')) {
            $('help_preview_ivs').style.display = '';
        }
        if ($('help_preview_focus')) {
            $('help_preview_focus').style.display = 'none';
        }
        if ($('help_preview_easyfocus')) {
            $('help_preview_easyfocus').style.display = 'none';
        }
        if ($('help_preview_image')) {
            $('help_preview_image').style.display = 'none';
        }
        if ($('focusZoomSet')) {
            $('focusZoomSet').style.display = 'none';
        }
    } else {
        if ($('help_preview_remark')) {
            $('help_preview_remark').style.display = 'none';
        }
        if ($('help_preview_gesture')) {
            $('help_preview_gesture').style.display = 'none';
        }
        if ($('help_preview_ptz')) {
            $('help_preview_ptz').style.display = 'none';
        }
        if ($('help_preview_ivs')) {
            $('help_preview_ivs').style.display = 'none';
        }
        if ($('help_preview_focus')) {
            $('help_preview_focus').style.display = '';
        }
        if ($('help_preview_easyfocus')) {
            $('help_preview_easyfocus').style.display = '';
        }
        if ($('help_preview_image')) {
            $('help_preview_image').style.display = '';
        }
        if ($('focusZoomSet')) {
            $('focusZoomSet').style.display = '';
        }

    }
}

function alarmSetHelp() {
    var curDevice = window.location.search.split('=');
    if ((curDevice[1] || '').contains('2')) {
        $('flash_Set_title') && ($('flash_Set_title').style.display = 'none');
        $('flash_Set') && ($('flash_Set').style.display = 'none');
    } else {
        $('flash_Set_title') && ($('flash_Set_title').style.display = '');
        $('flash_Set') && ($('flash_Set').style.display = '');
    }

}

function audioSetHelp() {
    var curDevice = window.location.search.split('=');
    if ((curDevice[1] || '').contains('2')) {
        $$('#audio_helpFrequencyShow, #audio_helpmanagerShow').setStyle('display', 'none');
    }
}

function encodeHelp() {
    var curDevice = window.location.search.split('=');
    if ((curDevice[1] || '').contains('2')) {
        $('encode_720pshow') && ($('encode_720pshow').style.display = 'none');
    } else {
        $('encode_720pshow') && ($('encode_720pshow').style.display = '');
    }
}

function ptzHelp() {
    var curDevice = window.location.search.split('=');
    if ((curDevice[1] || '').contains('2')) {
        if ($('help_ptz_move')) {
            $('help_ptz_move').style.display = '';
        }
        if ($('help_ptz_pan')) {
            $('help_ptz_pan').style.display = '';
        }
    } else {
        if ($('help_ptz_move')) {
            $('help_ptz_move').style.display = 'none';
        }
        if ($('help_ptz_pan')) {
            $('help_ptz_pan').style.display = 'none';
        }
        if ($('joystick')) {
            $('joystick').style.display = 'none';
        }
    }
}
function videoDetectHelp()
{
	var curDevice = window.location.search.split('=');
	if((curDevice[1] || '').contains('2')) {
		$('videoSpe1') && ($('videoSpe1').style.display = 'none');
		$('videoSpe2') && ($('videoSpe2').style.display = 'none');
		$('videoSpe3') && ($('videoSpe3').style.display = 'none');
		$('videoSpe4') && ($('videoSpe4').style.display = 'none');
	} else {
		$('videoSpe1') && ($('videoSpe1').style.display = '');
		$('videoSpe2') && ($('videoSpe2').style.display = '');
		$('videoSpe3') && ($('videoSpe3').style.display = '');
		$('videoSpe4') && ($('videoSpe4').style.display = '');
	}
}
window.addEvent('domready', function() {
    addSeachParams();
});