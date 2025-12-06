import { useState } from 'react';

function UserIndex () {
  const [tweetList, setTweetList] = useState([]);
  const [text, setText] = useState('');
  const maxLength = 125;
  const tweet = {
    date: new Date(),
    text: text,
    user: {
      name: 'Ivaneudo Carvalho',
      username: '@ivaneudo.r',
      picture: 'https://github.com/Ivaneudo.png'
    }
  }
  
  function onTextChange (event) {
    const text = event.target.value;  
    if (text.length <= maxLength) {
      setText(text);
    }
  }

  function sendTwitte (event) {
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