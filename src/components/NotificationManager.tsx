import { useEffect } from 'react';

const NotificationManager = () => {
    useEffect(() => {
        const handler = (e: Event) => {
            const customEvent = e as CustomEvent<{ title: string; body: string }>;
            const { title, body } = customEvent.detail;

            if (Notification.permission === 'granted') {
                new Notification(title, { body });
            }
        };

        window.addEventListener('show-notification', handler);

        return () => {
            window.removeEventListener('show-notification', handler);
        };
    }, []);

    return null;
};

export default NotificationManager;
