import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';
import defaultAvatar from './avatar.jpeg';
import { Avatar, Button, Text, Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;

  return (
    <Wrapper>
      <Avatar src={avatar} alt="user avatar" width="32" />
      <Text>Welcome {name}</Text>
      <Button type="button" onClick={() => dispatch(authOperations.logout())}>
        Logout
      </Button>
    </Wrapper>
  );
};
