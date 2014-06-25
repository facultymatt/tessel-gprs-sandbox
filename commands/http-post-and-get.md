
AT+SAPBR=3,1,"CONTYPE","GPRS"
AT+SAPBR=3,1,"APN","epc.tmobile.com"

AT+SAPBR=1,1
AT+HTTPINIT
AT+HTTPPARA="CID",1

AT+HTTPPARA="URL","http://posttestserver.com/post.php?dir=mattmiller22"
AT+HTTPPARA="URL","http://www.google.com"

AT+HTTPPARA="CONTENT","application/x-www-form-urlencoded"

AT+HTTPACTION=0
AT+HTTPDATA=10,8000 // send 10 bytes in 8 seconds

param1=one

AT+HTTPTERM