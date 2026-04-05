import { useEffect, useState } from 'react';
import axios from 'axios';

function ViewStudents({ refreshTrigger }) {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios.get('http://localhost:3000/student/view')
      .then(res => setStudents(res.data));
  };

  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:3000/student/delete/${id}`);
    alert('Student Deleted');
    fetchStudents();
  };

  const updateStudent = async (id) => {
    const name = prompt("Enter new name:");
    const email = prompt("Enter new email:");
    const course = prompt("Enter new course:");

    if (!name || !email || !course) return;

    await axios.put(`http://localhost:3000/student/update/${id}`, {
      name,
      email,
      course
    });

    alert('Student Updated');
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, [refreshTrigger]);

  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((s) => (
          <li key={s._id}>
            {s.name} - {s.email} - {s.course}
            <button onClick={() => deleteStudent(s._id)}>Delete</button>
            <button onClick={() => updateStudent(s._id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ViewStudents;