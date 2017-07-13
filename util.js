$("#console_wrapper").remove();
$("<div id='console_wrapper'>Request:<br><textarea id='request' rows='12' cols='90'></textarea><br>" +
  "<button id='ClearRespose'>Clear</button><button id='Execute'>Execute JS</button>" +
  "<button id='ExecuteServer'>Execute eScript</button><br>Response:<br>" +
  "<textarea rows='12' cols='90' id='response' rows='12' cols='90'></textarea>" +
  "<button id='ClearRespose'>Clear</button></div>").dialog({width:'auto'});
$("#Execute").click(function(){
  try{
  eval($('#request').val());
  }
catch(err){
console.log(err);
}
});
console.log = function(str) {$("#response").val(str);};
console.error = function(str) {$("#response").val(str);};
console.assert = function(str) {$("#response").val(str);};
