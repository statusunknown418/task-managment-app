import { NextPage } from 'next';
import Image from 'next/image';

export enum spriteTypes {
  MALE = 'male',
  FEMALE = 'female',
  HUMAN = 'human',
  IDENTICON = 'identicon',
  INITIALS = 'initials',
  BOTTTS = 'bottts',
  AVATAAARS = 'avataaars',
  JDENTICON = 'jdenticon',
  GRIDY = 'gridy',
  MICAH = 'micah',
}

export interface UserAvatarProps {
  userName: string;
  spriteType: spriteTypes;
  width: number;
  height: number;
}
export const UserAvatar: NextPage<UserAvatarProps> = ({
  userName,
  spriteType,
  width,
  height,
}) => {
  return (
    <div style={{ borderRadius: '50%', overflow: 'hidden' }}>
      <Image
        src={`https://avatars.dicebear.com/api/${spriteType}/${userName}.svg`}
        width={width}
        height={height}
        alt="avatar"
        objectFit="cover"
      />
    </div>
  );
};
