AT+CGATT?
AT+CGATT=1
AT+CIPSHUT=?
AT+CIPSTATUS
AT+CIPMUX=0
//AT+CGDCONT=1,"IP","epc.tmobile.com"
AT+CSTT="epc.tmobile.com","",""
AT+CIICR // Now bring up the wireless.
AT+CIFSR // test by getting the local IP address.
AT+CIPSTART= "UDP" , "http://sp-push-server-demo.nodejitsu.com", "80" 
AT+CIPSTART= "TCP" , "echo.websocket.org", "80"
AT+CIPSEND 

testing123 // send at prompt