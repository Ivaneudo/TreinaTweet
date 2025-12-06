
import TextInput from "../components/TextInput";
import styles from "./Index.module.css"
import Tweet from '../components/Tweet';
import UserIndex from '../hooks/UserIndex.page';

function Index () {
  
  const {
    text,
    onTextChange,
    maxLength,
    sendTwitte,
    tweetList
  } = UserIndex();

  return (
    <>
      <div>
        <h1 className={styles.pageTitle}>TreinaTweet</h1>
      </div>
      <div className={styles.tweetContainer}>
        <img className={styles.avatar} src={"https://github.com/Ivaneudo.png"} alt="Foto de perfil"/>
        <TextInput
          placeholder={'O que está acontecendo? '} 
          maxLength={maxLength}
          onChange={onTextChange}
          value={text}
        />
      </div>
      <div>
        <div className={styles.buttonContainer}>
          <p>{text.length}/{maxLength}</p>
          <button 
            className={styles.postButton} 
            onClick={sendTwitte} 
            disabled={text.length === 0}
          >Tweet</button>
        </div>
      </div>

      <ul className={styles.tweetList} >
        {tweetList.map(tweet => {
            return (
              <li className={styles.tweetListItem} >
                <Tweet tweet={tweet}/>
              </li>
            )
          })}
      </ul>
    </>
  )
}

export default Index;