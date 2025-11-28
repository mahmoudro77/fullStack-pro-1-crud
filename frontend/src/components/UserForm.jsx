import { useState } from 'react';

export default function UserForm({ onSubmit, initialData = {} }) {
  const [name, setName] = useState(initialData.name || '');
  const [email, setEmail] = useState(initialData.email || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} required />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
      <button type="submit">{initialData._id ? 'Update' : 'Add'} User</button>
    </form>
  );
}
