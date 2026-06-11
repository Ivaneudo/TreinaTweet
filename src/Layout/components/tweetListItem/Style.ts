import styled from "@emotion/styled";

export const TweetList =  styled.ul`
  list-style-type: none;
  margin: 32px 0;
  padding: 0;
`;

export const TweetListItem = styled.li`
  padding: 16px 0;

  &:not(:last-child) {
    border-bottom: 1px solid ${({theme}) => theme.color.border};
  }
`;