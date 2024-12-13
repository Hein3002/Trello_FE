import React, { useState, ReactNode } from 'react';
import { Popconfirm, Popover } from 'antd';

type CustomPopProps = {
  children: ReactNode;
  content?: ReactNode;
  title?: ReactNode;
  action?: boolean
};

const CustomPop: React.FC<CustomPopProps> = ({ children, content, title, action = false }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setConfirmLoading(true);

    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  return (
    action ? (
      <Popconfirm
        title={title}
        description={content}
        open={open}
        onConfirm={handleOk}
        okButtonProps={{ loading: confirmLoading }}
        onCancel={handleCancel}
        icon=""
      >
        <div onClick={showPopconfirm}>
          {children}
        </div>
      </Popconfirm>
    ) : (
      <Popover
        title={title}
        content={content}
        trigger="click"
      >
        {/* Đảm bảo có phần tử để kích hoạt Popconfirm */}
        <div onClick={showPopconfirm}>
          {children}
        </div>
      </Popover>
    )
  )
};

export default CustomPop;