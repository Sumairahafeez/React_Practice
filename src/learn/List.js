// import React, { Component } from 'react';
// import Person from './Person';

// class List extends Component {
//   render() {
//     const persons = [
//       {
//         Name: 'Sumaira',
//         Age: 19,
//         Skills: 'React'
//       },
//       {
//         Name: 'Fatima',
//         Age: 19,
//         Skills: 'Angular'
//       },
//       {
//         Name: 'Ayesha',
//         Age: 19,
//         Skills: 'Vue'
//       }
//     ];

//     const PersonList = persons.map(person => (
//       <Person key={person.Name} person={person} />
//     ));

//     return (
//       <div>
//         {PersonList}
//       </div>
//     );
//   }
// }

// export default List;

import React, { Component } from 'react'
import Person from './Person';
export class List extends Component {
  render() {
    const persons = [
              {
                Name: 'Sumaira',
                Age: 19,
                Skills: 'React'
              },
              {
                Name: 'Fatima',
                Age: 19,
                Skills: 'Angular'
              },
              {
                Name: 'Ayesha',
                Age: 19,
                Skills: 'Vue'
              }
            ];
    const personList = persons.map(person =>(
        <Person person={person}/>
    ))
    return (
      <div>
        {personList}
      </div>
    )
  }
}

export default List

