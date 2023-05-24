import { Blocks } from 'react-loader-spinner';

const IsLoading = () => {
  return (
    <Blocks
      visible={true}
      height="100"
      width="100"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
    />
  );
};

export default IsLoading;
