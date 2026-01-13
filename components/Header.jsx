import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex items-center fixed w-full h-16 z-10">
      <ul className="flex w-full justify-evenly text-muted-foreground">
        <li className="hover:text-accent-foreground">
          <Link href="/profile">프로필</Link>
        </li>
        <li className="hover:text-accent-foreground">
          <Link href="/projects">프로젝트</Link>
        </li>
        <li className="hover:text-accent-foreground">
          <Link href="/books">책</Link>
        </li>
        <li className="hover:text-accent-foreground">
          <Link href="/blog">블로그</Link>
        </li>
      </ul>
    </header>
  );
}
