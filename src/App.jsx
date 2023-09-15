// COMPONENTS
import Route from "./components/Route";
import ChatPage from "./components/ChatPage";
import Header from "./components/Header";
import WelcomePage from "./components/WelcomePage";


function App() {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col flex-auto h-screen ">
          <div className="flex flex-col text-center flex-auto flex-shrink-0 rounded-2xl bg-gray-50 h-full ">
            <Header />
            <Route path="/">
              <WelcomePage />
            </Route>
            <Route path="/chat">
              <ChatPage />
            </Route>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
