"use client";

import { useSession } from "next-auth/react";
import CustomLink from "./custom-link";
import SessionData from "./session-data";

export default function ClientExample() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold">クライアントサイドレンダリング</h1>
      <p>
        このページでは
        <CustomLink href="https://nextjs.authjs.dev/react#usesession">
          <code>useSession</code>
        </CustomLink>{" "}
        React Hookを使用して、クライアントサイドでセッションデータを取得します。
      </p>
      <p>
        この機能を有効にするためには、ファイルの先頭に
        <CustomLink href="https://react.devreference/nextjs/react/use-client">
          <code>use client</code>
        </CustomLink>
        ディレクティブが必要です。また、セッションデータを提供するためには、
        <strong>
          <code>client-example/page.tsx</code>
        </strong>
        に
        <CustomLink href="https://nextjs.authjs.dev/react#sessionprovider">
          <code>SessionProvider</code>
        </CustomLink>
        コンポーネントが必要です。
      </p>

      {status === "loading" ? (
        <div>Loading...</div>
      ) : (
        <SessionData session={session} />
      )}
    </div>
  );
}
