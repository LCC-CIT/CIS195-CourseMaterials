/**
 *  ==================================================
 *  SoftChalk LessonBuilder
 *  Copyright 2016 SoftChalk LLC
 *  All Rights Reserved.
 *
 *  http://www.softchalk.com
 *  ==================================================
 *
 *  File date: 5/25/2016
 */

// to display QPs, Quiz Groups, Activities in a modal dialog window
$.fn.isOnScreen = function(){
    var element = this.get(0);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}
$(document).ready(function(){
    function resize() {
        var _el = $('#' + $('.current_modal').attr('id'));
        if (!_el[0]) return;

        var opener_img = $("a[ref='" + $('.current_modal').attr('id') + "']");
        if(opener_img.length>0){
            var adjusted = getAdjustedHeightPlacement(opener_img);             
        }

        _el.dialog('option', 'width', 'auto');
       
        if(typeof(adjusted) != 'undefined' && typeof(adjusted.height) == "string"){
            _el.dialog('option', 'height', 'auto');
        
            var bounds = _el[0].getBoundingClientRect();
            var parentBounds = _el.parent()[0].getBoundingClientRect();
            var width = parentBounds.width, height = parentBounds.height;
            
            if (window.innerWidth - width < 0) {
                width = Math.min(window.innerWidth - 30, width);
                _el.dialog('option', 'width', width);
            }

            //gotta leave space for quizpopper feedback
            if (window.innerHeight - height < 200) {
                height = Math.min(window.innerHeight - 30, height);
                _el.dialog('option', 'height', height);
            }
        } else {
            //var bounds = _el[0].getBoundingClientRect();

            _el.dialog('option', 'height', adjusted.height);
        }

        _el.dialog('option', 'position', { my: "center", at: "center", of: window, collision: "none"});
        if(_el.isOnScreen()){
            console.log('we can see it'); 
        } else {
            console.log('we cannot see it'); 
        }
        
        onModalDimensionChange.bind(_el)();
    }
    function getAdjustedHeightPlacement(modal_opener){
        // set defaults
        adjusted = {} 
        adjusted.height = "auto";
        adjusted.resizable = true;
        adjusted.draggable = true;

        // check if we're inside of ATB EPUB reader
        try {
            var frames = window.top.document.getElementsByTagName('iframe');
            if(frames.length>0){
                if(frames[0].getAttribute('id') == 'epubContentIframe'){
                    var icon = modal_opener.find('img').attr('src');
                    if(typeof(icon) != 'undefined'){
                        act_type = icon.match(/\d+/g)
                        donny_acts = [200,201,202,203,204,205]
                        if (act_type != null && act_type[0] && donny_acts.indexOf(parseInt(act_type[0])) > -1){
                            adjusted.height = $(window).height() * 0.97;
                        } 
                    } else {
                        console.log('opener is text, not image');
                        console.log(modal_opener);
                        if(modal_opener[0].hasAttribute('ref')) {
                            if(modal_opener.attr('ref').indexOf('quizpopper') > -1){
                                console.log('text opened quizpopper'); 
                            } else if(modal_opener.attr('ref').indexOf('activityref_') > -1) {
                                console.log('text opened activity'); 
                            }
                        } 
                    }
                    adjusted.resizable = false;
                    adjusted.draggable = false;
                }
            }
        } catch (e) {
            console.log(e);
        }
        return adjusted
    }
    $(window).resize(function() {
        $(this).trigger('resizeEnd');
    });
    function onModalDimensionChange(e, ui) {
        $(this).trigger('isVisible');
        $(this).find('.greymatter-inner').trigger('isVisible'); //in case someone changes the template
    }
    $(window).bind('resizeEnd', resize);
    $('.openModal').css('cursor','pointer');
    $('.openModal').bind('click touchend', function(e){
        var target = $(this).attr('ref');
        
        // check type and resize accordingly
        var adjusted = getAdjustedHeightPlacement($(this));

        $("#" + target).dialog({
            resizable: adjusted.resizable,
            draggable: adjusted.draggable,
            width : "auto",
            height: adjusted.height,
            minWidth: 0,
            modal: true,
            position: { my: "center", at: "center", of: window},
            open: function(e, ui) {
                $(this).trigger('isVisible');
                $(this).addClass('current_modal');
                resize();
                try {
                    $('.act-wrap')[0].style.setProperty('min-width', '0px', 'important'); 
                } catch(e) {
                    console.log('no act-wrap classes to modify');
                }
                try {
                    $('.act-wrapper')[0].style.setProperty('min-width', '0px', 'important'); 
                } catch(e) {
                    console.log('no act-wrapper classes to modify');
                }
                //$('.current_modal').dialog("option", "position", { my: "center", at: "center", of: window, collision: "none"});
            },
            beforeClose: function(e, ui){
                if (e.originalEvent && e.originalEvent.originalEvent && e.originalEvent.originalEvent.type == "click") {
                    $(this).removeClass('current_modal');
                }
                $(this).trigger('isHidden');
            },
            close: function (e, ui) {
                $(this).dialog('destroy');
            },
            resizeStop: onModalDimensionChange,
            dragStop: onModalDimensionChange
        });
        e.preventDefault();
        return false;
    });
});
