import { ConteinerTweet } from '../../View/pages/Index.js'
import { Avatar } from '../../components/avatar/style.js'
import TextArea from '../../components/input/Index.js';

interface PostagemProps {
  text: string;
  onTextChange: (event: any) => void;
  maxLength: number;
}

export const Postagem = ({text, onTextChange, maxLength}: PostagemProps) => {
  return (
   <ConteinerTweet>
      <Avatar
        src={"https://github.com/Ivaneudo.png"}
        alt="Foto de perfil"
      />
      <TextArea 
        maxLength={maxLength}
        onChange={onTextChange}
        value={text}
      />
    </ConteinerTweet>
  );
}
