 <?php
 $db = mysql_connect("localhost","admin","admin"); 
 if (!$db) {
 	die("Database connection failed miserably: " . mysql_error());
 }
 else {
 	echo("Success!");
 }

$db_select = mysql_select_db("mydb",$db);
 if (!$db_select) {
 	die("Database selection also failed miserably: " . mysql_error());
 }
 else {
 	echo("Connected to mydb");
  }
?>