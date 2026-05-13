function Home() {

  const courses = [
    {
      name: "Python",
      price: 2000
    },
    {
      name: "Java",
      price: 2500
    },
    {
      name: "React",
      price: 3000
    }
  ]

  return (

    <div style={{padding:"20px"}}>

      <h1>Student Course Management System</h1>

      <hr />

      <h2>Available Courses</h2>

      {courses.map((course, index) => (

        <div
          key={index}
          style={{
            border:"1px solid black",
            padding:"10px",
            margin:"10px",
            width:"200px"
          }}
        >

          <h3>{course.name}</h3>

          <p>Price : ₹{course.price}</p>

          <button>
            Enroll
          </button>

        </div>

      ))}

    </div>

  )
}

export default Home
