import {Link} from "react-router-dom";
import {Button} from "antd";
import "./About.css"
import {CaretLeftOutlined} from "@ant-design/icons";

export default function About() {
    return (
        <>
            <Link to={"/"} className="link-back"><CaretLeftOutlined />Home</Link>
            <div className="main-container">
                <h1>Возможности:</h1>
                <div className="container-links">
                    <Button color="danger" variant="solid">
                        <Link to={"/about/lecturer"}>
                            Для преподавателя
                        </Link>
                    </Button>
                    <Button color="primary" variant="solid">
                        <Link to={"/about/student"}>
                            Уведомления студента
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    )
}