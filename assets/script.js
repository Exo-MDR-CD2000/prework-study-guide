var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
 for (var x = 0; x < topics.length; x++) {
   console.log(topics[x]);
 }
}

function selectTopic() {
  if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}

/*
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
}
/*
var shapes = ["triangle", "square", "pentagon", "circle"];
for (var x = 0; x < shapes.length; x++) {
    console.log(shapes[x]);
}
*/

// Code above were examples to show 'for loops'

/*
listTopics()
selectTopic()
*/

// Lines 39-40 must be removed or commented on so that the rest of the code can be properly displayed in the web browser console log. The course was a bit unclear on that.

console.log('Here are the topics we learned through Prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();

// All of the listed code (not included the commented ones) displays the topics learned in the prework within the console log. It also randomizes which topic to be studied on with each refresh of the page