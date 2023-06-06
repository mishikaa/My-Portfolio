import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const errorPopup = (message) => {
    toast.error(message, {
      toastId: "error",      
      position: "bottom-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
}

const successPopup = (message) => {
    toast.success(message, {
      toastId: "error",      
      position: "bottom-center",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    })
}

export { errorPopup, successPopup };