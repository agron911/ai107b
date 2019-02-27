//function f (x) { return  -1*(x^4 - 10*x^3 + 20*x^2 + 5*x + 7)  }
function f (x) { return  -1*( x*x + 4*x - 8 )  }
// function f(x) { return -1*Math.abs(x*x-4); }

var dx = 0.01

function hillClimbing (f, x) {
  while (true) {
    console.log('f(%s)=%s', x.toFixed(4), f(x).toFixed(4))
    if (f(x + dx) >= f(x)) {
      x = x + dx
    } else if (f(x - dx) >= f(x)) {
      x = x - dx
    } else {
      break
    }
  }
}

hillClimbing(f, 3.0)
