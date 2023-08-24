let express = require("express");
let app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
  next();
});
const port= process.env.PORT || 2410;
let customers = [
    {
      custId: 1,
      name: "ABC",
      password: "abc1234",
      role: "admin",
      email: "abc@gmail.com"
    },
    {
      custId: 2,
      name: "Willie",
      password: "willie1234",
      role: "Student",
      email: "willie@gmail.com"
    },
    {
      custId: 3,
      name: "Jack",
      password: "jack1234",
      role: "Faculty",
      email: "jack@gmail.com"
    },
    {
      custId: 4,
      name: "James",
      password: "james1234",
      role: "Student",
      email: "james@gmail.com"
    },
    {
      custId: 5,
      name: "Harry",
      password: "harry1234",
      role: "Faculty",
      email: "harry@gmail.com"
    },
    {
      custId: 6,
      name: "Tia",
      password: "tia1234",
      role: "Student",
      email: "tia@gmail.com"
    },
    {
      custId: 7,
      name: "Aditya",
      password: "aditya123",
      role: "Faculty",
      email: "aditya@gmail.com"
    },
    {
      custId: 8,
      name: "Sonu",
      password: "sonu1234",
      role: "Student",
      email: "sonu@gmail.com"
    },
    {
      custId: 9,
      name: "Ellie",
      password: "ellie1234",
      role: "Student",
      email: "ellie@gmail.com"
    },
    {
      custId: 10,
      name: "Gia",
      password: "gia1234",
      role: "Faculty",
      email: "gia@gmail.com"
    }
  ];
  let courses = [
    {
      courseId: 1,
      name: "ANGULAR",
      code: "ANG97",
      description: "All fundamentals of Angular 7",
      faculty: ["Daniel", "Jack"],
      students: ["Sam"]
    },
    {
      courseId: 2,
      name: "JAVASCRIPT",
      code: "JS124",
      description: "Intoduction to javascript",
      faculty: ["Aditya"],
      students: ["James", "Joy", "Monu", "Rita"]
    },
    {
      courseId: 3,
      name: "REACT",
      code: "RCT56",
      description: "React Javascript library",
      faculty: ["Jack", "Gia"],
      students: ["Raima", "Rita", "Sonu", "James"]
    },
    {
      courseId: 4,
      name: "BOOTSTRAP",
      code: "BS297",
      description: "Bootstrap Designing Framework",
      faculty: [],
      students: ["James", "Tia", "Ellie"]
    },
    {
      courseId: 5,
      name: "CSS",
      code: "CS365",
      description: "Basic stylesheet language",
      faculty: [],
      students: ["James", "Rita", "Monica"]
    },
    {
      courseId: 6,
      name: "REST AND MICROSERVICES",
      code: "RM392",
      description: "Introduction to Microservices",
      faculty: [],
      students: ["Sam"]
    },
    {
      courseId: 7,
      name: "NODE",
      code: "ND725",
      description: "Introduction to Node",
      faculty: ["Sonia"],
      students: ["Saransh", "Shrey", "Monica"]
    }
  ];
  let faculties = [
    { id: 5, name: "Daniel", courses: ["ANGULAR"] },
    { id: 4, name: "Sonia", courses: ["NODE"] },
    { id: 3, name: "Jack", courses: ["REACT", "ANGULAR"] },
    { id: 2, name: "Gia", courses: ["REACT"] },
    { id: 1, name: "Aditya", courses: ["ANGULAR"] }
  ];
  let classes = [
    {
      classId: 1,
      course: "REACT",
      time: "07:45",
      endTime: "08:45",
      topic: "Redux",
      facultyName: "Jack"
    },
    {
      classId: 2,
      course: "ANGULAR",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Jack"
    },
    {
      classId: 3,
      course: "JAVASCRIPT",
      time: "15:45",
      endTime: "17:40",
      topic: "Component",
      facultyName: "Aditya"
    }
  ];
  let students = [
    {
      id: 16,
      name: "Willie",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "NODE"]
    },
    {
      id: 15,
      name: "Tia",
      dob: "30-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 14,
      name: "Apoorv",
      dob: "31-August-1998",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 13,
      name: "Joy",
      dob: "31-July-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 12,
      name: "Rachel",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: []
    },
    {
      id: 11,
      name: "Monica",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["CSS", "NODE"]
    },
    {
      id: 10,
      name: "Monu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT"]
    },
    {
      id: 9,
      name: "Sonu",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["REACT"]
    },
    {
      id: 8,
      name: "Raima",
      dob: "30-July-1997",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["REACT"]
    },
    {
      id: 7,
      name: "Rita",
      dob: "31-August-1998",
      gender: "female",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "REACT", "CSS"]
    },
    {
      id: 6,
      name: "Shrey",
      dob: "12-May-1997",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["NODE"]
    },
    {
      id: 5,
      name: "Saransh",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: ["NODE"]
    },
    {
      id: 4,
      name: "Sanya",
      dob: "31-July-1997",
      gender: "male",
      about: "Want to learn new technologies",
      courses: []
    },
    {
      id: 3,
      name: "James",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["JAVASCRIPT", "BOOTSTRAP", "CSS", "REACT"]
    },
    {
      id: 2,
      name: "Sam",
      dob: "12-July-1994",
      gender: "male",
      about: "Pursuing Graduation",
      courses: ["ANGULAR", "REST AND MICROSERVICES"]
    },
    {
      id: 1,
      name: "Ellie",
      dob: "12-June-1992",
      gender: "female",
      about: "Want to learn new technologies",
      courses: ["BOOTSTRAP"]
    }
  ];

