import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signUpOperation } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/selectors';

export const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  console.log("user in store:", user);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
        onSubmit={evt => {
          evt.preventDefault();
          console.log('regUserData: ', { name, email, password });
          dispatch(signUpOperation({ name, email, password }));
        }}
      >
        <input name="name" value={name} onChange={handleChange} />
        <input name="email" value={email} onChange={handleChange} />
        <input name="password" value={password} onChange={handleChange} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
