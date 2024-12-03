import { Modal, DatePicker, TimePicker, Select, Checkbox, Button } from "antd";
import { useState } from "react";
import dayjs from "dayjs";

const DateModal = (props: any) => {
  const [startDate, setStartDate] = useState<dayjs.Dayjs | null>(null);
  const [dueDate, setDueDate] = useState<dayjs.Dayjs | null>(null);
  const [reminder, setReminder] = useState("1 Ngày trước");

  const handleSave = () => {
    console.log("Start Date:", startDate?.format("DD/MM/YYYY"));
    console.log("Due Date:", dueDate?.format("DD/MM/YYYY HH:mm"));
    console.log("Reminder:", reminder);
    props.onClose();
  };

  return (
    <Modal
      width={300}
      title="Ngày"  
      open={props.isOpen}
      footer={null}
      onCancel={props.onClose}
      style={{ marginRight: 400, marginTop: 240 }}
    >
      <div style={{ marginBottom: 16 }}>
        <Checkbox
          checked={!!startDate}
          onChange={(e) =>
            setStartDate(e.target.checked ? dayjs() : null)
          }
        >
          Ngày bắt đầu
        </Checkbox>
        {startDate && (
          <DatePicker
            value={startDate}
            onChange={(date) => setStartDate(date)}
            style={{ width: "100%" }}
          />
        )}
      </div>

      <div style={{ marginBottom: 16 }}>
        <Checkbox
          checked={!!dueDate}
          onChange={(e) =>
            setDueDate(e.target.checked ? dayjs() : null)
          }
        >
          Ngày hết hạn
        </Checkbox>
        {dueDate && (
          <div style={{ display: "flex", gap: 8 }}>
            <DatePicker
              value={dueDate}
              onChange={(date) => setDueDate(date)}
            />
            <TimePicker
              value={dueDate}
              onChange={(time) =>
                setDueDate(dueDate?.set("hour", time?.hour() || 0).set("minute", time?.minute() || 0))
              }
            />
          </div>
        )}
      </div>

      <div style={{ marginBottom: 16 }}>
        <span>Thiết lập Nhắc nhở</span>
        <Select
          value={reminder}
          onChange={setReminder}
          style={{ width: "100%", marginTop: 8 }}
        >
          <Select.Option value="1 Ngày trước">1 Ngày trước</Select.Option>
          <Select.Option value="2 Ngày trước">2 Ngày trước</Select.Option>
          <Select.Option value="1 Giờ trước">1 Giờ trước</Select.Option>
        </Select>
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8 }}>
        <Button onClick={props.onClose}>Gỡ bỏ</Button>
        <Button type="primary" onClick={handleSave}>
          Lưu
        </Button>
      </div>
    </Modal>
  );
};

export default DateModal;
