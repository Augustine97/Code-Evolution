import { useNavigate } from 'react-router-dom';

export const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Page Not Found</div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </>
  );
};
