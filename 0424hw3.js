const h=0.01;

function df(f,x,n){
    
    if(n==0) return f(x)
    else {
        return (df(f,x+h,n-1)-df(f,x,n-1))/h
    }
}

function f(x){
    return Math.exp(x); 
}
// var x=2
for(let i=0;i<=5;i++){
    console.log('df(f,1,i)=',df(f,1,i))
   
}