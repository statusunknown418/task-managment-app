import { NextPage } from 'next';
import Image from 'next/image';
import { DashboardIcon, HamburgerMenuIcon, PersonIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { Selector, SidebarStyled } from '../exports';

export const Sidebar: NextPage = () => {
  const router = useRouter();

  // ? The use of div is needed to prevent 'forwardRef' errors
  return (
    <SidebarStyled>
      <Image
        src={'/RavnIcon.svg'}
        blurDataURL="/RavnIcon.svg"
        width={40}
        height={40}
        alt="logo"
        placeholder={'empty'}
      />

      <Link href={'/'} passHref>
        <div>
          <Selector name="dashboard" isFirst routeName="/" currentRoute={router.pathname}>
            <DashboardIcon width={20} height={20} />
          </Selector>
        </div>
      </Link>

      <Link href={'/my-tasks'} passHref>
        <div>
          <Selector name="my tasks" routeName="/my-tasks" currentRoute={router.pathname}>
            <HamburgerMenuIcon width={20} height={20} />
          </Selector>
        </div>
      </Link>

      <Link href={'/profile'} passHref>
        <div>
          <Selector name="My Profile" routeName="/profile" currentRoute={router.pathname}>
            <PersonIcon width={20} height={20} />
          </Selector>
        </div>
      </Link>
    </SidebarStyled>
  );
};
