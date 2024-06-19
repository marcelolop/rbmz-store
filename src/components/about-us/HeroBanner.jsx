import people from '../../media/images/people.jpg';
import { Link } from 'react-router-dom';

// import '../../styles/test.css'

function HeroBanner() {
  return (
    <>
    <section className=" bg-gradient-to-b mb-[25px]">
        <div className="flex flex-col items-center pt-16 max-w-7xl mx-auto">
            <p className="text-blue-500 text-sm font-semibold pb-2">Shop Anytime, Anywhere</p>
            <div className="text-center">
                <h1 className="text-4xl font-semibold leading-snug">We're a fun-loving global squad</h1>
                <h1 className="text-4xl font-semibold leading-snug">Excited to serve you</h1>
            </div>
            <div className="my-5 text-gray-500 text-center">
                <p>Whether you're browsing from different continents or shopping locally,</p>
                <p>our passion for bringing you the best products keeps us going</p>
                  </div>
                  <Link to="/products" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md text-white cursor-pointer">Shop Now!</Link>
            {/* <a className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md text-white cursor-pointer">Shop Now!</a> */}
        </div>
        <div className="grid place-items-center transform translate-y-[50px]">
            <img src={people} alt="happy employees" className="block max-w-full w-[1000px] shadow-2xl rounded-md " />
        </div>
    </section>
    </>
    )
}

export default HeroBanner