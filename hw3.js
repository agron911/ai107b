function f (x,y) { return -1*(x*x-2*x+y*y+2*y-8)}

var dx=0.01;
var dy = 0.01;

function hillClimbing (f,x,y){
    while(true ){
        let fxy = f(x,y)
        console.log(x,y)
        if(f(dx+x,dy+y)>fxy){
            x=dx+x
            y=dy+y
            console.log("x=%f,y=%f",x,f(x,y))
        }else if(f(x-dx,dy-y)>fxy){
            x=x-dx
            y=y-dy
            
        }else
            break;
    }
    console.log("f(%s,%s)=%s",x.toFixed(4), y.toFixed(4), f(x,y).toFixed(4));
}
var i;

for(i=0;i<=10;i++){
    var a= Math.floor(Math.random()*100+1)
    var b= Math.floor(Math.random()*100+1)
    hillClimbing(f,a,b);
}

