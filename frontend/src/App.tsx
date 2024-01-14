import { useEffect } from 'react';
import './App.css';
import { Landing } from './components/Landing';
import { SignIn } from './components/SignIn';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
import { userAtom } from './store/atoms/user';
import Topbar from './components/Topbar';
import Card from './components/Card';

function App() {
 return <RecoilRoot>
  <StoreApp />
 </RecoilRoot>
}

function StoreApp() {
  const [user, setUser] = useRecoilState(userAtom);

  useEffect(() => {
    onAuthStateChanged(auth, function(user) {
      if (user && user.email) {
        setUser({
          loading: false,
          user: {
            email: user.email
          }
        })
      } else {
        setUser({
          loading: false,
        })
        // No user is signed in.
        console.log('There is no logged in user');
      }
    });
  }, [])

  if (user.loading) {
    return <div>loading ...</div>
  }

  if (!user.user) {
    return <div><SignIn /></div>
  }

  return (
    <div className='place-items-center grid'>
      <div className='max-w-screen-lg w-full'>
        <Topbar />
        <Card>hi there</Card>
      </div>
    </div>
  )
}

export default App
