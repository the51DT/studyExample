import { useParams } from 'react-router-dom';

const data = {
  dong: {
    name: '강동원',
    description: '잘생긴 사람',
  },
  gil: {
    name: '홍길동',
    description: '이름이 명함',
  },
};

const Profile = () => {
  const params = useParams();
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

export default Profile;