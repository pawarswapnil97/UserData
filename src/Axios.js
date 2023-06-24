import { useState, useEffect } from "react";
import axios from "axios";
import DataCard from "./DataCard";
import { Stack } from "react-bootstrap";
function Axios() {
    const [data, setData] = useState([])
    const [dataTemp, setDataTemp] = useState([])

    const [searchdata, setSearchData] = useState([])
    const getData = async () => {
        const res = await axios.get("https://reqres.in/api/users?page=2")
        setData(res.data.data)
        setDataTemp(res.data.data)
     
    }

    useEffect(() => {
        getData()
    }, [])

    function getFilterData(e) {
        console.log('Data is ', e.target.value);
        const tempData = e.target.value;
        setSearchData(e.target.value);
        if(tempData!==""){

            let regex = new RegExp(`^${tempData}`, `i`);
    
            const sortedArr = data
                .filter(x => regex.test(x.first_name))
                .sort((a, b) => a.text.localeCompare(b.first_name));
    
            setData(sortedArr)
        }
        else{
            setData(dataTemp);
        }
    }
    return (
        <>
            <div style={{ justifyContent: "center" }}>
                <div className="input-group mb-3 mt-5 mx-auto" style={{ width: "50%" }}>
                    <input type="text" className="form-control" placeholder="Search First Name  " onChange={getFilterData} value={searchdata} />
                </div>
                {
                    data.map((post, i) => {
                        return (
                            <>
                                <Stack gap={2} className="m-3 p-4">
                                    <DataCard post={post}></DataCard>
                                </Stack>

                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Axios;