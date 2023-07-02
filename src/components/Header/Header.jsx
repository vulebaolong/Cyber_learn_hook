import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { HomeOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Button, Menu, Space } from "antd";
import { getLocalStorage } from "../../utils/localStorage";

const items = [
    {
        label: <NavLink to="/">Home</NavLink>,
        key: "Home",
        icon: <HomeOutlined />,
    },
    {
        label: "Submenu",
        key: "SubMenu",
        icon: <SettingOutlined />,
        children: [
            {
                type: "group",
                label: "Item 1",
                children: [
                    {
                        label: "Option 1",
                        key: "setting:1",
                    },
                    {
                        label: "Option 2",
                        key: "setting:2",
                    },
                ],
            },
            {
                type: "group",
                label: "Item 2",
                children: [
                    {
                        label: "Option 3",
                        key: "setting:3",
                    },
                    {
                        label: "Option 4",
                        key: "setting:4",
                    },
                ],
            },
        ],
    },
];

function Header() {
    const navigate = useNavigate();
    const userLogin = getLocalStorage("userLogin");
    console.log(userLogin);
    const [current, setCurrent] = useState("mail");
    const onClick = (e) => {
        console.log("click ", e);
        setCurrent(e.key);
    };
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
                style={{ flex: 1, backgroundColor: "transparent" }}
            />
            {userLogin === undefined ? (
                <Space>
                    <Button
                        onClick={() => {
                            navigate("/login");
                        }}
                    >
                        Đăng nhập
                    </Button>
                    <Button type="primary">Đăng ký</Button>
                </Space>
            ) : (
                <Space size={10}>
                    <Avatar src="https://picsum.photos/200" size={40} />
                    <span style={{ fontWeight: 700 }}>{userLogin.hoTen}</span>
                </Space>
            )}
        </div>
    );
}

export default Header;
