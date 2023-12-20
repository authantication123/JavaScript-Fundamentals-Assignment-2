const students = [
    {
      name: "Mithun",
      marks: 95,
    },
    {
      name: "Prabir",
      marks: 75,
    },
    {
      name: "Alka",
      marks: 92,
    },
    {
      name: "Shivam",
      marks: 70,
    },
    {
      name: "Farman",
      marks: 99,
    },
  ];
  
  const checkResults = (name) => {
    for (let x of students) {
      if (x.name === name) {
        return x.marks > 90?
         console.log(
              `Congratulations ${x.name}! You have cleared the exam.`
            )
          :console.log(`Sorry You have not cleared the exam.`)
      }
    }
    console.log("Invalid User");
  };
  
  checkResults("Mithun");

  
  checkResults("Shivam");
  
  
  checkResults("Shivam S");
