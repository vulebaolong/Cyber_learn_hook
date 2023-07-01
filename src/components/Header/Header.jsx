import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Header.css";
import { HomeOutlined, MailOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Menu, Space } from "antd";

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
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const handleInput = (e) => {
        setSearch(e.target.value);
    };
    const handleSearch = (e) => {
        e.preventDefault();
        if (search) {
            navigate(`/search?q=${search}`);
        }
    };
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
            <Space>
                <Button>Đăng nhập</Button>
                <Button type="primary">Đăng ký</Button>
            </Space>
        </div>
    );
}

export default Header;
