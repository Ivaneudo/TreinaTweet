import style from './TextInput.module.css'

function TextInput ({...props}) {
  return (
    <>
      <div>
        <textarea
          className={style.input}
        {...props}
        ></textarea>
        {/*
          <button type={sendTwitte}>Enviar</button>
          {tweetList.map(tweet => {
            return (
              <p>{tweet}</p>
            )
          })}
        */}
      </div>
    </>
  );
}

export default TextInput;