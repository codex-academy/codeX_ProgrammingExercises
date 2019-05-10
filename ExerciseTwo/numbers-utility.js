
NumbersUtility = function(theNumbers){

         var amountOfNumbers= theNumbers.length;
        var myNumbers= theNumbers.sort()
	this.countNumbers = function(){
		return myNumbers.length;
	}

	this.biggestNumber = function(){
		
       var bigNumber=0;
       for(i=0;i< myNumbers.length;i++){
           if(bigNumber <myNumbers[i]){
                 bigNumber=myNumbers[i]
 

              }  
         }

  return bigNumber; 

}
           

		
         


	}

        this.averageNumber= function(){
     
		var amountOfNumbers= myNumbers.length;
    var totalOfNumbers=0;
        for(i=0;i< myNumbers.length;i++){
            totalOfNumbers +=myNumbers[i]
     }
      return totalOfNumbers / amountOfNumbers;
	}

         this.primeNumbers= function(){





}

        this.smallestNumber= function(){

      var smallNumber=0;
         for(i=0;i< myNumbers.length;i++){
            if(myNumbers[i] > smallNumber){
                smallNumber=myNumbers[i]
         }
      }
     return smallNumber;

} 

      this.evenNumbers= function(){
      var even=0;
         for(i=0;i< myNumbers.length;i++){
            if(theNumbers[i] % 2 === 0){
              even=theNumbers[i]
         }
  }
    return even;
}

     this.UnevenNumbers= function(){

       var uneven=0;
      for(i=0;i< myNumbers.length;i++){
        if(myNumbers[i] % 2 !== 0){
          uneven=myNumbers[i]

            }
         }
return uneven;
      }
}
