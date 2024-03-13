import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import userData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json"
import './App.css'

export default function App() {
  return (
    <>
    <h1>Task 1</h1>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
    <h1>Task 2</h1>
      <FriendList friends={friends} />
    <h1>Task 3</h1>
    <TransactionHistory items={transactions} />
    </>
  );
}
