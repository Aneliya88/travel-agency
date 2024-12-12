import { useEffect } from 'react';
import Swal from 'sweetalert2';
import logo from './assets/Logo.png';

function Alert() {
    useEffect(() => {
        Swal.fire({
          html: `
            <div style="text-align: center;">
              <img src="${logo}" 
                   alt="Logo" 
                   style="width: 250px; height: 180px;  margin-bottom: 20px;" />
              <p>20% discount is available now!</p>
            </div>`,
          confirmButtonText: 'OK'
        });
      }, []);
  return (
 null
  );
}
export default Alert;