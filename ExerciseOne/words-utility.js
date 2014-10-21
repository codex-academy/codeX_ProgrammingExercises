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
           var sameLength = 0;
             var sameCollection=[]
              var wordCollection=words.split(" "); 
         for(i=0;i<wordCollection; i++){
            if(sameLength.length=wordCollection[i].length){
              sameCollection.push(i);i++;
              //return sameLength[].length;
              //return 
               }
            }
            return sameCollection[i]
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
      	   var EndWith=0;
           var wordCollection=words.split(" ");
           for(i=0;i<wordCollection.length;i++){
           if(EndWith.length === wordCollection[i].length-1){
               EndWith=wordCollection[i]

           }


           }
return  EndWith
}

     this.mostWordsStartWith= function(){

       StartWith=0;
       var wordCollection=words.split(" ");
       
       //for(){}
	}



}