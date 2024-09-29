import MessageContainer from "../../components/messages/MessageContainer.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";

const Home = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  );
};

export default Home;