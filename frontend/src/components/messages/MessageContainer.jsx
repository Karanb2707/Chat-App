import { useEffect } from "react"
import useConversation from "../../zustand/useConversation.js"
import MessageInput from "./MessageInput.jsx"
import Messages from "./Messages.jsx"
import { useAuthContext } from "../../context/AuthContext.jsx"

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation()

    useEffect(() => {
        //cleanup function
        return () => setSelectedConversation(null)
    },[setSelectedConversation]);

    return (
        <div className="md:min-w-[450px] flex flex-col">
            {!selectedConversation ? (
                <NotChatSelected/>
            ) : (
                <>
                <div className="bg-slate-100 px-4 py-2 mb-2">
                    <span className="label-text">To:</span>{" "}
                    <span className="text-gray-900 font-bold">{selectedConversation.fullname}</span>
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
    const {authUser}= useAuthContext()
    return (
        <div className="flex items-center justify-center w-full h-full">
            <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p>Welcome 👋 {authUser.fullname}</p>
                <p>Select Chat to start messaging 💬</p>
            </div>
        </div>
    )
}