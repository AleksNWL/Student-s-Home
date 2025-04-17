import React, { useState, useEffect } from "react";
import {Input, Button, DatePicker, Form} from "antd";
import { CaretLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import HistoryMessage from "../../components/HistoryMessage/HistoryMessage";


interface NotificationItem {
    id: number;
    subject: string;
    time: string;
}

const Lecturer = () => {
    const [messages, setMessages] = useState<NotificationItem[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem("notifications");
        if (stored) {
            const parsed: NotificationItem[] = JSON.parse(stored);
            const sorted = parsed.sort((a, b) => b.id - a.id);
            setMessages(sorted);
        }
    }, []);

    const handleSubmit = (values: any) => {
        const { name, datetime } = values;
        const date = datetime.toDate();

        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();

        const formattedDate = `${hours}:${minutes} ${day}.${month}.${year}`;

        const title = "Изменение в расписании";
        const body = `${name} перенесен на ${formattedDate}`;

        if (Notification.permission === 'granted') {
            new Notification(title, {
                body,
                icon: logo
            });

            const newMessage = {
                id: Date.now(),
                subject: name,
                time: formattedDate,
            };

            const updated = [newMessage, ...messages]; // добавим в начало
            localStorage.setItem("notifications", JSON.stringify(updated));
            setMessages(updated);
        }
    };

    return (
        <>
            <Link to={"/about"} className="link-back"><CaretLeftOutlined />About</Link>
            <div className="main-container" style={{ maxWidth: 500, margin: "0 auto", padding: 20 }}>
                <Form onFinish={handleSubmit} layout="vertical">

                    <Form.Item
                        label="Предмет"
                        name="name"
                        rules={[{ required: true, message: "Введите название предмета" }]}
                    >
                        <Input placeholder="Введите название предмета" />
                    </Form.Item>

                    <Form.Item
                        label="Дата"
                        name="datetime"
                        rules={[{ required: true, message: "Введите дату и время переноса" }]}
                    >
                        <DatePicker
                            showTime
                            format="HH:mm DD.MM.YYYY"
                            placeholder="Выберите дату и время"
                            style={{ width: "100%" }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Отправить сообщение студентам
                        </Button>
                    </Form.Item>
                </Form>
                <HistoryMessage messages={messages} />
            </div>
        </>
    );
};

export default Lecturer;
