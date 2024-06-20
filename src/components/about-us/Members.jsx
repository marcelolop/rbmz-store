
function Members() {
  return (
    <section className='my-container'>
    <div className="flex flex-col items-center py-10">
            <p className="text-blue-500 text-sm font-semibold pb-2">Our Team</p>
            <div className="text-center">
                <h1 className="text-4xl font-semibold leading-snug">Say Hello to</h1>
                <h1 className="text-4xl font-semibold leading-snug">Our Awesome Squad</h1>
            </div>
            <div className="my-5 text-gray-500 text-center">
                <p>Our team comprises diverse individuals with distinct skills and strengths,</p>
                <p>including creative thinkers and analytical problem solvers</p>
            </div>
            <div className='members'>
                <div className='w-[25%]'>
                    <img src='https://avatars.githubusercontent.com/u/19392250?v=4' alt='first member'/>
                    <p className='name'>Marcelo Lopes Fernandes</p>
                    <p className='position'>Sales Strategist</p>
                    <p className='history'>Previously worked at Facebook and Stripe as a lead software engineer</p>
                </div>
                <div className='w-[25%]'>
                    <img src='https://avatars.githubusercontent.com/u/146019823?v=4' alt='second member'/>
                    <p className='name'>Rosa</p>
                    <p className='position'>Founder & CEO</p>
                    <p className='history'>Founded and developed rbmz back in 2018 and now function as CEO</p>
                </div>
                <div className='w-[25%]'>
                    <img src='https://avatars.githubusercontent.com/u/111240376?v=4' alt='third member'/>
                    <p className='name'>Bernard</p>
                    <p className='position'>Software Engineer</p>
                    <p className='history'>Previously worked at Facebook and Stripe as a lead software engineer</p>
                </div>
                <div className='w-[25%]'>
                    <img src='https://avatars.githubusercontent.com/u/146753820?v=4' alt='fourth member'/>
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