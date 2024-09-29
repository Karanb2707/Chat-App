import MessageInput from "./MessageInput.jsx"
import Messages from "./Messages.jsx"

const MessageContainer = () => {
    const notChatSelected = true;
    return (
        <div className="md:min-w-[450px] flex flex-col">
            {notChatSelected ? (
                <NotChatSelected/>
            ) : (
                <>
                <div className="bg-slate-100 px-4 py-2 mb-2">
                    <span className="label-text">To:</span> <span className="text-gray-900 font-bold">Krutika</span>
                </div>
                <Messages/>
                <MessageInput/>
            </>
            )}
        </div>
    )
}

export default MessageContainer

const NotChatSelected = () =>{
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 Karan Bolake</p>
                <p>Select Chat to start messaging 💬</p>
            </div>
        </div>
    )
}