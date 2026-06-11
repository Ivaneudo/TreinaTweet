import { TweetList, TweetListItem } from "../../components/tweetListItem/Style.js"
import Tweet from '../../components/Tweet/Tweet.js';

export interface TweetUIProps {
  List: any[],
}

export const TweetUI = ({List}: TweetUIProps) => {
  return (
    <>
      <TweetList>
        {List.map((tweet) => {
          return (
            <TweetListItem>
              <Tweet tweet={tweet} />
            </TweetListItem>
          );
        })}
      </TweetList>
    </>
  )
}
