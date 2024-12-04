import React, { useState } from 'react';
import { Input, Button, Typography, Card, Space, Avatar } from 'antd';

const { Text } = Typography;

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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        padding: '16px',
      }}
    >
      <Card
        title="ChatGPT-like Q&A"
        style={{ flex: 1, overflowY: 'auto', marginBottom: '16px' ,
          wordBreak: 'break-word',
          whiteSpace: 'normal',
        }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
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
                style={{
                  backgroundColor: msg.type === 'question' ? '#e6f7ff' : '#f0f0f0',
                  textAlign: 'left',
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                }}
              >
                <Text>{msg.content}</Text>
              </Card>
              {msg.type === 'question' && (
                <Avatar style={{ backgroundColor: '#1890ff' }}>U</Avatar>
              )}
            </Space>
          </div>
        ))}
      </Card>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' ,}}>
        <Input.TextArea
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type your message..."
          autoSize={{ minRows: 1, maxRows: 4 }}
        />
        <Button type="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatApp;
