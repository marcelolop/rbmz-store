function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-gray-900 opacity-50"></div>
        <div className="relative bg-white rounded-lg p-8 z-10">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
          >
            &times;
          </button>
          {children}
        </div>
      </div>
    );
  }
  
  export default Modal;

