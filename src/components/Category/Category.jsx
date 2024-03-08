import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import './styles.css';
import { Pagination } from 'swiper/modules';

const Category = ({ smart, kitchen, plastic, electronic, fashion_beauty }) => {

    // const handleAddToCard =

    const categories = [
        { title: "Smart", data: smart },
        { title: "Kitchen", data: kitchen },
        { title: "Plastic", data: plastic },
        { title: "Electronic", data: electronic },
        { title: "Fashion & Beauty", data: fashion_beauty }
    ];

    return (
        <div>
            {
                categories?.map((category, index) => <div key={index}
                    className="text-center mt-10">
                    <h2 className="text-4xl font-semibold">{category.title}</h2>
                    {/* Swiper Slide */}
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={10}
                        pagination={{
                            clickable: true,
                        }}
                        breakpoints={{
                            '@0.00': {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            '@0.75': {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            '@1.00': {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            '@1.50': {
                                slidesPerView: 4,
                                spaceBetween: 50,
                            },
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {
                            category.data.map(((item, index) =>
                                <div className='' key={index}>
                                    <SwiperSlide>
                                        <div className="card w-96 bg-base-100 shadow-xl">
                                            <figure className="px-10 pt-10">
                                                <img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                                            </figure>
                                            <div className="card-body items-center text-center">
                                                <h2 className="card-title">{item.name}</h2>
                                                <p>{item.description}</p>
                                                <p>${item.price}</p>
                                                {/* Button */}
                                                <div className="flex gap-2">
                                                    <button className="btn border-none border-b-2 btn-primary">Buy Now</button>
                                                    <button className="btn btn-outline bg-sky-300 text-black">Add To Card</button>
                                                </div>

                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            ))
                        }
                    </Swiper>
                </div>)
            }
        </div>
    );
};

export default Category;