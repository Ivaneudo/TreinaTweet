import styled from "@emotion/styled";

export const TweetContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-areas: 
    'avatar user' 
    'avatar text';
  gap: 4px 16px;
  overflow-wrap: anywhere;
`;

export const User = styled.div`
  grid-area: user;
`;

export const TweetTaxt = styled.div`

`;