
WordsUtility = function(words){

	this.countWords = function(){
			return theWords.split(" ").length;
			}; 
	
	this.longestWord = function(){

			listOfWords = theWords.split(" ");  
  
			listOfWords.sort(function(a,b){return b.length - a.length});        
 		 
			return listOfWords[0]   
			
			};

	this.averageWordLength = function(){
			var charCount = 0;
			var list1 = theWords.split(" ");
			for(x in theWords){
			 	charCount +=1	
			};		
			return ((charCount)/list1.length);
		
			};

	this.shortestWord = function(){

			var listOfWords = theWords.split(" ");
			listOfWords.sort(function(a,b){return a.length - b.length});
			return listOfWords[0];
			};

	this.wordsWithTheSameLength = function(){
		
			listOfWords = theWords.split(" "); 
		
			var dictionaryOfWords = {}; 
			for(i = 0; i < listOfWords.length; i++){
        			dictionaryOfWords[listOfWords[i].length] = [];
			} 
		

			for(x in dictionaryOfWords){
        			for(y in listOfWords){
        				if(listOfWords[y].length == x){
            					dictionaryOfWords[x].push(listOfWords[y]);
        				};
    				};
			} ;
 		
			return dictionaryOfWords[4];
		
		
		
		
		
			}; 

	this.noWordsWithTheSameLength = function(){

			return "Ndabenhle" ;	
			};  


	 
	
};
