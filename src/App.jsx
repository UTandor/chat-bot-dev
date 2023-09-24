// COMPONENTS
import ChatPage from "./components/ChatPage";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import Examples from './components/Examples'
import { Route, Routes } from "react-router-dom";
import Record from './components/Record'

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col flex-auto h-screen ">
          <div className="flex flex-col text-center flex-auto flex-shrink-0 rounded-2xl bg-gray-50 h-full ">
            <Header />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/c" element={<ChatPage />} />
              <Route path="/e" element={<Examples />} />
              <Route path="/c/:msg" element={<ChatPage />} />
              <Route path="/r" element={<Record />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
