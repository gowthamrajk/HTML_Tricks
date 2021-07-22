function validate(){
			var username = document.getElementById("username").value;
			var mail = document.getElementById("email").value;
			var password = document.getElementById("password").value;
			if(username != '')
			document.getElementById("username").style.border = "3px solid green";
		    if(mail!='')
		    document.getElementById("email").style.border = "3px solid green";
		    if(password!='')
		    document.getElementById("password").style.border = "3px solid green";
		}
		$(document).ready(function() 
		{
            $('#username').click(function()
            {
            	var username = document.getElementById("username").value;
                if (username === '') {
                    document.getElementById("username").style.border = "3px solid red";
                }
                else{
    	            document.getElementById("username").style.border = "3px solid green";
                }
            })
        });
        $(document).ready(function() 
		{
            $('#email').click(function()
            {
                var mail = document.getElementById("email").value;
                if (mail === '') {
                    document.getElementById("email").style.border = "3px solid red";
                }
                else{
    	            document.getElementById("email").style.border = "3px solid green";
                }
            })
        });
        $(document).ready(function() 
		{
            $('#password').click(function()
            {
            	var password = document.getElementById("password").value;
                if (password === '') {
                    document.getElementById("password").style.border = "3px solid red";
                }
                else{
    	            document.getElementById("password").style.border = "3px solid green";
                }
            })
        });