app.post("/register",function(req,res){
    let body={custId: customers.length + 1 , ...req.body };
   
    customers.unshift(body);
    let obj={...body};
    delete obj.password
   // console.log(body);
    if(obj.role === "Student"){
        
        let data={
            name:obj.name,
            id:students.length + 1,
            dob:"",
            gender:"",
            about:"",
            courses:[],

        };
        students.unshift(data);
    }
    else if(obj.role==="Faculty"){
        let data={
            name:obj.name,
            id:faculties.length + 1,
            courses:[],

        };
        faculties.unshift(data);
    }
    else{
        res.status(500).send("Try Again Later")
    }
    //console.log(courses);
})

app.post("/login",function(req,res){
    let body=req.body;
    let email=body.email;
    let password=body.password;
    let cust=customers.find((ct)=>ct.email===email && ct.password===password);
    //console.log(cust);
    //console.log(password);
    if(cust){
        res.json({
            name:cust.name,
            role:cust.role,
            email:cust.email,
        })
    }
    else{
        res.status(500).send("Invalid Email or Password. Please Try Again")
    }
});
app.post("/postClass",function(req,res){
  let body = {classId:classes.length + 1 , ...req.body};
  classes.push(body)
  console.log(body);
})
app.get("/getStudentNames",function(req,res){
    let studentNames=[]
       students.map((cst)=>
        studentNames.push(cst.name)
    );
    //console.log(studentNames);
    res.send(studentNames)
    
})
app.get("/getFacultyNames",function(req,res){
    let facultyNames=[]
    faculties.map((cst)=>
     facultyNames.push(cst.name)
    )  
 console.log(facultyNames);
 res.send(facultyNames)
 
});

