import { Avatar, Button, Card, Col, Row, Skeleton } from "antd";
import Meta from "antd/es/card/Meta";
import React from "react";

function SkeListMovie(props) {
    const { loading } = props;
    return (
        <Row gutter={[32, 32]}>
            {
                <>
                    <Col span={6}>
                        <Card
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}
                            actions={[
                                <Button>Detail</Button>,
                                <Button type="primary">Booking</Button>,
                            ]}
                        >
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                    avatar={
                                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                                    }
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Skeleton>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}
                            actions={[
                                <Button>Detail</Button>,
                                <Button type="primary">Booking</Button>,
                            ]}
                        >
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                    avatar={
                                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                                    }
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Skeleton>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}
                            actions={[
                                <Button>Detail</Button>,
                                <Button type="primary">Booking</Button>,
                            ]}
                        >
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                    avatar={
                                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                                    }
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Skeleton>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card
                            style={{
                                width: 300,
                                marginTop: 16,
                            }}
                            actions={[
                                <Button>Detail</Button>,
                                <Button type="primary">Booking</Button>,
                            ]}
                        >
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                    avatar={
                                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />
                                    }
                                    title="Card title"
                                    description="This is the description"
                                />
                            </Skeleton>
                        </Card>
                    </Col>
                </>
            }
        </Row>
    );
}

export default SkeListMovie;
