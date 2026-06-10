import styled from "@emotion/styled";

export const StyleTitle = styled.h1`
  font-size: 24px;
  color: ${({theme}) => theme.color.primary};
  border-bottom: 1px solid ${({theme}) => theme.color.border};
  padding: 8px 0;
  margin: 0 0 16;
`;