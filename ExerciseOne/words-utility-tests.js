
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
    assert.deepEqual(wordsUtility.wordsWithTheSameLength(), {  "1": [
    "a",
    "a",
    "a"
  ],
  "10": [
    "exercising"
  ],
  "11": [
    "integration"
  ],
  "12": [
    "dependencies"
  ],
  "2": [
    "is",
    "of",
    "is",
    "it",
    "to",
    "in",
    "we",
    "on"
  ],
  "3": [
    "are"
  ],
  "4": [
    "unit",
    "test",
    "code",
    "that",
    "your",
    "some",
    "that",
    "work",
    "way.",
    "unit",
    "from",
    "will",
    "unit"
  ],
  "5": [
    "piece",
    "using",
    "code,",
    "tests",
    "focus"
  ],
  "6": [
    "unlike",
    "tests.",
    "tests."
  ],
  "7": [
    "expects",
    "certain"
  ],
  "8": [
    "isolated",
    "external"
  ],
  "9": [
    "scenarios"
  ]
})
});


QUnit.test( "no words with the same length return nothing", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);

  	assert.equal(undefined, wordsUtility.wordsWithTheSameLength().length, 5);

});

QUnit.test( "find the shortest word", function( assert ) {
  	var wordsUtility = new WordsUtility(theWords);
	assert.equal(wordsUtility.shortestWord(), "A");
});


QUnit.test( "most words end with", function( assert ) {
    var wordsUtility = new WordsUtility(theWords);
  assert.equal(wordsUtility.mostWordsEndWith(), "s");
});

QUnit.test( "most words start with", function( assert ) {
    var wordsUtility = new WordsUtility(theWords);
  assert.equal(wordsUtility.mostWordsStartWith(), "t");
});



QUnit.jUnitReport = function(report) {
    console.log(report.xml);
};

//create a test for What letter does the most words start with

//create a test for What letter does the most words end with
 
