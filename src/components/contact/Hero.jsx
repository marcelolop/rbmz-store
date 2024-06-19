import { Link } from 'react-router-dom';

function Hero() {
  return (
    <>
    <section className="bg-gradient-to-b h-[400px]">
        <div className="flex flex-col items-center pt-16 max-w-7xl mx-auto">
            <p className="text-blue-500 text-sm font-semibold pb-2">Shop Anytime, Anywhere</p>
            <div className="text-center">
                <h1 className="text-4xl font-semibold leading-snug">Contact our team</h1>
            </div>
            <div className="my-5 text-gray-500 text-center">
                <p>Got any questions about our products or scalling on our plataform? </p>
                <p>Where are here to help. Chat to our friendly team 24/7.</p>
                  </div>
                  <Link to="/products" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-md text-white cursor-pointer">Shop Now!</Link>
        </div>
    </section>
    </>
    )
}

export default Hero 

