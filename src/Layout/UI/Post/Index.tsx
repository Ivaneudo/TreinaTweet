import type { FormEvent } from 'react';
import UserIndex from '../../../Application/hooks/UserIndex.page.js';
import { ButtonContainer, ConteinerTweet } from '../../View/pages/Index.js'
import { Avatar } from '../../components/avatar/style.js'
import { Button } from '../../components/button/index.js';
import TextArea from '../../components/input/Index.js';

interface PostagemProps {
  place: string;
  text: string;
  onTextChange: (event: any) => void;
  maxLength: number;
  sendTwitte: (e: FormEvent<Element>) => void;
}

export const Postagem = (
  {
    place,
    text,
    onTextChange,
    maxLength,
    sendTwitte
  }: PostagemProps) => {

  return (
    <>
      <ConteinerTweet>
        <Avatar
          src={"https://github.com/Ivaneudo.png"}
          alt="Foto de perfil"
          />
        <TextArea 
          placeholder={place}
          maxLength={maxLength}
          onChange={onTextChange}
          value={text}
          />
      </ConteinerTweet>
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
    </>
  );
}
