import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_CYBER } from "../../constants/baseContants";
import { Avatar, Button, Card, Col, Row, Skeleton, Typography } from "antd";
import SkeListMovie from "../../components/SkeListMovie/SkeListMovie";
import useStickyState from "../../hooks/useStickyState";
import { useSelector } from "react-redux";
const { Meta } = Card;
const { Text, Link } = Typography;

function Home() {
    const [listMovie, setListMovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        axios
            .get(
                "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP02",
                {
                    headers: {
                        TokenCybersoft: TOKEN_CYBER,
                    },
                }
            )
            .then((result) => {
                console.log(result);
                setListMovie(result.data.content);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const {value, setValue} = useStickyState("green", "persisted-color")

    const renderListMovie = () => {
        return listMovie.map((item, index) => {
            return (
                // <div className="col-4" key={index}>
                //     <div className="card">
                //         <img src={item.hinhAnh} alt="" />
                //         <div className="card-body">
                //             <h2 className="">ten phim {item.tenPhim}</h2>
                //             <button
                //                 onClick={() => {
                //                     navigate(`/list-movie/${item.maPhim}`);
                //                 }}
                //                 className="btn btn-success"
                //             >
                //                 xem chi tiet
                //             </button>
                //         </div>
                //     </div>
                // </div>
                <Col span={6} key={index}>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        loading={loading}
                        cover={
                            <img
                                style={{ height: 300 }}
                                alt="example"
                                src={item.hinhAnh}
                            />
                        }
                        actions={[
                            <Button
                                onClick={() => {
                                    navigate(`/list-movie/${item.maPhim}`);
                                }}
                            >
                                Detail
                            </Button>,
                            <Button
                                type="primary"
                                onClick={() => {
                                    // navigate(`/list-movie/${item.maPhim}`);
                                }}
                            >
                                Booking
                            </Button>,
                        ]}
                    >
                        <Meta
                            title={item.tenPhim}
                            description={
                                <Text ellipsis={{ tooltip: item.moTa }}>{item.moTa}</Text>
                            }
                        />
                    </Card>
                </Col>
            );
        });
    };


    return (

        <div
            className="container
        "
        >
            <h1>Danh sachs phim</h1>
            {loading && <SkeListMovie loading={loading} />}
            <Row gutter={[32, 32]}>{!loading && renderListMovie()}</Row>
        </div>
    );
}

export default Home;
