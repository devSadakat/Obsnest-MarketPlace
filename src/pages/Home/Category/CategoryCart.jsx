import s_phone from '../../../assets/phone.jpg'
import electronicImg from '../../../assets/electronic.jpg'
import fashion from '../../../assets/fashion.jpg'
import plasticImg from '../../../assets/plastic.png'
import kitchenImg from '../../../assets/kitchen.jpg'


const CategoryCart = ({ items }) => {

    console.log(items)

    const phone = items.filter(item => item.category === 'phone')
    const electronic = items.filter(item => item.category === 'electronic')
    const fashion_beauti = items.filter(item => item.category === 'fashion_beauti')
    const plastic = items.filter(item => item.category === 'plastic')
    const kitchen = items.filter(item => item.category === 'kitchen')

    return (
        <div className='md:grid grid-cols-2 gap-4'>
            <div className="h-72 px-2 py-4 card bg-base-100 shadow-xl image-full">
                <figure><img src={s_phone} alt="Phone" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{'Mobile Phones'}!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At !</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Explore</button>
                    </div>
                </div>
            </div>
            {/* Cart 2   */}
            <div className="h-72 px-2 py-4 card bg-base-100 shadow-xl image-full">
                <figure> <img src={fashion} alt="Fashion" /> </figure>
                <div className="card-body">
                    <h2 className="card-title">{'Fashoion and Buauti'}!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Exprore</button>
                    </div>
                </div>
            </div>
            {/* cart - 3 */}
            <div className="h-72 px-2 py-4 card bg-base-100 shadow-xl image-full">
                <figure> <img src={electronicImg} alt="img" /> </figure>
                <div className="card-body">
                    <h2 className="card-title">{'Electronics'}!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Exprore</button>
                    </div>
                </div>
            </div>
            {/* cart -4 */}
            <div className="h-72 px-2 py-4 card bg-base-100 shadow-xl image-full">
                <figure> <img src={plasticImg} alt="Plastic Img" /> </figure>
                <div className="card-body">
                    <h2 className="card-title">{'Plascic Products'}!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Exprore</button>
                    </div>
                </div>
            </div>
            {/* cart-5 */}
            <div className="h-72 px-2 py-4 card bg-base-100 shadow-xl image-full">
                <figure> <img src={kitchenImg} alt="img" /> </figure>
                <div className="card-body">
                    <h2 className="card-title">{'Kitchen Accessories'}!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Exprore</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryCart;