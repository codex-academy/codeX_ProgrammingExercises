var theNumbers=[1234,56,7,8,910,111,213,145,16,17,182,19,20,21,23,24,25,26,27,28,29,30,31,32,33,40,4143,4,445,56,57585,602,465,669,776,77,78,80];


QUnit.test( "test if numbers are counted correctly", function( assert ) {
  	var numbersUtility = new NumbersUtility(theNumbers);
	assert.equal(numbersUtility.countNumbers(), 9);
});

QUnit.test( "find the biggest number", function( assert ) {
  	var numbersUtility = new NumbersUtility(theNumbers);
    assert.equal(numbersUtility.biggestNumber(), " ");
});

 QUnit.test( "the average of all the numbers", function( assert ) {
  	var numbersUtility = new NumbersUtility(theNumbers);
	  assert.equal(numbersUtility.averageNumber(), "1");
});

QUnit.test( "find the smallest number", function( assert ) {

  	var numbersUtility = new NumbersUtility(theNumbers);
  	assert.equal(numbersUtility.smallestNumber(), " ");
});


QUnit.test( "find all even numbers", function( assert ) {
  	var numbersUtility = new NumbersUtility(theNumbers);
    assert.equal(numbersUtility.evenNumbers(), " ");
  	

});

QUnit.test( "find all uneven numbers", function( assert ) {
  	var numbersUtility = new NumbersUtility(theNumbers);
    assert.equal(numbersUtility.unevenNumber(), " ");
  });	


QUnit.test( "find all prime numbers ", function( assert ) {
  	var numbersUtility = new NumbersUtility(theNumbers);
	  assert.equal(numbersUtility.primeNumbers(), "");
});

QUnit.jUnitReport = function(report) {
    console.log(report.xml); 
};

