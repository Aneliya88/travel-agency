import { useEffect } from 'react';
import Swal from 'sweetalert2';
import image from './Logo.png'

function Alert() {
    useEffect(() => {
        Swal.fire({
          html: `
            <div style="text-align: center;">
              <img src="${image}" 
                   alt="Logo" 
                   style="width: 250px;  margin-bottom: 20px;" />
              <p>20% discount is available now!</p>
            </div>`,
          confirmButtonText: 'OK'
        });
      }, []);
  return (
    <div>

    </div>
  );
}
export default Alert;