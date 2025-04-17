import { Button } from "antd";
import { useState } from "react";

export default function Student() {
    const [rules, setRules] = useState<boolean>(false);

    function handleClick() {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                setRules(true);
            } else {
                console.log("Пользователь не разрешил уведомления!");
            }
        });
    }

    return (
        <>
            <div>Уведомления студента</div>
            <Button type="link" onClick={handleClick}>Хочу получать уведомления</Button>
            {rules && <div>Уведомления активированы</div>}
        </>
    );
}
