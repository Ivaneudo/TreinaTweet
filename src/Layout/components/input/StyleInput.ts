import styled from "@emotion/styled";

export const StyleInput = styled.textarea`
  font-size: 18px;
  border: 1px solid ${({theme}) => theme.color.border};
  width: 100%;
  padding: 4px;
  resize: vertical;
`;