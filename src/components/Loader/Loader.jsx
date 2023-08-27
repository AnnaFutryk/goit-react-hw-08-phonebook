import { InfinitySpin } from 'react-loader-spinner';
import { LoderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoderWrapper>
      <InfinitySpin width="200" color=" #46bef1" />
    </LoderWrapper>
  );
};

export default Loader;
