import { List } from "antd";

interface NotificationItem {
    id: number;
    subject: string;
    time: string;
}

export default function HistoryMessage({ messages }: { messages: NotificationItem[] }) {
    return (
        <div style={{ bottom: 0 }}>
            <h2 style={{ fontSize: 20, textAlign: "center" }}>История изменений в расписании</h2>
            <List
                style={{
                    width: 500,
                    height: 300,
                    overflowY: "auto",
                }}
                bordered
                dataSource={messages}
                renderItem={(item) => (
                    <List.Item>
                        {item.subject} - {item.time}
                    </List.Item>
                )}
                locale={{ emptyText: "Пусто" }}
            />
        </div>
    );
}
