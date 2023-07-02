import { Button, Col, Form, Input, Row, Typography, message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { TOKEN_CYBER } from "./../../api/baseApi";
import { setLocalStorage } from "../../utils/localStorage";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [messageApi, contextHolder] = message.useMessage();
    const [isLoading, setIsLoading] = useState(false);
    const onFinish = async (values) => {
        try {
            console.log("values", values);
            setIsLoading(true);
            const { data, status } = await axios.post(
                "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
                values,
                {
                    headers: {
                        TokenCybersoft: TOKEN_CYBER,
                    },
                }
            );
            if (status !== 200) throw new Error(`status: status`);

            console.log("data", data);
            messageApi.open({
                type: "success",
                content: "Đăng nhập thành công",
            });
            setLocalStorage("accessToken", data.content.accessToken);
            setLocalStorage("userLogin", data.content);
            navigate("/list-movie");
        } catch (error) {
            console.log("👙  error: ", error);
            messageApi.open({
                type: "error",
                content: "Có lỗi xảy ra",
            });
        } finally {
            setIsLoading(false);
        }
    };
    const onFinishFailed = (error) => {
        console.log("error", error);
        messageApi.open({
            type: "error",
            content: "This is an error message",
        });
    };
    return (
        <div className="container">
            {contextHolder}
            <Typography
                style={{ textAlign: "center", fontWeight: 700, margin: "60px 0" }}
            >
                Đăng nhập
            </Typography>
            <Row justify={"center"}>
                <Col span={16}>
                    <Form
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        validateTrigger={["onBlur", "onSubmit", "onChange"]}
                    >
                        <Form.Item
                            name="taiKhoan"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập thông tin tài khoản",
                                },
                            ]}
                        >
                            <Input placeholder="Tài khoản" size="large" />
                        </Form.Item>
                        <Form.Item
                            name="matKhau"
                            rules={[
                                {
                                    required: true,
                                    message: "Vui lòng nhập thông tin mật khẩu",
                                },
                                // {
                                //   pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                                //   message: "Mật khẩu ít nhất 8 ký tự và bao gồm 1 ký tự viết hoa"
                                // }
                            ]}
                        >
                            <Input.Password placeholder="Mật khẩu" size="large" />
                        </Form.Item>
                        <div style={{ textAlign: "end" }}>
                            <Button htmlType="submit" type="primary" loading={isLoading}>
                                Đăng nhập
                            </Button>
                        </div>
                    </Form>
                </Col>
            </Row>
        </div>
    );
}

export default Login;
