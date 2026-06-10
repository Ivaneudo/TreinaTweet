import styles from "./Index.module.css";
import Tweet from '../../components/Tweet.js';
import UserIndex from '../../../Application/hooks/UserIndex.page.js';
import styled from '@emotion/styled';
import { Postagem } from '../../UI/Post/Index.js';
import { Button } from '../../components/button/index.js';
import { Title } from "../../components/title/Index.js";

export const ConteinerTweet = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 16px;
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: end;
  align-items: center;
  gap: 18px;
  margin-top: 16px;
`;

function Index() {

  const { text, maxLength, onTextChange,sendTwitte, tweetList } = UserIndex();

  return (
    <>
      <Title>TreinaTweet</Title>
      <Postagem
        text={text} 
        onTextChange={onTextChange} 
        maxLength={maxLength}
      />
      <div>
        <ButtonContainer>
          <p>
            {text.length}/{maxLength}
          </p>
          <Button
            onClick={sendTwitte}
            disabled={text.length === 0}
          >
            Tweet
          </Button>
        </ButtonContainer>
      </div>

      <ul className={styles.tweetList}>
        {tweetList.map((tweet) => {
          return (
            <li className={styles.tweetListItem}>
              <Tweet tweet={tweet} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Index;
