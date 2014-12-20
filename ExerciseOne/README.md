#Exercise 1
	
##Given a list of words separated with spaces. Create a application that can do the following.

	* Find the number of words given
	* Find the longest word, print the word and it’s length
	* Find the shortest word, print the word and it’s length
	* What is the average length of words in the list
	* Find all the words with the same length and print them under the length
	* What letter do the most words start with? Print the letter and number of words.
	* What letter do the most words end with? Print the letter and number of words.

Develop this using TDD (Test Driven Development). TDD is a way of writing software where testing it is central. We start by writing a failing unit test first, then we make them pass, then we make the code better. Then we repeat the process until all the functionality has been implemented.

##What is a unit test
 
A Unit Test is a piece of code that is using your code, exercising some scenarios that it expects to work in a certain way. Unit tests are isolated from external dependencies unlike integration tests. We will focus on Unit Tests. 

We will be using QUnit (http://qunitjs.com/) as our unit testing framework.

I basic structure of a unit test using qunit looks like this:

```
QUnit.test(“My first test”, function(assert){
	
});
```

Look at the content of this file: [test-words-utility.js](./test-words-utility.js)

Unit tests enable us to do continuous integration, this help us to work more effectively as a team and have working properly integrated software using Continuous Integration.

## Continuous integration

Continuous integration (CI) is the practice, in software engineering, of merging all developer working copies with a shared mainline several times a day.

http://en.wikipedia.org/wiki/Continuous_integration

Look at a basic CI server setup for ExerciseOne here: https://travis-ci.org/codex-academy/codeX_ProgrammingExercises

One side effect of writing your code using TDD is that it is easy to to reuse it in a web application. Do you agree? Why is that?

##Something to think about:

How would you create a web application that allows you to add a list of words separated with spaces with a calculate button, which when pressed, should display all the information above. 
Each result set should be styled in a block with a heading and the appropriate values under the heading.

We will come back to this later, so think about this so long.
