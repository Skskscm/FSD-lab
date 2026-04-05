import { useState } from 'react';
import axios from 'axios';

function AddStudent({ refresh }) {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    course: ''
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:3000/student/add', student);

    alert('Student Added');

    setStudent({ name: '', email: '', course: '' }); // clear form
    refresh(); // refresh list
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={student.name}
          onChange={handleChange}
        /><br/>

        <input
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
        /><br/>

        <input
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
        /><br/>

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddStudent;