function NotFound() {
  return (
    // <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
    //   <img 
    //     //src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?q=80&w=1429&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
    //     src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    //     alt="Funny 404"
    //     className="w-full max-w-md mb-8 rounded-lg shadow-lg"
    //   />
    //   <div className="text-center">
    //     <p className="text-2xl text-gray-600 mb-8">Oops! Page not found.</p>
    //     <a href="/" className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
    //       Go Home
    //     </a>
    //   </div>
    // </div>

    <>
   
    <div 
      className="relative flex items-center justify-center h-screen bg-cover bg-center " 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
    <div className="absolute inset-0 bg-black opacity-55"></div>
      <div className=" relative grid place-items-center">
        <p className="text-3xl text-gray-100 mb-4">Oops! We can't find the page you're looking for.</p>
        <a href="/" className="px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
          Go Home
        </a>
      </div>
    </div>
    </>
  )
}

export default NotFound
