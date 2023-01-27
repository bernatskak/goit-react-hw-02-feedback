import styled from '@emotion/styled';

export const FeedbackList = styled.ul`
  display: flex;
  flex-direction: raw;
  gap: 20px;
`;
export const FeedbackItem = styled.li``;
export const FeedbackBtn = styled.button`
  text-transform: capitalize;
  width: 100px;
  font-size: 16px;
  font-weight: 400;
  color: black;
  padding: 5px 10px;
  border: 1px solid grey;
  border-radius: 4px 4px 4px 4px;
  cursor: pointer;
  transition: scale 300ms ease-in-out;
  outline: none;
  &:hover {
    scale: 1.2;
  }
  :active {
    color: #fff;
  }
`;

