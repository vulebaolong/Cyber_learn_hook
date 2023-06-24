import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TOKEN_CYBER } from "../../constants/baseContants";

function Home() {
    const [listMovie, setListMovie] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(
                "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
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
            });
    }, []);

    const renderListMovie = () => {
        return listMovie.map((item, index) => {
            return (
                <div className="col-4" key={index}>
                    <div className="card">
                        <img src={item.hinhAnh} alt="" />
                        <div className="card-body">
                            <h2 className="">ten phim {item.tenPhim}</h2>
                            <button
                                onClick={() => {
                                    navigate(`/list-movie/${item.maPhim}`);
                                }}
                                className="btn btn-success"
                            >
                                xem chi tiet
                            </button>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div
            className="container
        "
        >
            <h1>Danh sachs phim</h1>
            <div className="row">{renderListMovie()}</div>
        </div>
    );
}

export default Home;
