

import { useParams } from "react-router-dom";
import useData from "../../components/Hooks/useData";
import { useEffect, useState } from "react";

const Product = () => {
    const [selectedData, setSelectedData] = useState([]);
    const [loading, setLoading] = useState(true);

    const data = useData()
    const allDatas = data[0];
    // console.log(allDatas);


    const passedCategory = useParams();
    const selectedCategory = passedCategory.category.toLocaleLowerCase();
    // console.log(selectedCategory);


    useEffect(() => {
        if (allDatas.length > 0 && selectedCategory.length > 0) {
            const filteredData = allDatas.filter((item) => item.category == selectedCategory);
            setSelectedData(filteredData);
            setLoading(false);
        }
        else {
            console.log('Nothing to console')
            setLoading(true)
        }
    }, [allDatas, selectedCategory]);

    useEffect(() => {
        console.log(selectedData);
    }, [selectedData]);

    if (loading) {
        return <div className="texy-7xl">Loading...</div>;
    }

    return (
        <div className='pt-20'>
            <h2 className='text-3xl'>This is th product Page</h2>
        </div>
    );
};

export default Product;