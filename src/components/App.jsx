import {Profile} from "components/Profile/Profile";
import user from '../data/user.json'
import data from '../data/data.json'
import {Statistics} from "./Statistics/Statistics"


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
    />
      <Statistics title={"UPLOAD STATS"} stats={ data}/>
    </div>
  )
}


