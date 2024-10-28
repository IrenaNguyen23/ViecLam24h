import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientRouter from './routers/ClientRouter';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/*" element={<ClientRouter />} />
        </Routes>
      </Router>
  );
}

export default App;
