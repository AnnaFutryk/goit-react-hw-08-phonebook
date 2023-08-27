const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const getUserRefreshed = state => state.auth.userRefreshed;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsRefreshingUser,
  getUserRefreshed,
};

export default authSelectors;
