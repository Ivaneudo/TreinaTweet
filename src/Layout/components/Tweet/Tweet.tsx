import { formatDistanceToNow } from 'date-fns';
import type { Tweet as tweetInterface } from '../../../types/tweet.interfaces.js';
import { AvatarPost } from '../avatar/style.js';
import { TweetContainer, TweetTaxt, User } from '../conteiner/style.js';
import { TextSpan } from '../TextSpan/style.js';

export interface TweetProps {
  tweet: tweetInterface;
}

function Tweet ({ tweet }: TweetProps) {

  const publishedToNew = formatDistanceToNow(new Date(tweet.date), {
    addSuffix: true
  })

  return (
    <>
      <TweetContainer>
        <AvatarPost src={tweet.user.picture} alt='perfil'/>
        {/* <img  className={styles.avatar} src={tweet.user.picture} alt="perfil"/> */}
        <User>
          <TextSpan variant='userName'>{tweet.user.name}</TextSpan>
          <TextSpan variant='userUserName'>{tweet.user.username}</TextSpan>
          {/* <span className={styles.userUserName}>{tweet.user.username}</span> */}
          <TextSpan variant='date'> - {publishedToNew}</TextSpan>
          {/* <span className={styles.date}> - {publishedToNew}</span> */}
        </User>
        <TweetTaxt>
          {tweet.text}
        </TweetTaxt>
      </TweetContainer>
    </>
  )
}

export default Tweet;