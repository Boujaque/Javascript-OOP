function StopWatch()  {
    let startTime  = 0;
    let stopTime = 0;
     let  isRunning = false;
     let duration = 0;

    this.start = function() {
        if (isRunning) 
         throw new Error ('StopWatch already started.');
          startTime   = new Date();
          console.log(startTime.getTime())
          isRunning = true;
     
      }
    
  
  this.stop =  function () {
        if (!isRunning) 
          throw new Error ('StopWatch already stopped.');
          stopTime   = new Date();
          console.log(stopTime.getTime())
          const seconds = (stopTime.getTime() - startTime.getime())/1000;
          duration += seconds;
          isRunning = false;
      }
   
    
  this.reset =  function() {
      startTime  = null;
      stopTime = null;
      isRunning = false;
      duration =  0;
    }
   
  
    Object.defineProperty(this, 'duration', {
    get :function() {    
     return duration;
    }  
    
  });  
}
// const sw = new StopWatch();
