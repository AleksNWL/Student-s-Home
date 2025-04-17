import { Button } from "antd";
import { useState, useEffect } from "react";
import {CaretLeftOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";

export default function Student() {
    const [rules, setRules] = useState<boolean>(false);

    function handleClick() {
        Notification.requestPermission().then();
    }
    useEffect(() => {
        if (Notification.permission === "granted") {
            setRules(true);
        }
    }, [])

    return (
        <>
            <Link to={"/about"} className="link-back">
                <CaretLeftOutlined />
                About
            </Link>
            <div className="main-container">
                <p>Уведомления студента
                    {rules &&
                        <span>✅</span>}
                </p>
                {!rules && (
                    <Button type="link" onClick={handleClick}>
                        Хочу получать уведомления
                    </Button>
                )}
            </div>
        </>
    );
}
