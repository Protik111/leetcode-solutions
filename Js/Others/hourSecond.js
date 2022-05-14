function StringChallenge(num) { 
    if(num > 59){
      let hour = 0;
      let newNum = num
      while(newNum >= 60){
        newNum = newNum - 60;
        hour ++;
      }
      let second = num - hour*60;
      return hour + ' : ' + second;
    }else {
      return 0 + ' : ' + num;
    }
  
  }
     
console.log(StringChallenge(120));