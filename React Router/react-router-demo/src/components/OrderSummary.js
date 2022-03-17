import { useNavigate } from 'react-router-dom';

export const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Confirmed!!</div>
      {/* <button onClick={() => navigate('/')}>Back</button> */}
      {/* or */}
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};
