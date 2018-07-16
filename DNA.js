class DNA
{
  constructor(target)
  {
    this.genes = [];
    this.target=target;
    this.fitness=0;

    for(var i=0;i<this.target.length;i++)
      {
        this.genes[i] = DNA.newChar();
        // this.calculateFitness();
      }
  }

  calculateFitness()
  {
    var score = 0;

    for(var i=0;i<this.target.length;i++)
      if(target.charAt(i)==this.genes[i])
        score++;

    this.fitness = score / this.genes.length;
    // console.log("fewuiuuuuuuuuuuuuuuuuuuuuuuuuuu="+this.fitness)
  }

  crossover(parent2)
  {
    var child = [];
    var r = random(this.genes.length);

    for(var i=0;i<this.genes.length;i++)
    {
      if(i<=r)
        child.push(this.genes[i]);
      else
        child.push(parent2.genes[i]);
    }

    var temp = new DNA(this.target);
    temp.genes=child;

    return temp;
  }

  mutate(mr)
  {
    // console.log(mr)
      for(var i=0;i<this.genes.length;i++)
      {
        if(random(1)<mr)
        {
          this.genes[i]=DNA.newChar();
          // console.log("neq")
        }
      }
  }

  static newChar()
  {
    let c = floor(random(63, 122));
    if (c === 63) c = 32;
    if (c === 64) c = 46;

    return String.fromCharCode(c);
  }

}
