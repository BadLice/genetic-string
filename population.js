class Population
{
      constructor(target,mutationRate,maxPop)
      {
        this.population = [];
        this.target=target;
        this.generation=0;
        this.matingPool=[];
        this.matingSize=0;
        this.mutationRate=mutationRate;
        this.finished=false;

        for(var i=0;i<maxPop;i++)
        {
          this.population[i] = new DNA(target);
        }
      }

      naturalSelection()
      {
        // this.matingPool = [];
        // var maxFitness = this.maxFitness();
        //
        // console.log("max="+maxFitness)
        //
        // for(var i=0;i<this.population.length;i++)
        // {
        //   var size=floor(map(this.population[i].fitness,0,maxFitness,0,1)*100)
        //
        //   for(var j=0;j<size;j++)
        //   {
        //     this.matingPool.push(this.population[i]);
        //   }
        // }
        //
        // console.log("len="+this.matingPool.length);

        // Clear the ArrayList
        this.matingPool = [];

        let maxFitness = 0;
        for (let i = 0; i < this.population.length; i++) {
          if (this.population[i].fitness > maxFitness) {
            maxFitness = this.population[i].fitness;
          }
        }

        // Based on fitness, each member will get added to the mating pool a certain number of times
        // a higher fitness = more entries to mating pool = more likely to be picked as a parent
        // a lower fitness = fewer entries to mating pool = less likely to be picked as a parent
        for (let i = 0; i < this.population.length; i++) {

          let fitness = map(this.population[i].fitness, 0, maxFitness, 0, 1);
          let n = floor(fitness * 100); // Arbitrary multiplier, we can also use monte carlo method
          for (let j = 0; j < n; j++) { // and pick two random numbers
            this.matingPool.push(this.population[i]);
          }
        }
        this.matingSize=this.matingPool.length;
      }

      generate()
      {
        for(var i = 0;i<this.population.length;i++)
        {
          //do
          //{
            var r1 = floor(random(this.matingSize));
            var r2 = floor(random(this.matingSize));
          // } while(r1===r2);

          var parent1 = this.matingPool[r1];
          var parent2 = this.matingPool[r2];



          // console.log("danjsdubsdb "+this.matingPool[r1])

          var child = parent1.crossover(parent2);

          // console.log(child.genes.join(""))

          child.mutate(this.mutationRate);

          // console.log(child.genes.join(""))
          this.population[i]=child;
        }

        this.generation++;
        // console.log("gen= "+this.generation)
      }

      calculateFitness()
      {
        for(var i=0;i<this.population.length;i++)
        {
          var score = 0;

          for(var j=0;j<this.population[i].target.length;j++)
            if(this.population[i].target.charAt(j)==this.population[i].genes[j])
              score++;

          this.population[i].fitness = score / this.population[i].genes.length;
          // console.log("qwqwwq="+this.population[i].fitness)
        }
      }

      maxFitness()
      {
        var max = -1;
        for(var o of this.population)
          if(o.fitness>max)
            max=o.fitness;

        return max;
      }

      getBest()
      {
        var max = -1;
        var maxo;
        for(var o of this.population)
          if(o.fitness>max)
          {
            maxo=o.genes.join("");
            max=o.fitness;
          }

        return maxo;
      }

      evaluate()
      {
        var finish = false;
        for(var i=0;i<this.population.length; i++)
        {
          if(this.target===this.population[i].genes.join(""))
           {
             // finish=true;
             // break;
             noLoop()
             console.log(i)
           }

        }
        this.finished=finish;
      }

    allPhrases()
    {
      let everything = "";

      let displayLimit = min(this.population.length, 50);


      for (let i = 0; i < displayLimit; i++) {
        everything += this.population[i].genes.join("") + "<br>";
      }
      return everything;
    }
}
