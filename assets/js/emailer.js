/* global $,document,console,Parse */
$(document).ready(function() {
	
	var parseAPPID = "XJBSqJm1MdPwImpeywaZrBVaXD8q8AvHGrA6qpIc";
	var parseJSID = "ZTTWr5jx1AfthVmrAhvum7UA086H5lMPXWX9Muqv";
	
	Parse.initialize(parseAPPID, parseJSID);
	var emailObject = Parse.Object.extend("emailObject");
	

	$("#commentForm").on("submit", function(e) {
		e.preventDefault();

		console.log("Handling the submit");
		//add error handling here
		//gather the form data

		var data = {};
		data.name = $("#name").val();
		data.email = $("#email").val();
		data.rsvp = $("#rsvp option:selected").val();
		data.number_of_people = $("#number_of_people").val();
		data.specialreqs = $("#specialreqs").val();
		data.message = $("#message").val();

		var comment = new emailObject();
		comment.save(data, {
			success:function() {
				console.log("Success");
				$('#response').html('Email successful!').addClass('success').fadeIn('fast');
			},
			error:function(e) {
				console.dir(e);
				$('#response').html('Error! Email unsuccessful!').addClass('error').fadeIn('fast');
			}
		});
	});
});
