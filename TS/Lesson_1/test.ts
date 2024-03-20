type user = {
  name: string
  age: number
  address: string
  job: string
  isMarried: boolean
  gender: string
}

const myInfor: user = {
  name: 'Nguyen Huy Vinh',
  age: 20,
  address: 'Hà Nội',
  job: 'Software Engineer',
  isMarried: true,
  gender: 'male'
}

const myStudentInfor: user = {
  name: 'Nguyen Thi Huyen',
  age: 19,
  address: 'Hà Nội',
  job: 'Student',
  isMarried: false,
  gender: 'felame'
}

console.log(`Xin chao ca lop, thay ten la ${myInfor.name}`)
