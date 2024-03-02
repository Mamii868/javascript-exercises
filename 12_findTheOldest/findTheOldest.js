const findTheOldest = function (people) {
  function findAge(yearOfBirth, yearOfDeath) {
    if (yearOfBirth && yearOfDeath) {
        return yearOfDeath - yearOfBirth
    } else {
        return 2024 - yearOfBirth;
    }
  }
  const ageArray = people.map((person) => ({
    name: person.name,
    age: findAge(person.yearOfBirth, person.yearOfDeath),
  }));

  ageArray.sort((a, b) => {
      return b.age - a.age
  })
  return ageArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
