const express = require("express")
const app = express();

app.use(express.json())

const PORT = 3000

const students = [
  {
    id: 1,
    firstName: "Иван",
    lastName: "Иванов",
    age: 20,
    group: "ИТ-101",
    isScholarship: true,
    grades: [5, 4, 5, 4, 5]
  },
  {
    id: 2,
    firstName: "Мария",
    lastName: "Петрова",
    age: 19,
    group: "ИТ-102",
    isScholarship: true,
    grades: [5, 5, 5, 5, 5]
  },
  {
    id: 3,
    firstName: "Алексей",
    lastName: "Сидоров",
    age: 21,
    group: "ИТ-101",
    isScholarship: false,
    grades: [3, 4, 3, 4, 3]
  },
  {
    id: 4,
    firstName: "Екатерина",
    lastName: "Смирнова",
    age: 20,
    group: "ИТ-102",
    isScholarship: true,
    grades: [4, 4, 5, 4, 4]
  },
  {
    id: 5,
    firstName: "Дмитрий",
    lastName: "Кузнецов",
    age: 22,
    group: "ИТ-103",
    isScholarship: false,
    grades: [5, 5, 4, 5, 5]
  }
];

const predmet = [
  {
    id: 1,
    Name: "BMW",
  },
  {
    id: 2,
    Name: "Mers",
  },
  {
    id: 3,
    Name: "Audi",
  },
];





app.get("/students", (req, res) => {
  res.send(students)
})

app.get("/students/:id", (req, res) => {
  let student = students.find((stud) => {
    return stud.id == req.params.id
  })

  if (!student) {
    res.status(404).json({ error: "Студент не найден" })
  }
  res.json(student)

})

app.post('/student', (req , res)=>{
  const {name , age} = req.body

  const newStudent = {
    id: students.length+1,
    name: name,
    age: age,
  }
  
  students.push(newStudent)
  // res.status(200).json("регистрация прошла успешно!", newStudent);
  res.send(students)
})








app.get("/predmet", (req, res) => {
  res.send(predmet)
})




app.get("/autorization", (req, res) => {
  res.send("Страница авторизации")
})

app.get("/registration", (req, res) => {
  res.send("Страница регистрации")
})




app.get("/", (req, res) => {
  res.send("Главная страница!")
})

app.get("/obout", (req, res) => {
  res.send("О нас")
})

app.get("/contact", (req, res) => {
  res.send("Контакты")
})

app.listen(PORT, () => {
  console.log("Сервер успешно запущен")
})