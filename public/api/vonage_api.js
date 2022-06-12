// replace these values with those generated in your Video API account
var apiKey = "47519551";
var sessionId = "1_MX40NzUxOTU1MX5-MTY1NTAyMjc2NDk5MX5iWDRQWjJuM3gzSCt4bXdNODUvS0ZWczF-fg";
var token = "T1==cGFydG5lcl9pZD00NzUxOTU1MSZzaWc9NmVmZjBmNzQ3ZThlZTBmOTJlNDNlOTAxYWQ2YmY0MzQ0NjMyNWI5NTpzZXNzaW9uX2lkPTFfTVg0ME56VXhPVFUxTVg1LU1UWTFOVEF5TWpjMk5EazVNWDVpV0RSUVdqSnVNM2d6U0N0NGJYZE5PRFV2UzBaV2N6Ri1mZyZjcmVhdGVfdGltZT0xNjU1MDIzMjk1Jm5vbmNlPTAuOTM3MDM0Mzk4ODg4OTYwNSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNjU1MTA5Njk1JmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
    if (error) {
      alert(error.message);
    }
  }
  
  function initializeSession() {
    var session = OT.initSession(apiKey, sessionId);
  
    // Subscribe to a newly created stream
    session.on('streamCreated', function(event) {
        session.subscribe(event.stream, 'subscriber', {
          insertMode: 'append',
          width: '100%',
          height: '100%'
        }, handleError);
      });
  
    // Create a publisher
    var publisher = OT.initPublisher('publisher', {
      insertMode: 'append',
      width: '100%',
      height: '100%'
    }, handleError);
  
    // Connect to the session
    session.connect(token, function(error) {
      // If the connection is successful, publish to the session
      if (error) {
        handleError(error);
      } else {
        session.publish(publisher, handleError);
      }
    });
  }