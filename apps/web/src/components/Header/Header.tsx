import type { ComponentPropsWithoutRef, FC } from 'react';
import { Image } from '@/components/Image/Image';
import { Link } from '@/components/Link/Link';
import DarkLogoImage from '@public/dark.png';
import LightLogoImage from '@public/light.png';

export type HeaderProps = ComponentPropsWithoutRef<'header'>;

export const Header: FC<HeaderProps> = ({ children, ...props }) => (
  <header
    className="sticky top-0 z-30 flex w-full flex-col items-center justify-start bg-keyplate-1 font-bold text-keyplate-12"
    {...props}
  >
    <nav
      aria-label="グローバルナビゲーション"
      className="flex w-full max-w-md flex-row flex-nowrap items-stretch justify-center gap-6 px-6 py-3"
    >
      <Link href="/" className="inline-flex shrink-0 items-center duration-100 hover:scale-110 hover:shadow-card">
        <Image
          src={LightLogoImage}
          alt="ACMEのロゴ"
          sizes={{
            default: '20vw',
            tablet: '15vw',
            desktop: '10vw',
          }}
          placeholder="blur"
          className="w-[50px] dark:hidden"
        />
        <Image
          src={DarkLogoImage}
          alt="ACMEのロゴ"
          sizes={{
            default: '20vw',
            tablet: '15vw',
            desktop: '10vw',
          }}
          placeholder="blur"
          className="hidden w-[50px] dark:block"
        />
      </Link>
      <ul className="flex shrink grow flex-row items-center justify-between truncate">
        <li className="inline-flex shrink truncate">
          <Link
            title="記事を見る"
            href="/"
            className="tablet:px-4 truncate rounded-full px-1.5 py-2 no-underline hover:bg-primary-3 hover:text-primary-11"
          >
            私たちについて
          </Link>
        </li>
        <li className="inline-flex shrink truncate">
          <Link
            title="タグを見る"
            href="/"
            className="tablet:px-4 truncate rounded-full px-1.5 py-2 no-underline hover:bg-primary-3 hover:text-primary-11"
          >
            規約
          </Link>
        </li>
        <li className="inline-flex shrink truncate">
          <Link
            title="メンバ紹介"
            href="/"
            className="tablet:px-4 truncate rounded-full px-1.5 py-2 no-underline hover:bg-primary-3 hover:text-primary-11"
          >
            使い方
          </Link>
        </li>
      </ul>
    </nav>
    {children}
  </header>
);
