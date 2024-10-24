import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";
import notficationSound from "../assets/sounds/notification_sound.mp3";

const useListenMessages = () => {
    const { socket } = useSocketContext();
    const { messages, setMessages } = useConversation()

    useEffect(() => {
        socket.on("newMessage", (newMessage) => {
            newMessage.shouldShake = true;
            const sound = new Audio(notficationSound);
            sound.play();
            setMessages([...messages, newMessage])
        })

        return () => socket?.off("newMessage")
    }, [socket, setMessages, messages])
}

export default useListenMessages