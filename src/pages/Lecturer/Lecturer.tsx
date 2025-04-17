import React from "react";
import { Input, Button, DatePicker, Form } from "antd";
import {CaretLeftOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";


const Lecturer = () => {
    const handleSubmit = (values: any) => {
        const { name, datetime } = values;
        const date = datetime.toDate(); // Преобразуем moment объект в Date

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
                body: body,
            });
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
                        rules={[{ required: true}]}
                    >
                        <Input placeholder="Введите название предмета" />
                    </Form.Item>

                    <Form.Item
                        label="Перенос на"
                        name="datetime"
                        rules={[{ required: true}]}
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
                            Отправить сообщение
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default Lecturer;
