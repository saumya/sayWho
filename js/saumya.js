//init Foundation
$(document).foundation();
//listen for jQuery 'ready'
$(document).ready(function(){
  /*
  var v = flashUtil.getFlashVersion();
  var message = '';
  if(v==='Disabled'){
    message = 'No FlashPlayer detected.';
  }else{
    message = 'Running FlashPlayer Version '+flashUtil.getFlashVersion()+' .';
  }
  $("#flashplayerinfo").text(message);
  */
  //
  $("#idGameOn").on('click',function(event){
    event.preventDefault;
    //console.log(event);
    //load the game
    var aURL = 'js/gameSayWho.js';
    $.getScript( aURL )
      .done(function( script, textStatus ) {
        //console.log( 'SUCCESS : GameEngine Load',textStatus );
        $('#idGameOn').text('Loading Enigne. Please wait.');
      })
      .fail(function( jqxhr, settings, exception ) {
        //$( "div.log" ).text( "Triggered ajaxError handler." );
        console.log('FAIL : GameEngine Load',jqxhr);
        console.log('settings',settings);
        console.log('exception',exception);
        $('#idGameOn').text('ERROR : Loading Enigne. Please, Try Again.');
    });
    //return false
    return false;
  });
});
//Flash Utility
var flashUtil = {
  getFlashVersion: function(){
    // ie
    try {
      try {
        // avoid fp6 minor version lookup issues
        // see: http://blog.deconcept.com/2006/01/11/getvariable-setvariable-crash-internet-explorer-flash-6/
        var axo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6');
        try { axo.AllowScriptAccess = 'always'; }
        catch(e) { return '6.0.0'; }
      } catch(e) {
        // Donot return here.
        console.log('Tried and failed with ERROR',e);
      }
      return new ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, '.').match(/^\.?(.+)\.?$/)[1];
    // other browsers
    } catch(e) {
      try {
        if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){
          return (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ".").match(/^\.?(.+)\.?$/)[1];
        }
      } catch(e) {
        // Donot return here.
        console.log('Tried and failed with ERROR',e);
      }
    }
    return "Disabled";
  }
};


