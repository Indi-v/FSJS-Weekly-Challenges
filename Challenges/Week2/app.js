
//create function
  //control and return statements
var answer= "";
var response;
var loop = 0;
function  callToResponse (answer) {
  if (answer.toLowerCase() === 'hello')
    {
       response = 'Hello World!';
       loop++
    } else {
       response = "The world is not pleased with that response"
    }
  return response;
}
//Prompt user for input and store variable
//Call function
//Alert user results
  while (loop === 0 ) {
  answer= prompt('What is the first thing you say to the world in programming?');
  callToResponse(answer);
  alert(response)
  }

  
