// var ship = [0,0,0,0]//人郎洋菜

var g={
    son:[0,0,0,0],
    parent:[],
    }

var visit={}

var obj={}
// console.log(neighbor([1,1,0,0]))
function neighbor(array){
    var end=[];
    end.push(change(array,0))
    for(let i=1;i<4;i++){
        var copy = array.slice(0)
       end.push(change(copy,i))
    //    console.log(end)
    }
    return end   
}
function change(g,a){
    if(g[a]==0){
        g[a]=1
    }else {
        g[a]=0
    }
    return g
}
var array=[g]
var flag = 0
function search(array){
    var obj = array.shift()
    if(flag == 1) return 
    console.log(obj.son.toString())
    if(obj.son.toString()==[1,1,1,1].toString()) { flag=1}
    var sons = neighbor(obj.son)
    
    for(let i of sons){
        deter(i,obj.son,obj.count)
    }
}
function deter(ship,parent,count){
    if(visit[ship.toString()]!=true){
if(ship[1]==ship[3] && ship[2]!=ship[1]){
    array.push({son:ship,parent:parent})
    visit[ship.toString()]=true
    search(array)
}else if(ship[0]==ship[1]&&ship[1]==ship[2]){
    array.push({son:ship,parent:parent})
    visit[ship.toString()]=true
    search(array)
}else if(ship[0]==ship[2]&&ship[2]==ship[3]){
    array.push({son:ship,parent:parent})
    visit[ship.toString()]=true
    search(array)
}

}
}
search(array)
