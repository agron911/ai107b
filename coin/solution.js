var Solution = require("./Cnumber.js");         // 引入解答類別

var courses = [
  {coin:'500'},{coin:'100'},{coin:'50'},{coin:'10'},{coin:'5'},{coin:'1'}
]

var w=[0,0,0,0];
var slots = [
  'A11', 'A12', 'A13', 'A14', 'A15', 'A16'
]
var cols = 7

function randInt(a, b) {
  return a + Math.floor(Math.random()*(b-a))
}

function randSlot() {
  return randInt(0, slots.length)
}

function randCourse() {
  return randInt(0, courses.length)
}

Solution.init = function () {
  let fills = []
  for (let i=0; i<slots.length; i++) {
    fills[i] = randCourse()
  }
  return fills
}

Solution.toA = function (x) {
  var mo= [x,0,0,0]

  return mo
}

Solution.prototype.neighbor = function() {    // 單變數解答的鄰居函數。
  var i, j, t,a;
  let mo=mo;
  let money= this.v;
  let fills = this.v.slice(0)
  for(a=0;a<fills.length;a++){
    fills[a];
    
  }
  let choose = randInt(0, 2)
  switch (choose) {
    case 0: // 任選一個改變 
      i = randSlot()
      fills[i] = randCourse()
      break
    case 1: // 任選兩個交換
      i = randSlot()
      j = randSlot()
      t = fills[i]
      fills[i] = fills[j]
      fills[j] = t
      break
  }
  return new Solution(fills)                  // 建立新解答並傳回。
}

Solution.prototype.energy = function() {      // 能量函數
  let courseCounts = new Array(courses.length)
  let fills = this.v
  let score = 0
  courseCounts.fill(0, 0, courses.length)
  for (let si=0; si<slots.length; si++) {
    courseCounts[fills[si]] ++
    if (si < slots.length-1 && fills[si] == fills[si+1] /*連續上課:好*/ && si%7 != 6 /*隔天:不好*/ && si%7 != 3 /*跨越中午:不好*/)
      score -= 0.1 /* 連續上課:好 -- 能量降低 */
    if (si % 7 == 0 && fills[si] != 0) /* 早上 8:00: 不好 (能量提高)*/
      score += 0.12
  }
  for (let ci=0; ci<courses.length; ci++) {
    if (courses[ci].hours >= 0)
      score = score + Math.abs(courseCounts[ci]-courses[ci].hours) // 課程總時數不對: 不好 (能量提高)
  }
  return score
}

Solution.prototype.toString = function() {    // 將解答轉為字串，以供印出觀察。
  let outs = [], fills = this.v
  for (let i=0; i<slots.length; i++) {
    let c = courses[fills[i]]
    if (i%7==0) outs.push('\n')
    outs.push(slots[i] + ':' + c.name)
  }
  return 'score=' + this.energy().toFixed(3) + outs.join(' ') + '\n\n'
}

module.exports = Solution;                    // 將解答類別匯出。

/*
var courses = [
  {teacher: '  ', name:'　 ',  hours: -1},
  {teacher: '甲', name:'甲1', hours: 3},
  {teacher: '甲', name:'甲2', hours: 3},
  {teacher: '甲', name:'甲3', hours: 3},
  {teacher: '乙', name:'乙1', hours: 3},
  {teacher: '乙', name:'乙2', hours: 3},
  {teacher: '乙', name:'乙3', hours: 3},
  {teacher: '乙', name:'乙4', hours: 3},
  {teacher: '丙', name:'丙1', hours: 3},
  {teacher: '丙', name:'丙2', hours: 3},
  {teacher: '丙', name:'丙3', hours: 3},
  {teacher: '丁', name:'丁1', hours: 3},
  {teacher: '丁', name:'丁2', hours: 3},
  {teacher: '丁', name:'丁3', hours: 3},
  {teacher: '丁', name:'丁4', hours: 2},
  {teacher: '丁', name:'丁5', hours: 2},
  {teacher: '戊', name:'戊1', hours: 3},
  {teacher: '戊', name:'戊2', hours: 3},
  {teacher: '戊', name:'戊3', hours: 3},
  {teacher: '戊', name:'戊4', hours: 5},
  {teacher: '戊', name:'戊5', hours: 4},
]
*/