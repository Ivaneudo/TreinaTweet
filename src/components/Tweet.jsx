import { formatDistanceToNow } from 'date-fns';
import styles from './Tweet.module.css'

function Tweet ({tweet}) {

  const publishedToNew = formatDistanceToNow(new Date(tweet.date), {
    addSuffix: true
  })

  return (
    <>
      <div className={styles.tweetContainer}>
        <img  className={styles.avatar} src={tweet.user.picture} alt="perfil"/>
        <div className={styles.user}>
          <span className={styles.userName}>{tweet.user.name}</span>
          <span className={styles.userUserName}>{tweet.user.username}</span>
          <span className={styles.date}> - {publishedToNew}</span>
        </div>
        <div className={styles.tweetTaxt}>
          {tweet.text}
        </div>
      </div>
    </>
  )
}

export default Tweet;