app.get("/getCourses",function(req,res){
    res.send(courses);
});
app.get("/getStudents",function(req,res){
    let courses = req.query.courses;
    let course= courses? courses.split(",") : [];
    //console.log(course);
    let list=[];
    if(courses!=null){
        list=students.filter((st)=>st.courses.find((s)=>course.find((c)=> c===s) ));
    }
    else{
        list=students;
    }
    console.log(list);
    let resAr= pagination(list,parseInt(req.query.page))
    res.json({
        page: parseInt(req.query.page),
        items:resAr,
        totalItems:resAr.length,
        totalNum:list.length
    })
})
app.get("/getClass/:id",function(req,res){
  let id = +req.params.id;
  let cls= classes.find((cl)=>cl.classId===id);
  res.send(cls)
})
app.get("/getFaculties",function(req,res){
    let courses = req.query.courses;
    let course= courses ? courses.split(",") : [];
    //console.log(course);
    let list=[];
    if(courses!=null){
        list=faculties.filter((st)=>st.courses.find((s)=>course.find((c)=> c===s) ));
    }
    else{
        list=faculties;
    }
    console.log(list);
    let resAr= pagination(list,parseInt(req.query.page))
    res.json({
        page: parseInt(req.query.page),
        items:resAr,
        totalItems:resAr.length,
        totalNum:list.length
    })
});

app.get("/getCourse/:id",function(req,res){
    let id= +req.params.id;
    //console.log(id);
    let cr= courses.find((cr)=>cr.courseId===id);
    //console.log(cr);
    if(cr){
        res.send(cr)
    }
});

app.put("/putCourse/:id",function(req,res){
    let id= +req.params.id;
    console.log(id);
    let body=req.body
    let index=courses.findIndex((cr)=>cr.courseId===id);
    // console.log(index);
    // console.log(body);
    if(index>=0){
        let update =  {...body};
        courses[index] = update;
        console.log(update.students);
        students.map((st)=>{
            let c= update.students.find((s)=>s===st.name);
            console.log(c);
            if(c){
                st.courses.push(update.name)
            }
        })
        res.send(update)
    }
    else{
        res.status(404).send("No Course Found")
    }
});
app.put("/putStudentDetails/:name",function(req,res){
  let name= req.params.name;
  console.log(name);
    let body=req.body;
    let index = students.findIndex((st)=>st.name===name);
    console.log(index);
    let update={id:students[index].id,courses:students[index].courses, name:name,...body};
    if(index>=0){
      students[index] = update;
      res.send(students[index]);
      console.log(update);
    }
    else{
      res.status(404).send("No Student Found")
    }
    
   
});
app.put("/postClass/:id",function(req,res){
  let id = +req.params.id;
  let body= req.body;
  let index = classes.findIndex((cl)=>cl.classId===id);
  let update={id:classes[index].classId,...body};
  if(index>0){
    classes[index]=update;
    res.send(classes[index])
  }
  else{
    res.status(404).send("No Class Found")
  }
})
app.get("/getStudentDetails/:name",function(req,res){
  let name= req.params.name;
  let std= students.find((st)=>st.name===name);
  if(std){
    res.send(std);
  }
  else{
    res.status(404).send("No Student Found")
  }
});
app.get("/getStudentClass/:name",function(req,res){
  let name = req.params.name;
  let cr= courses.filter((st)=>st.students.find((s)=>s===name));
  let cr1= classes.filter((cl)=>cr.find((cr)=>cr.name===cl.course))
  res.send(cr1)
})
app.get("/getStudentCourse/:name",function(req,res){
  let name = req.params.name;
  let cr= courses.filter((st)=>st.students.find((s)=>s===name));
 
  res.send(cr)
});
app.get("/getFacultyCourse/:name",function(req,res){
  let name = req.params.name;
  let cr= courses.filter((st)=>st.faculty.find((s)=>s===name));
  res.send(cr)
});
app.get("/getFacultyClass/:name",function(req,res){
  let name = req.params.name;
  let cr= courses.filter((st)=>st.faculty.find((s)=>s===name));
  let cr1= classes.filter((cl)=>cr.find((cr)=>cr.name===cl.course))
  res.send(cr1)
})
function pagination(obj,page){
    let resArr= obj;
    resArr= resArr.slice( page * 3 -3 , page * 3 );
    return resArr;
}
app.listen(port, () => console.log(`Node app listening on port ${port}!`));