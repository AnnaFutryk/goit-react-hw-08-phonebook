import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const Text = styled.span`
  font-weight: 700;
  color: lightblue;
  font-size: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  width: 80px;
  padding: 6px;
  border-radius: 16px;
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: dark;
  box-shadow: inset 0 3px 4px #ffffff, inset 0 -3px 4px lightblue;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    box-shadow: 0 3px 4px aqua, 0 -3px 4px #ffffff;
  }
`;
