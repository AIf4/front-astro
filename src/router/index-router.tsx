import Chat from '@/components/Chat';
import ProfileUser from '@/components/ProfileUser';
import { BrowserRouter as Router, Routes, Route } from 'react-router';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/edit-profile" element={<ProfileUser />} />
    </Routes>
  </Router>
);

export default AppRouter;

  