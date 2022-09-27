
import Home from './pages/home/Home';
import TopBar from './components/topbar/TopBar';
import Single from './pages/single/single'
import Settings from './pages/settings/settings'
import Write from './pages/write/write'
import Login from './pages/login/login'
import Register from './pages/register/register'
import { Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import { Context } from './context/Context';

function App() {
  const {user} = useContext(Context);
  return (
    <div className='app'>
      <TopBar />
     <main>
     <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} /> */}

        <Route path="/register" element={ user ? (<Home />) : (<Register />)} />

        <Route path="/login" element={ user ? (<Login />) : (<Login />)} />
        <Route path="/write" element={user ? (<Write/>) : (<Register/>)} />
        <Route path="/setting" element={ user ? <Settings /> : <Register />} />
        <Route path="/post/:postId" element={<Single />} />
        {/* <Route path="teams/:teamId" element={<Team />} />
        <Route path="teams/new" element={<NewTeamForm />} /> */}
        <Route path='*' element={<h1 style={{textAlign: 'center', marginTop: '50px'}}>Page Not Found</h1>} />
      </Routes>
     </main>
 
    </div>
  );
};

export default App;
