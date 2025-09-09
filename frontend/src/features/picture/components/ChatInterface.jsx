import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectToChat, sendMessage, disconnectFromChat } from "../../../store/actions/chatActions";
import { selectChatMessages, selectChatConnected } from "../../../store/selectors/chatSelectors";

const ChatInterface = ({ pictureId }) => {
  const dispatch = useDispatch();
  const messages = useSelector(selectChatMessages);
  const isConnected = useSelector(selectChatConnected);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    dispatch(connectToChat(pictureId));

    return () => {
      dispatch(disconnectFromChat());
    };
  }, [dispatch, pictureId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    dispatch(sendMessage(currentMessage, pictureId));
    setCurrentMessage("");
  };

  const formatTimestamp = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString('he-IL', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow h-full flex flex-col">
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Chat</h2>
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-xs text-gray-500">
              {isConnected ? 'Connected' : 'Disconnected'}
            </span>
          </div>
        </div>
      </div>
      
      {/* Messages Area */}
      <div className="flex-1 p-4 overflow-y-auto min-h-[400px] max-h-[600px]">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500">
            <p>No messages yet.</p>
            <p className="text-sm">Start a conversation about this artwork!</p>
          </div>
        ) : (
          <div className="space-y-3">
            {messages.map((message) => (
              <div key={message.id} className="bg-gray-50 rounded-lg p-3">
                <div className="text-sm text-gray-600 mb-1">
                  {formatTimestamp(message.timestamp)}
                </div>
                <div className="text-gray-900">{message.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t">
        <form onSubmit={handleSubmit}>
          <div className="flex gap-2">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder={isConnected ? "Type your message here..." : "Connecting..."}
              disabled={!isConnected}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100"
            />
            <button
              type="submit"
              disabled={!currentMessage.trim() || !isConnected}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed font-medium"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;