import {Link} from "react-router-dom";
import {Button} from "antd";


export default function Home() {
    return (
        <div className="main-container">
            <h1>Дом для студента!</h1>
            <Button type="primary">
                <Link to={"about"}>
                    О функционале
                </Link>
            </Button>
        </div>
    )
}