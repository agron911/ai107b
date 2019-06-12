var log = console.log

var maze = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,0,0,0,0,0,0,1,0,0,1],
    [1,0,1,0,1,1,1,1,0,1,1,0,1],
    [1,0,0,0,0,0,0,1,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,0,1,1,0,1],
    [1,0,0,1,0,0,0,0,1,0,1,0,1],
    [1,0,1,1,0,1,1,1,0,0,0,1,1],
    [1,0,0,0,0,0,0,0,0,1,0,9,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1]
]

function neighbor(x,y,m){
    var a=[
        [x,y+1],
        [x,y-1],
        [x+1,y],
        [x-1,y]
    ]
    var result = []
    var record = []
    for(i of a){
        // log("a",i)
        if(m[i[0]][i[1]]!=1 ) {
            for(j of result){
                if(j==i){
                    log("J:",j," ,i:", i)
                }
            log("J:",j," ,i:", i)

            }

            result.push(i)
            

        }
    }
    log(result)
    return result;
    
}

function judge(m,x,y){
    
    var array = neighbor(x,y,m)
    if(m[i[0]][i[1]] ==9) return 0
    for(i of array){
        judge(m,i[0],i[1])
        log(i)
        
    }
}
// console.log(maze[1][1])
judge(maze,1,1)
// neighbor(1,1,maze)



