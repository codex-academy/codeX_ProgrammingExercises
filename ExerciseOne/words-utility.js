//var theWords = "A Unit Test is a piece of code that is using your code, exercising some scenarios that it expects to work in a certain way. Unit tests are isolated from external dependencies unlike integration tests. We will focus on Unit Tests.";




 WordsUtility = function(words){

       

	this.countWords = function(){

        var numberOfWords= words.split(" ").length;
		return words.split(" ").length;
	}

	this.longestWord = function(){
		// describe step one

		// describe step two

		// describe step three

		// return the longest word
		var longWord = "";
       var wordCollection=words.split(" ");
        for(i =0; i < wordCollection.length; i++){
        if(longWord.length < wordCollection[i].length){
           longWord = wordCollection[i];
          }
          }

   		return longWord

       //return "dependencies";
	
	}
       
 

        this.averageWordLength= function(){
      		var numberOfWords= words.split(" ").length;
      		var wordCollection=words.split(" "); 

      		//go to each word and find it's length
      		// add this length to a variable initialized out side of the loop - totalLength for example

      		//once done divide totalLength with numberOfWords
      		var totalLength=wordCollection.join("+").length;
      		for(i=0;i<1;i++){

      			return totalLength/ numberOfWords
      		}

       		
		}

         this.wordsWithTheSameLength= function(){
           var wordCollection=words.split(" ");
           var SameLength={};

        for(i=0;i<wordCollection.length;i++){
 
          var Lang = wordCollection[i].toLowerCase();
            if(!SameLength[Lang.length]){
         SameLength[Lang.length]=[];
  }
         SameLength[Lang.length].push(Lang);
  
}

      
      return SameLength;
         }

 



        this.shortestWord= function(){
       var wordCollection=words.split(" ");
       
       var shortWord = wordCollection[wordCollection.length-1];
    
     for(i =0; i < wordCollection.length; i++){
     if(shortWord.length > wordCollection[i].length){
           shortWord = wordCollection[i];
           
          }
        
           
        }
       
 return shortWord;
          
      }


      


 

      this.mostWordsEndWith= function(){
      	  
           var wordCollection=words.split(" ");
           var EndWith={};

 
          for(i=0;i<wordCollection.length;i++){
          var letter=wordCollection[i].charAt(wordCollection[i].length-1).toLowerCase();
            if(letter==="."||letter==","){
              letter=wordCollection[i].charAt(wordCollection[i].length-2).toLowerCase();
                    }
            if(!EndWith[letter]){
                  EndWith[letter]=[];
 
              }
    EndWith[letter].push(letter);
   
   
         }
   
 
return  letter
}

     this.mostWordsStartWith= function(){

      
       var wordCollection=words.split(" ");
       
var StartWith={};


for(i=0;i<wordCollection.length;i++){
 
  var letter=wordCollection[i][0].toLowerCase();
  if(!StartWith[letter]){
  StartWith[letter]=[];
  }
    StartWith[letter].push(wordCollection[i]);

}


      
      return letter;
  
	}



}