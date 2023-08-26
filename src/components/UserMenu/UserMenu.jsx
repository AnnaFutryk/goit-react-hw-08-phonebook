import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import defaultAvatar from './avatar.jpeg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <div>
      <img src={avatar} alt="user avatar" width="32" />
      <span>Welcome {name}</span>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </button>
    </div>
  );
};
