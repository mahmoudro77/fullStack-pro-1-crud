import { useEffect, useState } from 'react';
import { getUsers, createUser, updateUser, deleteUser } from '../services/api';
import UserForm from '../components/UserForm';

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const fetchUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleCreate = async (data) => {
    await createUser(data);
    fetchUsers();
  };

  const handleUpdate = async (data) => {
    await updateUser(editingUser._id, data);
    setEditingUser(null);
    fetchUsers();
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <h1>Users CRUD</h1>
      <UserForm onSubmit={editingUser ? handleUpdate : handleCreate} initialData={editingUser || {}} />
      <ul>
        {users.map(u => (
          <li key={u._id}>
            {u.name} ({u.email})
            <button onClick={() => setEditingUser(u)}>Edit</button>
            <button onClick={() => handleDelete(u._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
