/*function fonctionR(url, elementID){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
var myObj = this.responseText;
var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
document.getElementById(elementID).innerHTML = jsonPretty;
}
};
xmlhttp.open("GET", url, true);
xmlhttp.send();
}

function homePage(){
	url = 'http://bitcoin.mubiz.com/info';
	elementID = 'demo';
	fonctionR(url, elementID);

	url = 'http://bitcoin.mubiz.com/blockchaininfo';
	elementID = 'demo1';
	fonctionR(url, elementID);


	url = 'http://bitcoin.mubiz.com/peerinfo';
	elementID = 'demo2';
	fonctionR(url, elementID);


	url = 'http://bitcoin.mubiz.com/mininginfo';
	elementID = 'demo3';
	fonctionR(url, elementID);

}*/

$(document).ready(function() {
	$.ajax({
		url : "https://bitcoin.mubiz.com/info",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#bitcoin_block_number').append(data.blocks);
			$('#bitcoin_difficulty').append(data.difficulty);
			$('#bitcoin_version').append(data.version);
			$('#bitcoin_protocolversion').append(data.protocolversion);
			$('#bitcoin_connections').append(data.connections);
			$('#bitcoin_timeoffset').append(data.timeoffset);
		},
		error : function(xhr, status, err) {
			$('#bitcoin_block_number').append(err+" N/A");
			$('#bitcoin_difficulty').append(err+" N/A");
			$('#bitcoin_version').append(err+" N/A");
			$('#bitcoin_protocolversion').append(err+" N/A");
			$('#bitcoin_connections').append(err+" N/A");
			$('#bitcoin_timeoffset').append(err+" N/A");
		}
	});
});
