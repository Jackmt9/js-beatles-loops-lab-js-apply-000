// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var x = [];
  var counter = musicians.length;
  for(var i=0; i < counter; i++)
  {
    var temp = musicians[i] + " " + instruments[i];
    x.push(temp);
  }
  return x;
}
function johnLennonFacts(facts)
{
  var i=0;
  while(i <= facts.length)
  {
   facts[i]=facts[i]+"!!!" 
   i++
  }
}