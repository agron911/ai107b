var hillClimbing = require("./coin.js");      // 引入爬山演算法類別
var solutionScheduling = require("./solution.js");    // 引入排課系統

var hc = new hillClimbing();      
var mo=process.argv[2];  
var TOA = solutionScheduling.toA(mo); 
var fill = solutionScheduling.init()                // 建立爬山演算法物件
// 執行爬山演算法 (從「解答(x,y,z)=(1,1,1)」開始尋找, 最多十萬代、失敗一千次就跳出。
var s = new solutionScheduling(fill)
// hc.run(s, 10, 1000);
hc.run(s, 100000, 1000)