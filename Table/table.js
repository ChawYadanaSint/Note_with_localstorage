let Add = () => {
var name = document.getElementById('name').value;
var age = document.getElementById('age').value;

//radio button
var gender_array = document.getElementsByName('gender');
for(i = 0; i < gender_array.length; i++) {
  if(gender_array[i].checked)
  var gender = gender_array[i].value;
}

//checkbox
var interest_array = document.getElementsByName('interest');
var interest_temp = [];
for(i = 0; i < interest_array.length; i++) {
  if(interest_array[i].checked){
    interest_temp.push(interest_array[i].value)
  }
}
var interest = interest_temp.join(' , ');

var location = document.getElementById('location').value;
  
let display_table = document.getElementById('display_table');


//Validate Num Value in Age field
var valid = (/^\d*\.?\d*$/.test(age));  

  if (valid) {
    //Add to the table
    let row = document.createElement('tr');

    let name_td = document.createElement('td');
    let age_td = document.createElement('td');
    let gender_td = document.createElement('td');
    let interest_td = document.createElement('td');
    let location_td = document.createElement('td');

    name_td.textContent = name;
    age_td.textContent = age;
    gender_td.textContent = gender;
    interest_td.textContent = interest;
    location_td.textContent = location;

    row.appendChild(name_td);
    row.appendChild(age_td);
    row.appendChild(gender_td);
    row.appendChild(interest_td);
    row.appendChild(location_td);

    row.classList.add("table-light");
    display_table.appendChild(row);
  } else {
    window.alert('Please Type Number Value in Age field')
  }

//Empty all the input field
document.getElementById("name").value = "";
document.getElementById("age").value = "";
document.getElementById("male").checked = false;
document.getElementById("female").checked = false;
document.getElementById("interest_1").checked = false;
document.getElementById("interest_2").checked = false;
document.getElementById("interest_3").checked = false;
document.getElementById("interest_4").checked = false;
document.getElementById("interest_5").checked = false;
document.getElementById("interest_6").checked = false;


}

