var target = "tretatre trentini enrtarono tutti e trentatre trotterellando";
var mutationRate = 0.01;
var maxPop = 1000;
var people;

function setup()
{
  people = new Population(target,mutationRate,maxPop);
  people.calculateFitness();

  bestPhrase = createP("Best phrase:");
  bestPhrase.class("best");

  allPhrases = createP("All phrases:");
  allPhrases.position(600, 10);
  allPhrases.class("all");

  stats = createP("Stats");
  stats.class("stats");
}

function draw()
{
  people.naturalSelection();
  people.generate();

  people.calculateFitness();
  people.evaluate();

 if(people.finished) noLoop();

 displayInfo()

}

function displayInfo() {
  // Display current status of population
  let answer = people.getBest();

  bestPhrase.html("Best phrase:<br>" + answer);

  let statstext = "total generations:     " + people.generation + "<br>";
  statstext += "total population:      " + maxPop + "<br>";
  statstext += "mutation rate:         " + floor(mutationRate * 100) + "%";

  stats.html(statstext);

  allPhrases.html("All phrases:<br>" + people.allPhrases())
}
