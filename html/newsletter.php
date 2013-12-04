<?php
$to="demo@yourcompany.com";
/*Your Email*/
$subject="Suscription from the website";
/*Issue*/
$date=date("l, F jS, Y");
$time=date("h:i A");
$email=$_REQUEST['email'];
$name=$_REQUEST['name'];

$msg="
	
	Suscription request from website on date  $date, hour: $time.\n
	
	Name: $name\n
	Email: $email\n
	
	";
if($email=="" or $name=="") {
echo "<div class='alert alert-error'>
		  <a class='close' data-dismiss='alert'>×</a>
		  <strong>Warning!</strong> Please fill all the fields.
	  </div>";
} else {
mail($to,$subject,$msg,"From:".$email);
echo "<div class='alert alert-success'>
		  <a class='close' data-dismiss='alert'>×</a>
		  <strong>Thank you for your message!</strong>
	  </div>";
}
?>
