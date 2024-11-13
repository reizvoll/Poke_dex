import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 토스트는 utils로 봐주셔요.. ㅠㅡㅠ
// 토스트 꾸며주기
const StyledToastContainer = styled(ToastContainer).attrs({
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
})`
  .Toastify__toast {
    background-color: #333;
    color: #fff;
    font-family: 'DungGeunMo';
    font-size: 14px;
    border-radius: 8px;
    padding: 10px;
  }

  .Toastify__toast--success {
    background-color: #2196f3;
  }

  .Toastify__toast--error {
    background-color: #f44336;
  }

  .Toastify__toast--info {
    background-color: #4caf50;
  }

  .Toastify__toast--warning {
    background-color: #ff9800;
  }
`;

export default StyledToastContainer;