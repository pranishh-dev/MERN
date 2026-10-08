let students = [
    {
        name: "hari",
        marks: 27
    },
    {
        name: "ram",
        marks: 100
    }
]

//Without filter() method
{
    let failedStu = []
    students.forEach((student) => {
        if (student.marks < 28) {
            failedStu.push(student)
        }
    }
    )
    console.log(failedStu);
}

//with map
{
    let failedStu = students.filter(student => student.marks < 28)
    console.log(failedStu);


    //if want only portperty of objet rather than whole object , we require optional chaining
    {
        let failedStuName = students.filter(student => student.marks < 28).map(student => student.name)
        console.log(failedStuName);
    }
    //or
    {
        let failedStu = students.filter(student => student.marks < 28)
        let failedStuName = failedStu.map(student => student.name)
        console.log(failedStuName);
    }
}