function init() {
  var nameC = 0; 
  function displayName() {
    nameC++;
    console.log(nameC)
  }
  return displayName;
}
const init1 = init();
init1();
console.log (nameC)
init1()
init1()
init1()