import type { ComponentPropsWithoutRef, FC } from 'react';
import { RxGithubLogo, RxInstagramLogo, RxNotionLogo, RxTwitterLogo } from 'react-icons/rx';
import { Link } from '@/components/Link/Link';

type FooterProps = ComponentPropsWithoutRef<'footer'>;

export const Footer: FC<FooterProps> = (props) => (
  <footer className="flex justify-center bg-keyplate-3 p-6 shadow-floating" {...props}>
    <div className="flex flex-col gap-2">
      <div className="tablet:flex-row tablet:gap-6 flex flex-col gap-2 border-b-2 border-keyplate-6 pb-2">
        <ul className="flex flex-col gap-3 py-3 font-bold text-keyplate-11">
          <li className="flex items-center gap-1">
            <RxTwitterLogo />
            Twitter
            <Link external href={new URL('https://twitter.com/acme/').href} target="_blank" rel="noopener noreferrer">
              @acme
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <RxInstagramLogo />
            Instagram
            <Link
              external
              href={new URL('https://www.instagram.com/acme/').href}
              target="_blank"
              rel="noopener noreferrer"
            >
              @acme
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <RxNotionLogo />
            Notionで
            <Link external href={new URL('https://notion.so/').href} target="_blank" rel="noopener noreferrer">
              @acmeの概要を知る
            </Link>
          </li>
          <li className="flex items-center gap-1">
            <RxGithubLogo />
            GitHubで
            <Link external href={new URL('https://github.com/').href} target="_blank" rel="noopener noreferrer">
              @acmeの取り組みを見る
            </Link>
          </li>
        </ul>
      </div>
      <address className="py-4 text-xs font-bold not-italic text-keyplate-11">
        <p>〒311-1234 茨城県のどこか</p>
        <p>Tel. 070-5555-5555</p>
      </address>
      <small className="w-fit rounded-full bg-keyplate-3 px-2 py-1 text-xs text-keyplate-11">
        Copyright © 2023 Reo Hakuta
      </small>
    </div>
  </footer>
);
