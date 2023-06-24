import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TOKEN_CYBER } from "../../constants/baseContants";

function MovieDetail() {
    const [movie, setMovie] = useState({});
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            axios
                .get(
                    `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
                    {
                        headers: {
                            TokenCybersoft: TOKEN_CYBER,
                        },
                    }
                )
                .then((result) => {
                    console.log(result);
                    setMovie(result.data.content);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [id]);

    return <div>MovieDetail</div>;
}

export default MovieDetail;
