import UserIndex from '../../../Application/hooks/UserIndex.page.js';
import styled from '@emotion/styled';
import { Postagem } from '../../UI/Post/Index.js';
import { Title } from "../../components/title/Index.js";
import { TweetUI } from "../../UI/TweetList/Indix.js";

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

  const {
    text, 
    maxLength, 
    onTextChange,
    sendTwitte, 
    tweetList 
  } = UserIndex();

  return (
    <>
      <Title>TreinaTweet</Title>

      {/* Renderiza o Avatar, TextArea, button e contador de caracter */}
      <Postagem
        place={"O que está acontecendo?"}
        text={text} 
        onTextChange={onTextChange} 
        maxLength={maxLength}
        sendTwitte={sendTwitte}
      />

      {/* Renderiza a list de posts */}
      <TweetUI
        List={tweetList}
      />
    </>
  );
}

export default Index;
