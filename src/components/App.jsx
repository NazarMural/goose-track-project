import { UserForm } from './Account/UserForm/UserForm';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        background: '#34343480',
      }}
    >
      <UserForm />
    </div>
  );
};
