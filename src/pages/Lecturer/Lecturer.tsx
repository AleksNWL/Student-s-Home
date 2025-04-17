export default function Lecturer() {
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const name = formData.get('name') as string;
        const datetime = formData.get('datetime') as string;

        const title = "Изменение в расписании";
        const body = `${name} перенесена на ${datetime}`;

        window.dispatchEvent(
            new CustomEvent('show-notification', {
                detail: { title, body }
            })
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Предмет" required />
            <input type="datetime-local" name="datetime" required />
            <button type="submit">Отправить сообщение</button>
        </form>
    );
}
