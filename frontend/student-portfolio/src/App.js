import { useState } from 'react';
import AddStudent from './components/AddStudent';
import ViewStudents from './components/ViewStudents';

function App() {
  const [refresh, setRefresh] = useState(false);

  const triggerRefresh = () => {
    setRefresh(!refresh);
  };

  return (
    <div>
      <h1>Student Portfolio</h1>
      <AddStudent refresh={triggerRefresh} />
      <ViewStudents refreshTrigger={refresh} />
    </div>
  );
}

export default App;