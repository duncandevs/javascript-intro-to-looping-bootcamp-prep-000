function forLoop(array){
  for(var i = 0; i <= 25; i++){
    if(i === 1){
      array.push("I am 1 strange loop");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
}

function whileLoop(num){
  let countdown = num;
  
  while(countdown >= 0){
    console.log(countdown);
    countdown-=1;
  }
  return "done";
}

function doWhileLoop(array){
  do {
    array.pop();
  } while (maybeTrue() && array.length>=0);
  
  function maybeTrue() {
    return Math.random() >= 0.5
  }
}