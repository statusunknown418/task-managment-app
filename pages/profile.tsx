import { useQuery } from '@apollo/client';
import { NextPage } from 'next';
import { Flex } from '../components/Flex';
import { Spinner } from '../components/Spinner';
import { getUser } from '../graphql/queries/getUser';
import { Query, User } from '../__generated__/graphql-schema-generated';
import Image from 'next/image';
import styled from 'styled-components';

export interface StyledSpanProps {
  color?: string;
}
export const SpanStyled = styled.span<StyledSpanProps>`
  ${(props) =>
    props.color ? `color: ${props.color}` : `color: ${props.theme.primaryClrRed}`}
`;

const ProfilePage: NextPage = () => {
  const { data: userData, loading, error } = useQuery<Query>(getUser);

  enum spriteTypes {
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

  return (
    <Flex direction="column" alignItems="center" accentBgColor rounded={8} gap={8} p={24}>
      {loading && <Spinner />}
      {error && <strong style={{ color: 'red' }}>Oops there was an error</strong>}
      {userData?.profile && (
        <>
          <small>
            Your ID <SpanStyled>{userData.profile.id}</SpanStyled>
          </small>
          {userData?.profile.avatar ? (
            <Image src={userData.profile.avatar} width={200} height={200} alt="" />
          ) : (
            <Image
              src={`https://avatars.dicebear.com/api/${spriteTypes.BOTTTS}/${userData.profile.fullName}.svg`}
              width={200}
              height={200}
              alt=""
            />
          )}
          <h2>{userData.profile.fullName}</h2>
          <p>{userData.profile.email}</p>
        </>
      )}
    </Flex>
  );
};

export default ProfilePage;
