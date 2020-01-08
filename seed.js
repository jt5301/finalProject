const {db} = require('./server/db')
const {green, red} = require('chalk')
const {students,campuses} = require('./server/db/index')

const studentData = [
  {
    firstName: 'John',
    lastName: 'Tieu',
    email: 'johnson.tieu@gmail.com',
    gpa:3.0,
  },
  {
    firstName:'KZ',
    lastName:'Zheng',
    email:'kZheng@gmail.com',
    gpa:4.0,
  }
]

const campusData = [
  {
    name:'fullstack',
    imageUrl: 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/5153/s300/fsa-logo-stacked.png',
    address: '5 Hanover Square',
    description: 'Fullstack Academy is an immersive software engineering coding bootcamp located in New York City and Chicago.[1] Students of the full-time flagship course learn full stack JavaScript over the course of a 13-week, on-campus program. Fullstack Academy offers beginner courses in Javascript (JavaScript Jumpstart)[2] and front-end development,[3] as well as a summer program for college-age students (Summer of Code), and a part-time version of their full-time curriculum (Flex).[4]'
  },
  {
    name: 'Ualbany',
    imageUrl: 'https://pbs.twimg.com/profile_images/1121797541652099073/RV09dY8S_400x400.png',
    address: '1400 Washington Ave',
    description: 'The State University of New York at Albany, commonly referred to as University at Albany, SUNY Albany or UAlbany, is a public research university with campuses in the New York cities of Albany and Rensselaer and the Town of Guilderland, United States. Founded in 1844, it is part of the State University of New York (SUNY) system.[4][5]'
  }
]
const seed = async () => {
  await db.sync({force: true})
  await Promise.all(studentData.map(student => {
    return students.create(student);
  }));
  await Promise.all(campusData.map(campus => {
    return campuses.create(campus);
  }));
  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
