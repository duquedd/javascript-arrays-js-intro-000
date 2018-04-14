var chocolateBars = [`snickers`,`hundred grand`,`kitkat`,`skittles`]

function addElementToBeginningOfArray(array,frontElement){
  return [frontElement,...array]
  
}
function destructivelyAddElementToBeginningOfArray(array,frontElement){
  return array=[frontElement,...array]
}