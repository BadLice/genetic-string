var target = "to be or not to be";
var mutationRate = 0.01;
var maxPop = 200;
var people;

function setup()
{
  people = new Population(target,mutationRate,maxPop);
  people.calculateFitness();

  bestPhrase = createP("Best phrase:");
  //bestPhrase.position(10,10);
  bestPhrase.class("best");

  allPhrases = createP("All phrases:");
  allPhrases.position(600, 10);
  allPhrases.class("all");

  stats = createP("Stats");
  //stats.position(10,200);
  stats.class("stats");
  // noLoop();
}

function draw()
{
  // for(var o of pop.population)
  //   console.log(o.genes);
  // people.calculateFitness();
  people.naturalSelection();
  // console.log("ok1")
  people.generate();

  people.calculateFitness();
  // console.log("ok2")
 people.evaluate();

 if(people.finished) noLoop();

 displayInfo()

}

function displayInfo() {
  // Display current status of population
  let answer = people.getBest();

  bestPhrase.html("Best phrase:<br>" + answer);

  let statstext = "total generations:     " + people.generation + "<br>";
  // statstext += "average fitness:       " + nf(people.getAverageFitness()) + "<br>";
  statstext += "total population:      " + maxPop + "<br>";
  statstext += "mutation rate:         " + floor(mutationRate * 100) + "%";

  stats.html(statstext);

  allPhrases.html("All phrases:<br>" + people.allPhrases())
}
