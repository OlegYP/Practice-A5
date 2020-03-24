// const dataURL = "https://api.myjson.com/bins/jcmhn";
const dataURL = "ryaba.json";
const fields = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
]

function GetValues() {
	let obj = {};
	fields.forEach(function(field){
		obj[field] = $("input[name=" + field+"]")[0].value ;
		}
	)
	return obj;
}

function handleButton(event) {
	$.getJSON(dataURL, handleData);
	//
	$("form").hide();
	event.preventDefault();
	$("#button-back").show();
}
function handleBack(event)
{
  $("#button-back").hide();
  $("#result").html("");
  $("form").show();
  event.preventDefault();
}

function handleData(data) {
	let Message = "";
	let obj = GetValues();

	data["text"].forEach(function(item){
		for (key in obj) {
			item = item.replace("{" + key + "}", obj[key]);
			}
		Message = Message + item +'<BR>' ;
		}
	);

	$("#result").html(Message);
}

function init() {
	$("#button-fetch").click(handleButton);
	$("#button-back").click(handleBack).hide();
}

$(document).ready(init);
