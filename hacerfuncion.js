function makeFunc() {
  let nameC = 0;
  function displayName() {
    nameC++;
    console.log(nameC);
  }
   return displayName;
}

const myFunc = makeFunc();
myFunc();
myFunc();
myFunc();
myFunc();
