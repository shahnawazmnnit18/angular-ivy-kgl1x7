import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  input: {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
  }[] = [
    {
      id: 1,
      first_name: 'Jeanette',
      last_name: 'Penddreth',
      email: 'jpenddreth0@census.gov',
      gender: 'Female'
    },
    {
      id: 2,
      first_name: 'Giavani',
      last_name: 'Frediani',
      email: 'gfrediani1@senate.gov',
      gender: 'Male'
    },
    {
      id: 3,
      first_name: 'Noell',
      last_name: 'Bea',
      email: 'nbea2@imageshack.us',
      gender: 'Female'
    },
    {
      id: 4,
      first_name: 'Willard',
      last_name: 'Valek',
      email: 'wvalek3@vk.com',
      gender: 'Male'
    }
  ];
}
$scope.filterByGender = function(maleOrFemaleCheck) {
  if (maleOrFemaleCheck == true) {
    //assuming female filter is clicked
    var femaleFilterList = [];
    listOfPeople.forEach(function(people) {
      if (people.gender == 'Female') femaleFilterList.push(people);
    });
    return femaleFilterList;
  } else {
    var maleFilterList = [];
    listOfPeople.forEach(function(people) {
      if (people.gender == 'male') maleFilterList.push(people);
    });
    return maleFilterList;
    
  }
};
$scope.searchByFirsNameLastNameEmail = function(searchString){
  var searchResult = [];
  if(searchString!=undefined)[
    searchResult = listOfPeople.filter(people => people.first_name==searchString)


    searchResult.append(listOfPeople.filter(people => people.last_name==searchString))


    searchResult.append(listOfPeople.filter(people => people.email==searchString))

    /*
    removng duplicate from searchResult
    */
    searchResult= this.formulalist.reduce((a, b) => {
      if (!a.find(data => data.id === b.id)) {
        a.push(b);
      }
      return a;
    }, []);
  ]
}
$scope.addPeople =function(people){
  listOfPeople.add(people);
}

}
