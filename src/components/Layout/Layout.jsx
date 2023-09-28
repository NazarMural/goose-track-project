// import { useAuth } from 'hooks/useAuth';
// import { useDispatch } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { logOut } from 'redux/auth/operations';
// import css from './Layout.module.css';

import { Header } from 'components/Header/Header';
import { SideBar } from 'components/SideBar/SideBar';

export const Layout = ({ children }) => {
  return (
    <>
      <Header /> 
      <main>
        <SideBar></SideBar>
        {children}
      </main>
      <footer />
    </>
  );
};

// export const Layout = ({ children }) => {
//   const dispatch = useDispatch();
//   const handleLogOut = () => {
//     dispatch(logOut());
//   };

//   const {
//     user: { name },
//   } = useAuth();

//   const { isLoggedIn } = useAuth();

//   return (
//     <div className={css.container}>
//       <header>
//         <nav className={css.nav}>
//           <NavLink to="/" className={css.navText}>
//             Home Page
//           </NavLink>
//           {isLoggedIn && (
//             <NavLink to="/contacts" className={css.navText}>
//               Contacts
//             </NavLink>
//           )}
//           {isLoggedIn ? (
//             <div className={css.forLoggeded}>
//               {/* <NavLink to="/contacts" className={css.navText}>
//                 Contacts
//               </NavLink> */}
//               <p className={css.greating}>
//                 Hello, <span className={css.userName}>{name}</span>!{' '}
//               </p>
//               <button
//                 type="button"
//                 onClick={handleLogOut}
//                 className={css.btnLogout}
//               >
//                 LogOut
//               </button>
//             </div>
//           ) : (
//             <div className={css.authorization}>
//               <NavLink to="/login" className={css.navText}>
//                 LogIn
//               </NavLink>
//               <NavLink to="/register" className={css.navText}>
//                 Register
//               </NavLink>
//             </div>
//           )}
//         </nav>
//       </header>
//       <main>{children}</main>
//       <footer></footer>
//     </div>
//   );

// hook useAuth
//     import { useSelector } from 'react-redux';
// import {
//   selectUser,
//   selectIsLoggedIn,
//   selectIsRefreshing,
// } from '../redux/auth/selectors';

// export const useAuth = () => {
//   const isLoggedIn = useSelector(selectIsLoggedIn);
//   const isRefreshing = useSelector(selectIsRefreshing);
//   const user = useSelector(selectUser);

//   return {
//     isLoggedIn,
//     isRefreshing,
//     user,
//   };
// };

// Selectors
// export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// export const selectUser = state => state.auth.user;

// export const selectIsRefreshing = state => state.auth.isRefreshing;
