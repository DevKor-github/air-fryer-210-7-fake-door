import { useMediaQuery } from '@/hooks/useMediaQuery';

const MobileBr = () => {
  const isMobile = useMediaQuery('(max-width: 925px)');
  return <>{isMobile ? <br /> : undefined}</>;
};

export default MobileBr;
