import { handleRegisterFulfilled, handleRegisterRejected, handleRegisterPending } from './registerActionHandlers';
import { handleLoginFulfilled, handleLoginRejected } from './loginActionHandlers';
import { handleLogoutFulfilled, handleLogoutRejected } from './logoutActionHandlers';
import {
  handleRefreshUserFulfilled,
  handleRefreshUserRejected,
  handleRefreshUserPending,
} from './refreshUserActionHandlers';
import {
  handleUpdateUserFulfilled,
  handleUpdateUserRejected,
  handleUpdateUserPending,
} from './updateUserActionHandlers';
import {
  handleUpdateAvatarFulfilled,
  handleUpdateAvatarRejected,
  handleUpdateAvatarPending,
} from './updateAvatarActionHandlers';

import { handleAuthActionPending } from './handleAuthActionPending';

export {
  handleRegisterFulfilled,
  handleRegisterRejected,
  handleRegisterPending,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleLogoutRejected,
  handleLoginRejected,
  handleRefreshUserFulfilled,
  handleRefreshUserRejected,
  handleUpdateUserFulfilled,
  handleUpdateUserRejected,
  handleAuthActionPending,
  handleRefreshUserPending,
  handleUpdateUserPending,
  handleUpdateAvatarFulfilled,
  handleUpdateAvatarRejected,
  handleUpdateAvatarPending,
};
