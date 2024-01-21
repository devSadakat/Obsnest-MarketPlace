import { useEffect, useState } from "react";
import Category from "../../../components/Category/Category";
import Carousel from "../Carousel/Carousel";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const HomeMain = () => {

    const [productsData, setData] = useState([])

    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => {
                setData(data)
                // console.log(productsData)
            })
    }, [productsData])
    return (
        <div className="pt-14" >
            <div className="sm:flex mx-auto">
                <div className="sm:w-[75%]">
                    <Carousel></Carousel>
                </div>
                <div className="h-96 carousel-vertical m-auto rounded-2xl">
                    <div className="h-full">
                        <img className="mx-auto" src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
                    </div>
                    <div className="h-full">
                        <img className="mx-auto" src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
                    </div>
                    <div className="h-full">
                        <img className="mx-auto" src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
                    </div>
                    <div className="h-full">
                        <img className="mx-auto" src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg" />
                    </div>
                    <div className="h-full">
                        <img className="mx-auto" src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg" />
                    </div>
                    <div className="h-full">
                        <img className="mx-auto" src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg" />
                    </div>
                    <div className="h-full">
                        <img className="mx-auto" src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg" />
                    </div>
                </div>
            </div>
            {/* Category */}
            <SectionTitle
                subHeadin={"Special Category By OBSNEST Market"}
                heading={"Category"}
            ></SectionTitle>
            <Category></Category>
        </div>
    );
};

export default HomeMain;