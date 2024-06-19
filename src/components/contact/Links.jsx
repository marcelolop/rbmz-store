import '@fortawesome/fontawesome-free/css/all.css';

function Links() {
    return (
        <div className="flex flex-row items-center justify-center space-around gap-10 p-27 mt-0 mb-0">
            <div className="text-gray-700 hover:text-blue-500 text-center h-400 w-200 transform transition-transform duration-300 hover:scale-105">
                        <h1 href="#" className="block p-2">
                            <i className="fas fa-comments text-3xl mr-3 mb-8"></i>
                            Chat to us
                        </h1>
                        <h3 className="text-xl font-semibold mb-2  hover:text-blue-500 ">
                                <p>Let's Connect and Chat!</p>
                               <p>We'd love to hear from you!</p> 
                               <p>Your inquiries are important to us</p>
                        </h3>
                </div>

                <div className="text-gray-700 hover:text-blue-500 w-200 text-center h-500 transform transition-transform duration-300 hover:scale-105">
                        <h1 href="#" className="block p-2">
                            <i className="fas fa-building text-3xl mr-3 mb-8"></i>
                            Office
                              <h3 className="text-xl font-semibold mb-2  hover:text-blue-500 ">
                                <p>Visit Our Office</p>
                                <p>you have the best shopping</p>
                                <p>experience possible</p>
                                
                            </h3>
                        </h1>
                </div>

                <div className="text-gray-700 hover:text-blue-500 w-200 last:text-center h-500 transform transition-transform duration-300 hover:scale-105">
                        <h1 href="#" className="block p-2">
                            <i className="fas fa-phone text-3xl mr-3 mb-8"></i>
                            Phone
                           
                            <h3 className="text-xl font-semibold mb-2  hover:text-blue-500">
                                <p>Give Us a Call</p>
                                <p>Need assistance? Have questions?</p>
                                <p>We’re just a phone call away! </p>
                            </h3>
                            
                        </h1>
                    </div>
                </div>
    );
  }

  export default Links;
