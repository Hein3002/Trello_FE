import React, { useState } from 'react';
import { Input, Button, Typography, Card, Space, Avatar } from 'antd';
import classNames from 'classnames/bind';
import style from "./Chat.module.scss"

const { Text, Title } = Typography;
const cx = classNames.bind(style)

const ChatApp = () => {
  const [messages, setMessages] = useState([
    { type: 'question', content: 'Hello!' },
    { type: 'answer', content: 'Hi there! How can I assist you today?' },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { type: 'question', content: inputValue },
        {
          type: 'answer',
          content: 'This is a static response.', // Dữ liệu trả lời cứng
        },
      ]);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={cx("chat")}>
      <Title level={5} style={{ margin: "10px" }}>
      <Avatar src={<img src={'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'} alt="avatar" />} />
        Thằng này tí trượt
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
        {messages.map((msg, index) => (
          <div
            key={index}
            className={cx("chat-message")}
            style={{
              display: 'flex',
              justifyContent: msg.type === 'question' ? 'flex-end' : 'flex-start',
              marginBottom: '16px',
            }}
          >
            <Space align="start">
              {msg.type === 'answer' && (
                <Avatar style={{ backgroundColor: '#87d068' }}>AI</Avatar>
              )}
              <Card
                styles={{
                  body: {
                    padding: '5px 10px',
                    maxWidth: "200px"
                  }
                }}>
                <Text>{msg.content}</Text>
              </Card>
              {msg.type === 'question' && (
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
