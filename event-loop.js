// This file contains the pseudo logic to illustrate how event loop is executed
// We start with this commend: node myFile.js

// There array/queue here to store different types of work to be done:
const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

function shouldContinue() {
  // Check one: any pending setTimeout, setInterval, setImmediate?
  // Check two: Any pedning OS tasks? (Like server listening on port)
  // Check three: Any pending long running operations? (Like fs module)
  
  return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

// Entire body executes in one 'tick'
while ( shouldContinue()) {
  // 1) Node looks at pendingTimers and see if any functions are ready to be called. setTimeout, setInterval
  
  // 2) Node looks at pendingOSTasks and pendingOperations and call relevent callbacks
  
  // 3) Pause execution insted of running the next loop ASAP. Continue when:
  //  - a new pendingOSTask is done
  //  - a new pendingOperation is done
  //  - a timer is about to complete
  
  // 4) Look at pendingTimers. Call any setImmediate
  
  // 5) Handle any 'close' events (clean up)
}

// exit back to terminal
