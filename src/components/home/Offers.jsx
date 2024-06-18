import { LiaShippingFastSolid } from "react-icons/lia";
import { TbHeartDollar } from "react-icons/tb";
import { LiaCoinsSolid } from "react-icons/lia";

function Offers() {
  return (
    <section className="mx-auto p-10 bg-blue-800 text-white font-sans pt-20 pb-20 mt-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/3">
          <div className="mb-4">
            <LiaShippingFastSolid className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-center text-gray-100">Get complimentary ground shipping on every order. Don’t love it? Send it back, on us.</p>
        </div>
        <div className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/3">
          <div className="mb-4">
            <TbHeartDollar className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Earn Points</h3>
          <p className="text-center text-gray-100">Join Minimog Rewards to earn gift cards and enjoy exclusive member benefits.</p>
        </div>
        <div className="flex flex-col items-center mb-8 lg:mb-0 lg:w-1/3">
          <div className="mb-4">
            <LiaCoinsSolid className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Money Back Guarantee</h3>
          <p className="text-center text-gray-100">We believe using amazing devices should be the easiest part of your day.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Offers