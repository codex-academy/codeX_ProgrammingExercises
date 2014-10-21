
var theWords = "A Unit Test is a piece of code that is using your code, exercising some scenarios that it expects to work in a certain way. Unit tests are isolated from external dependencies unlike integration tests. We will focus on Unit Tests.";


QUnit.test( "test if words are counted correctly", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);
	assert.equal(wordsUtility.countWords(), 41);
});

QUnit.test( "find the longest word", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);

	assert.equal(wordsUtility.longestWord(), "dependencies");
});

QUnit.test( "the average word length of words supplied", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);
	
        assert.equal(wordsUtility.averageWordLength(), " 5.585365853658536");
});

QUnit.test( "find words with the same length", function( assert ) {

  	var wordsUtility = new WordsUtility(theWords);
  	var words = wordsUtility.wordsWithTheSameLength();
    assert.equal(wordsUtility.wordsWithTheSameLength(), " ")
});


QUnit.test( "no words with the same length return nothing", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);

  	assert.equal(0, wordsUtility.wordsWithTheSameLength().length, 5);

});

QUnit.test( "find the shortest word", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);
	assert.equal(wordsUtility.shortestWord(), "A");
});


QUnit.test( "most words end with", function( assert ) {
    var wordsUtility = new WordsUtility(theWords);
  assert.equal(wordsUtility.mostWordsEndWith(), "A");
});

QUnit.test( "most words start with", function( assert ) {
    var wordsUtility = new WordsUtility(theWords);
  assert.equal(wordsUtility.mostWordsStartWith(), "A");
});



QUnit.jUnitReport = function(report) {
    console.log(report.xml);
};

//create a test for What letter does the most words start with

//create a test for What letter does the most words end with
 
