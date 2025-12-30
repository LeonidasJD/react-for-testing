import { Avatar } from "@base-ui/react/avatar";

interface AvatarImageProps {
  src: string;
  fallback: string;
}

const AvatarImage = ({ src, fallback }: AvatarImageProps) => {
  return (
    <Avatar.Root className="inline-flex h-15 w-15 items-center justify-center overflow-hidden rounded-full bg-gray-800 text-base font-medium text-white">
      <Avatar.Image src={src} className="h-full w-full object-cover" />
      <Avatar.Fallback className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
        {fallback}
      </Avatar.Fallback>
    </Avatar.Root>
  );
};

export default AvatarImage;
