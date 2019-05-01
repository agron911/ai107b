var x=2;
function f(a){
    if(a===0) return 1
    else if(a===1) return 2
    else{
        f(a-1);
        x=x*2 ;   
        return x; 
    }   
    
}

console.log(f(4))