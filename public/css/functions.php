<?php 
    ob_start(); 
    echo "1:blah\n"; 
    
    echo "2:blah"; 
    // ob_get_clean() returns the contents of the last buffer opened.  The first "blah" and the output of var_dump are flushed from the top buffer on exit 
    echo ob_get_clean(); 
	
	echo "some other thitns";
    exit; 
?> 