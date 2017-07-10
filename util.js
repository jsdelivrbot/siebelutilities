$("<div>Request:<br><textarea id='request' rows='12' cols='90'></textarea><br><button id='Execute'>Execute</button><br>Response:<br><textarea rows='12' cols='90' id='response' rows='12' cols='90'></textarea></div>").dialog();
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
