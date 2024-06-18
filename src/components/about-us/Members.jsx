import memberOne from '../../media/images/member-1.jpg';
import memberTwo from '../../media/images/member-2.jpg';
import memberThree from '../../media/images/member-3.jpg';
import memberFour from '../../media/images/member-4.jpg';

function Members() {
  return (
    <section className='my-container font-sans'>
    <div className="flex flex-col items-center pt-16">
            <p className="text-blue-700 text-sm font-semibold pb-2">Our Team</p>
            <div className="text-center">
                <h1 className="text-4xl font-semibold leading-snug">Say Hello to</h1>
                <h1 className="text-4xl font-semibold leading-snug">Our Awesome Squad</h1>
            </div>
            <div className="my-5 text-gray-500 text-center">
                <p>Our team comprises diverse individuals with distinct skills and strengths,</p>
                <p>including creative thinkers and analytical problem solvers</p>
            </div>
            <div className='members'>
                <div>
                    <img src={memberOne} alt='first member'/>
                    <p className='name'>Jessica Williams</p>
                    <p className='position'>Sales Strategist</p>
                    <p className='history'>Previously worked at Facebook and Stripe as a lead software engineer</p>
                </div>
                <div>
                    <img src={memberTwo} alt='second member'/>
                    <p className='name'>Simon Monroe</p>
                    <p className='position'>Founder & CEO</p>
                    <p className='history'>Founded and developed rbmz back in 2018 and now function as CEO</p>
                </div>
                <div>
                    <img src={memberThree} alt='third member'/>
                    <p className='name'>Robert Todd</p>
                    <p className='position'>Software Engineer</p>
                    <p className='history'>Previously worked at Facebook and Stripe as a lead software engineer</p>
                </div>
                <div>
                    <img src={memberFour} alt='fourth member'/>
                    <p className='name'>Ted Norton</p>
                    <p className='position'>Sales Manager</p>
                    <p className='history'>Have helped sell clients products for over 8 years and directed sales teams</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Members