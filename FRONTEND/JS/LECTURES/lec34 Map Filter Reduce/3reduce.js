let marks = [10, 20, 90, 56, 75]

// WITHOUT reduce() method:
{

    let totalMarks = 0;
    marks.forEach(mark => (totalMarks += mark))
    console.log(totalMarks);

}

// WITH reduce()
{
    {
        let totalMarks = marks.reduce((accumulator, currentValue) => {
            accumulator += currentValue
            return accumulator;

            //or direct return accumulator + currentValue
        }, 0)
        console.log(totalMarks);
    }
    //clean syntax
    {
        let totalMarks = marks.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        // or
        // let totalMarks = marks.reduce((accumulator, currentValue) => accumulator + currentValue)
        // currentvalue = 0 by default only for arrays

    }
}


const attendance = ["absent", "present", "present", "absent", "present"]

{
    
    let obj = {}
    attendance.forEach((value) => {
        if (obj[value]) {
            obj[value] += 1
        }
        else {
            obj[value] = 1
        }
        
    })
    console.log(obj);

}
{
    let obj = attendance.reduce((acc,value)=>{
        // if(acc[value]){
        //     acc[value] +=1
        // }
        // else{
        //     acc[value] = 1
        // }

        acc[value] = (acc[value] || 0) + 1
        return acc;
    },{})
    console.log(obj);
}