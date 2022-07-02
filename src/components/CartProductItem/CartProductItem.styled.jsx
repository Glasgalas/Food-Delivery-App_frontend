import styled from '@emotion/styled';

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;

  border-radius: 10px;
  padding: 10px;
  &:hover {
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.25);
  }
`;

export const Text = styled.p`
  font-size: 16px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
