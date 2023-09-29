export const handleLogoutFulfilled = state => {
  state.user = {
    _id: null,
    name: null,
    email: null,
    userAvatar: null,
    phone: null,
    skype: null,
    birthday: null,
  };
  state.token = null;
  state.isLoggedIn = false;
  state.isAuthLoading = false;
};
