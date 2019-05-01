var sum=1;
function f(a){
    
    if(a==1){
        console.log('a=',1)
        return 1
    }else{
        console.log('a=',a)
        f(a-1);
        sum=sum*a;
        console.log('sum=',sum)
        return sum
    }
}
f(5)

//recursion

function ff(n){
    if(n===1) return 1
    console.log('n=',n)
    let
}