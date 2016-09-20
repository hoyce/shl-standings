# shl-standings
A Node.js based web application for showing SHL standings and statistics.

To get access to the SHL.se API go to http://doc.openapi.shl.se/ and follow the instructions. 

## Get going...
```bash
$ git clone git@github.com:hoyce/shl-standings.git
```
Copy the content in /config/localSettings.js.in, create a file named /config/localSettings.js and paste the content into it.
Then add the id and secret into the configuration.
 
```bash
$ cd shl-standings

$ ./start.sh
```