function Home() {
  const courses = ["Python", "Java", "React"];

  return (
    <div>
      <h1>Courses</h1>

      {courses.map((course, index) => (
        <div key={index}>
          <h2>{course}</h2>
        </div>
      ))}
    </div>
  );
}

export default Home;
