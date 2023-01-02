import { useMedia } from "react-use";

const useMediaQuery = () => {

  const min=useMedia("(min-width: 600px)", false) 
  const max=useMedia("(max-width: 920px)", false)
  
    const isSmall = useMedia("(max-width: 600px)", false);
    const isMedium= min&&max;
    const isLarge= useMedia("(min-width: 920px)", false);
    const isSidebar= useMedia("(min-width: 720px)", false);

  return {
    isSmall,
    isMedium,
    isLarge,
    isSidebar
  };
};

export default useMediaQuery;
