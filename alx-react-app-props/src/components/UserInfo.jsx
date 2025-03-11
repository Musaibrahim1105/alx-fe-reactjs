import UserDetails from './UserDetails';

function UserInfo({ userData }) {
  return <UserDetails userData={userData.name} />;
}

export default UserInfo;