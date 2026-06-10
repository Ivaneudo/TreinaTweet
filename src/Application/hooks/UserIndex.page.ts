import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { Tweet as tweetInterface } from '../../types/tweet.interfaces.js';

function UserIndex () {
  const [tweetList, setTweetList] = useState<tweetInterface[]>([]);
  const [text, setText] = useState('');
  const maxLength = 125;
  const tweet: tweetInterface = {
    date: new Date(),
    text: text,
    user: {
      name: 'Ivaneudo Carvalho',
      username: '@ivaneudo.r',
      picture: 'https://github.com/Ivaneudo.png'
    }
  }
  
  function onTextChange (event: ChangeEvent<HTMLTextAreaElement>) {
    const text: string = event.target.value;  
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  function sendTwitte (event: FormEvent) {
    event.preventDefault();
    setTweetList([...tweetList, tweet]);
    setText('');
  }

  return {
    text,
    onTextChange,
    maxLength,
    sendTwitte,
    tweetList
  }
}

export default UserIndex;