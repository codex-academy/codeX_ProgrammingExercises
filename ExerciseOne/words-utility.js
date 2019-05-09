
WordsUtility = function(theWords){

	this.countWords = function(){
		return theWords.split(" ").length;

	}
   

	this.longestWord = function(){
		var list1 = theWords.split(" "); 
		var longestWord = " "
		for (i=0; i < list1.length; i++){
			if (list1[i].length > longestWord.length){
				 longestWord = list1[i]; 
				
			}
    	}
     return(longestWord);	
	}


	this.averageWordLength = function(){

		var list1 = theWords.split(" ");

		var list1 = thewords.length;
   		var totalCharacters = 0;
    	for(var i = 0; i < theWords; i++)
         	totalCharacters = totalCharacters + words[i].length();

    return (theWords);
	
		}
	this.shortestWord =function(){
	 var list1 = theWords.split(" "); 
		var shortestWord = "xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		for (i=0; i < list1.length; i++){
			if (list1[i].length < shortestWord.length){
				 shortestWord = list1[i]; 
				
			}
    	}
     return(shortestWord);	   
   

   }
};