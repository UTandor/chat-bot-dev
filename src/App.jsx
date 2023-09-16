// COMPONENTS
import ChatPage from "./components/ChatPage";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col flex-auto h-screen ">
          <div className="flex flex-col text-center flex-auto flex-shrink-0 rounded-2xl bg-gray-50 h-full ">
            <Header />
            <Routes>
              <Route path="/" element={<WelcomePage />} />
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/chat/:msg" element={<ChatPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
