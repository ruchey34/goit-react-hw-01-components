import user from "./UserData/user";
import data from "./UserData/data";
import friendsData from "./UserData/friends";
import transactionData from "./UserData/transactions";
import Profile from "./Profile";
import Statistics from "./Statistics";
import FriendList from "./FriendList";
import Transaction from "./Transactions";
export const App = () => {
  return (
    <div
      style={{
        paddingTop: 40,
        // height: 2500,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 40,
        color: "#010101",
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsData} />
      <Transaction items={transactionData} /> 
    </div>
  );
};
