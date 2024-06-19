import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Modal from './ModalSubmit';
import '../../styles/index.css'

function Form() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onSubmit = data => {
    setIsModalOpen(true); // Open the modal after submit 
    reset();
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto space-y-4 w-[70%]">
        <div className="h-13 margin-top-zero"> 
          <label className='block text-left mb-1 text-gray-600 text-sm'>First Name</label>
          <input 
            type="text" 
            placeholder="john" 
            {...register("First Name", { required: true, maxLength: 80 })} 
            className="block w-full px-4 py-2 mb-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="h-4">
            {errors["First Name"] && <p className="text-red-500 text-xs ml-1 text-left">This field is required</p>}
          </div>
         
        </div>
        <div className="h-13 margin-top-zero">
        <label className='block text-left mb-1 text-gray-600 text-sm'>Last Name</label>
        <input 
            type="text" 
            placeholder="doe" 
            {...register("Last Name", { required: true, maxLength: 100 })} 
            className="block w-full px-4 py-2 mb-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="h-4">
            {errors["Last Name"] && <p className="text-red-500 text-xs ml-1 text-left">This field is required</p>}   
          </div>
         
        </div>
        <div className="h-13 margin-top-zero">
        <label className='block text-left mb-1 text-gray-600 text-sm'>Email</label>
          <input 
            type="text" 
            placeholder="johndoe@mail.com" 
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} 
            className="block w-full px-4 py-2 mb-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
           <div className="h-4">
                {errors["Email"] && <p className="text-red-500 text-xs ml-1 text-left">Enter a valid email</p>}
           </div>
        
        </div>
        <div className="h-13 margin-top-zero">
        <label className='block text-left mb-1 text-gray-600 text-sm'>Phone</label>
          <input 
            type="tel" 
            placeholder="(123)-456-7890" 
            {...register("Phone", { required: true, maxLength: 12 })} 
            className="block w-full px-4 py-2  mb-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="h-4">
            {errors["Phone"] && <p className="text-red-500 text-xs ml-1 text-left">This field is required</p>}
          </div>
        </div>

        <div className="h-35 margin-top-zero">
        <label className='block text-left mb-1 text-gray-600 text-sm'>How can we help?</label>
          <textarea 
            placeholder="tell us..."  
            {...register("How can we help?", { required: true, minLength: 10 })} 
            className="block w-full px-4 py-2  mb-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            rows="4"
            style={{ resize: "none" }}
          ></textarea>
           <div className="h-4">
                {errors["How can we help?"] && <p className="text-red-500 text-xs ml-1 text-left">This field is required</p>}
           </div>
        </div>
        
        <div className="flex justify-center">
          <button 
            type="submit" 
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
        {/* Modal is gonna be showd when submit the form*/}
        <div >
          <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-xl font-bold mb-4">Thank you for submitting!</h2>
          <p>Thank you for reaching out to us. We will be in touch with you soon.</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={closeModal}
          >
            Close
          </button>
        </Modal>
        </div>
        
      </form>
  );
}

export default Form;
