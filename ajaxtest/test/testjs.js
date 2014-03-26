//Javascript Version:

$("#btnAjaxJs").click(function () {

	var showConsole = $("input[name='console']").is(":checked");

	if (showConsole) 
		console.log("pure JS here")
	
    $.ajax({
        async: true,
        type: "POST",
        url: "http://localhost:3000/nestedjson/",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        beforeSend: function (data) {
        	if (showConsole) 
            	console.log(" before:", data);
        },
        success: function (data) {
        	var dataStr = JSON.stringify(data);
            $("#inTextArea").val(dataStr);
            if (showConsole) 
          		console.log(" success:", data);  
          	
        },
        error: function (status) {
        	if (showConsole) 
          		console.log(" error:", status);
        }
    });
});

$("#btnClear").click(function () {
    $("textarea").val("");
    $("#result").html("<p><small>GopherJS Rocks !</small></p>");
});


$("#btnLoadJs").on("click", function() {
    var showConsole = $("input[name='console']").is(":checked");

    $("#result").load("/load.html", function() {
        if (showConsole) 
            console.log("load was performed");
    });

});


$("#btnGetJs").on("click", function() {
    $.get( "/get.html", function( data ) {
        $( "#result" ).html( data );

    });
})

$("#btnPostJs").on("click", function() {
    $.post( "/jquery", function( data ) {
        $( "#result" ).html( data );
    });
});


//getjson
$("#btnJsonJs").on("click", function() {

    $.getJSON( "/json/1", function( data ) {

        if (data.json)
            $("#inTextArea").val(data.json);
    });
})


//getscript
$("#btnGetScriptJs").on("click", function() {

    $.getScript( "/script", function( data ) {
        $("#inTextArea").val(data);
    });
})


