import Image from 'next/image';
import Gif from '../interfaces/gif';
import { useThemeState } from '../theme/ThemeContext';
import Text from './common/Text';

const GIFItem = ({ gif: { caption, gifURL } }: { gif: Gif }): JSX.Element => {
  const theme = useThemeState();
  return (
    <div className="flex flex-col items-center">
      <Image
        className={`bg-gradient-to-br from-${theme}-300 to-${theme}-600 rounded object-fill`}
        width={500}
        height={350}
        src={gifURL}
        alt={caption}
      />
      <Text type="small" color="text-gray-700" additionalStyles="mt-3">
        {caption}
      </Text>
    </div>
  );
};

export default GIFItem;
