import styled from "@emotion/styled";

export const StyleButton = styled.button`
  background-color: ${({theme}) => theme.color.primary};
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: ${({theme}) => theme.color.primarylight};
    pointer-events: none;
  }
`;