import '@fortawesome/fontawesome-free/css/all.css';

function Links() {
    return (
        <div className="flex flex-row items-center justify-center space-between gap-16 p-27 mt-0 mb-0 text-white font-sans">
            <div className="text-center h-500 w-200 flex flex-col gap-7">
                        <h1 href="#" className="block p-2">
                            <i className="fas fa-comments text-3xl mr-3"></i>
                            Chat to us
                        </h1>
                        <h3 className="text-lg font-semibold text-gray-200">
                            <p>Let's Connect and Chat!</p>
                            <p>We'd love to hear from you!</p> 
                            <p className="mp-3">Your inquiries are important to us</p>
                            <p className="items-center  text-blue-300"><li className='list-none'>Chat to us</li></p>
                        </h3>
                </div>

                <div className="w-200 text-center h-500 flex flex-col gap-7">
                        <h1 href="#" className="block p-2">
                            <i className="fas fa-building text-3xl mr-3"></i>
                            Office
                        </h1>
                        <h3 className="text-lg font-semibold text-gray-200">
                            <p>Visit Our Office</p>
                            <p>you have the best shopping</p>
                            <p>experience possible</p>  
                            <p className="mp-3  text-blue-300">12/A, Dunster Tower, Canada</p>    
                           
                        </h3>
                </div>

                <div className="w-200 last:text-center h-500 flex flex-col gap-7">
                        <h1 href="#" className="block p-2">
                            <i className="fas fa-phone text-3xl mr-3"></i>
                            Phone
                        </h1>
                        <h3 className="text-lg font-semibold text-gray-200">
                            <p>Give Us a Call</p>
                            <p>Need assistance? Have questions?</p>
                            <p className="items-center">We’re just a phone call away! </p>
                            <p className="items-center  text-blue-300">(123) 456-7890</p>
                        </h3>
                        
                    </div>
                </div>
    );
  }

  export default Links;
