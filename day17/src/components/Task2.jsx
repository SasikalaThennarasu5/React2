// Task2.jsx
import { Link } from 'react-router-dom';

const Task2 = [
  { id: "1", name: "Sita", email: "sita@example.com", phone: "123-456-7890"},
  { id: "2", name: "Rita", email: "rita@example.com", phone: "554-554-3550"},
  { id: "3", name: "Rita", email: "gita@example.com", phone: "485-256-5552"}
];

function UserProfile() {
  const { id } = useParams();
  const user = users.find((user) => user.id === id);
  if (!user) return <p>User not found!</p>;

  return (
     <div>
      <h2>User ID: {id}</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  );
}

export default Task2;
