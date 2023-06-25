import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { TOKEN_CYBER } from "../../constants/baseContants";

function Search() {
    const [listMovie, setlistMovie] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(listMovie);
    useEffect(() => {
        if (searchParams.get("q")) {
            const searchValue = searchParams.get("q");
            axios
                .get(
                    `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01&tenPhim=${searchValue}`,
                    {
                        headers: {
                            TokenCybersoft: TOKEN_CYBER,
                        },
                    }
                )
                .then((reulst) => {
                    console.log(reulst);
                    setlistMovie((prev) => {
                        return reulst.data.content;
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [searchParams]);
    console.log("searchParams", searchParams.get("q"));

    const handleChangePage = () => {
        searchParams.set("page", 1);
        setSearchParams(searchParams);
    };
    return <div>Search</div>;
}

export default Search;
