const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(array, name) {
    return array.filter(driver=>driver.toLowerCase() === name.toLowerCase())
  };
  findMatching(drivers, 'Bobby')


  function fuzzyMatch(array, name) {
    return array.filter(driver =>driver.toLowerCase().substring(0, name.length) === name.toLowerCase())
  }
  fuzzyMatch(drivers,'Bobby')


  function matchName(drivers, argument) {
    return drivers.filter(driver=>driver.name === argument)
  }
