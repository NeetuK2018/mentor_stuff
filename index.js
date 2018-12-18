const totalMultiples = (nums) => {
    
    function add (acc,num) {
        console.log(acc,'acc');
        console.log(num,'num');

        return acc + num;
    }
    
   const sum = nums.reduce(add,0);
}

totalMultiples([10,3,5,7,19,100]);