import React, { useEffect, useState } from 'react';
import { Input, Button, Typography, Card, Space, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import classNames from 'classnames/bind';
import style from "./Chat.module.scss"
import { createMessageAPI, getMessageAPI } from '../../services/Message/Message.service';
import { io, Socket } from 'socket.io-client';
import { isArray } from 'lodash';

const { Text, Title } = Typography;
const cx = classNames.bind(style)

const ChatApp = (props: any) => {
  const { converSation } = props
  const idUser = localStorage.getItem("user_id")

  const [messageData, setMessageData] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState('');

  const [socket, setSocket] = useState<Socket | null>(null);

  const fetchMessage = async () => {
    const response = await getMessageAPI(converSation.conversation_id as string)
    if (isArray(messageData)) {
      setMessageData(response)
    }
  }


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };
  const handleSendMessage = async () => {
    if (inputValue.trim() && socket) {
      // Send message to the server
      socket.emit('send_message', inputValue);

      // Display user's message in the chat
      setMessageData((prevMessages) => [
        ...prevMessages,
        { message: inputValue, sender_id: idUser as string },
      ]);
      await createMessageAPI({
        sender_id: idUser,
        conversation_id: converSation?.conversation_id,
        message: inputValue
      })
      setInputValue('');
    }
  };




  useEffect(() => {
    const newSocket = io('http://localhost:4040');
    setSocket(newSocket);
    newSocket.on('receive_message', (message: string, user_id: string) => {
      setMessageData((prevMessages) => [
        ...prevMessages,
        { message: message, sender_id: user_id },
      ]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [messageData]);

  useEffect(() => {
    socket?.emit("new_user_add", idUser);
  }, [])

  useEffect(() => {
    fetchMessage()
  }, [converSation?.conversation_id])

  return (
    <div className={cx("chat")}>
      <Title level={5} style={{ margin: "10px" }}>
        <Avatar ><UserOutlined/></Avatar>
        {converSation.name}
      </Title>
      <Card
        className={cx("chat-content")}
        style={{
          borderRadius: 0
        }}
        styles={{
          body: {
            padding: "10px",
            overflow: "auto"
          },
        }}
      >
        {messageData?.map((msg, index) => (
          <div
            key={index}
            className={cx("chat-message")}
            style={{
              display: 'flex',
              justifyContent: msg.sender_id == idUser ? 'flex-end' : 'flex-start',
              marginBottom: '16px',
            }}
          >
            <Space align="start">
              {msg.sender_id != idUser && (
                <Avatar style={{ backgroundColor: '#87d068' }}><UserOutlined/></Avatar>
              )}
              <Card
                styles={{
                  body: {
                    padding: '5px 10px',
                    maxWidth: "200px"
                  }
                }}>
                <Text>{msg.message}</Text>
              </Card>
              {msg.sender_id == idUser && (
                <></>
              )}
            </Space>
          </div>
        ))}
      </Card>
      <div className={cx("chat-input")}>
        <Input.TextArea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          autoSize={{ minRows: 1, maxRows: 4 }}
        />
        <div>
          <Button type="text" onClick={handleSendMessage} className={cx("btn-send")}>
            Gửi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
