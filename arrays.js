var chocolateBars = [`snickers`,`hundred grand`,`kitkat`,`skittles`]

function addElementToBeginningOfArray(array,frontElement){
  return [frontElement,...array]

}
function destructivelyAddElementToBeginningOfArray(array,frontElement){
  array.unshift(frontElement)
  return array
}
function addElementToEndOfArray(array,frontElement){
  return [frontElement,...array]
}
function destructivelyAddElementToEndOfArray(array,frontElement){
  array.push(frontElement)
  return array
}