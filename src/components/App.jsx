import {Profile} from "components/Profile/Profile";
import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import {Statistics} from "./Statistics/Statistics"
import { FriendsList } from "./FriendList/FriendList";


export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
      <Statistics title={"UPLOAD STATS"} stats={data} />
      <FriendsList friends={friends} />
    </>
  )
}


