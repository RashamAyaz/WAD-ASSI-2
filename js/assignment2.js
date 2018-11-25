function formvalidatefunc()                                    
{ 
    var fname = document.forms["RegForm"]["FName"];     
	var lname = document.forms["RegForm"]["LName"];               
    var email = document.forms["RegForm"]["EMail"];    
      
	
    if (fname.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        fname.focus(); 
        return false; 
    } 
   if (lname.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        lname.focus(); 
        return false; 
    } 
	
	if (fname.length > 50)                                  
    { 
        window.alert("Please enter character less than 50."); 
        fname.focus(); 
        return false; 
    } 
   if (lname.length > 50)                                  
    { 
        window.alert("Please enter character less than 50."); 
        lname.focus(); 
        return false; 
    } 
    
    
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
    
	
	if (!validateEmail(email.value))                                  
    { 
        window.alert("Please enter valid email."); 
        email.focus(); 
        return false; 
    }
   
   
    return true; 
}


function validateEmail(email) 
{
    var re = /\S+@\S+/;
    return re.test(email);
}
	