$("<div>Request:<br><textarea id='request'></textarea><br>Response:<br><textarea id='response'></textarea><br><button id='Execute'>Execute</button></div>").dialog();
$("#Execute").click(function(){eval($('#request').val());});
console.log = function(str) {$("#response").val(str);};
console.error = function(str) {$("#response").val(str);};
console.assert = function(str) {$("#response").val(str);};
