NumbersTest = function(numbers){

		this.findLargestNumber = function(){

			numbers.sort(function(a,b){return b - a});
			var biggestNumber = numbers[0]; 
			return biggestNumber;		
		}

		this.findSmallestNumber = function(){
			numbers.sort(function(a,b){return b - a});	
			var smallestNumber = numbers[numbers.length - 1]; 
			return smallestNumber;
		} 
		
		this.findAverage = function(){ 
			numbers.sort(function(a,b){return b - a});
			var sum = 0; 
			var numCount = numbers.length;
			for(i = 0; i < numbers.length; i++){
    				sum += numbers[i]; 

				} 
			var average = sum/numCount;
			return (average);
		} 

		this.findEven = function(){ 
			numbers.sort(function(a,b){return b - a});
			var evenNumbers = [];
			for(i = 0; i < numbers.length; i++){
    				if(numbers[i]%2 == 0) {
        				evenNumbers.push(numbers[i]);
    				}
			}
			return(evenNumbers); 

		} 

		this.findOdd = function(){ 
			numbers.sort(function(a,b){return b - a});
			var oddNumbers = [];
			for(i = 0; i < numbers.length; i++){
   				if(numbers[i]%2 != 0) {
        				oddNumbers.push(numbers[i]);
    				}
			} 
			return(oddNumbers);
		} 

		this.findPrime = function(){
			var sqrt = [] 
			var primeNumbers = [];
			numbers.sort(function(a,b){return a - b}); 
			function primeFinder(number){
    
    				var sqrt = Math.ceil(Math.sqrt(number));
    				var factorial = [];
    				var primeCheck = [] ;
   
    				for (i = sqrt; i > 1; i--){
        				factorial.push(i); 
        			} 
        
    				for(x in factorial){
        				if(number%factorial[x] != 0){
             					primeCheck.push(factorial[x]);
        				}   
    				}
   
    				if(primeCheck.length == factorial.length) {
        				primeNumbers.push(number);
    				} 
    
    				else{ }
 
				} 

				for (x in numbers){
   					 primeFinder(numbers[x])
				} 
				return(primeNumbers);
				}



}
