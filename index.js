// add solution here
function theBeatlesPlay(musicians, instruments)
{
  var x = [];
  var counter = musicians.length;
  for(var i=0; i < counter; i++)
  {
    var temp = alert(musicians[i]) + " " + alert(instruments[i]);
    x.push(temp);
  }
  return x;
}
function johnLennonFacts