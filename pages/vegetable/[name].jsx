import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h2>Hello!!</h2>
      <Link href="/">
        <a>Move to '/'</a>
      </Link>
    </div>
  );
}
