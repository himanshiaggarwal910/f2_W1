const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  data.forEach(item => {
    console.log(item);
  });
}

// 2. Add Data
function addData() {
  const name = prompt('Enter name:');
  const age = parseInt(prompt('Enter age:'));
  const profession = prompt('Enter profession:');
  
  const newData = { name, age, profession };
  data.push(newData);
}

// 3. Remove Admins
function removeAdmin() {
  data = data.filter(item => item.profession !== 'admin');
}

// 4. Concatenate Array
function concatenateArray() {
  const dummyArray = [
    { name: 'Dummy1', age: 25, profession: 'dummy' },
    { name: 'Dummy2', age: 27, profession: 'dummy' },
  ];
  const resultArray = data.concat(dummyArray);
  console.log(resultArray);
}

// 5. Average Age
function averageAge() {
  const totalAge = data.reduce((sum, item) => sum + item.age, 0);
  const avgAge = totalAge / data.length;
  console.log('Average Age:', avgAge);
}

// 6. Age Check
function checkAgeAbove25() {
  const isAbove25 = data.some(item => item.age > 25);
  console.log('Is there anyone above 25?', isAbove25);
}

// 7. Unique Professions
function uniqueProfessions() {
  const professions = [...new Set(data.map(item => item.profession))];
  console.log('Unique Professions:', professions);
}

// 8. Sort by Age
function sortByAge() {
  data.sort((a, b) => a.age - b.age);
  console.log('Sorted Data by Age:', data);
}

// 9. Update Profession
function updateJohnsProfession() {
  const john = data.find(item => item.name === 'John');
  if (john) {
    john.profession = 'manager';
  } 
}

// 10. Profession Count
function getTotalProfessions() {
  const totalDevelopers = data.filter(item => item.profession === 'developer').length;
  const totalAdmins = data.filter(item => item.profession === 'admin').length;
  
  console.log('Total Developers:', totalDevelopers);
  console.log('Total Admins:', totalAdmins);
}
