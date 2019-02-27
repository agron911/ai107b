function f (x) { return  -1*(x*x*x*x - 10*x*x*x + 20*x*x + 5*x + 7)  }
// function f (x) { return  -1*( x*x + 4*x - 8 )  }
// function f(x) { return -1*Math.abs(x*x-4); }

var dx = 0.01

function hillClimbing (f, x) {
  while (true) {
   
    if (f(x + dx) >= f(x)) {
      x = x + dx
    } else if (f(x - dx) >= f(x)) {
      x = x - dx
    } else {
      break
    }
  }
  console.log('f(%s)=%s', x.toFixed(4),-1* f(x).toFixed(4))

}
 for(var i=0;i<100;i++ ){
var a=Math.floor(Math.random()*10+1);

hillClimbing(f, a);
 }

// var b;var max=0;

    
    
    
//     if(b<max){
//         max=b;
//     }
//     console.log(max);




