import MainFooter from "@/components/mollecul/footer/mainFooter";
import HeaderApp from "@/components/headerApp";
import type { ChildrenProps } from "@/interfaces";
import ProviderWrapper from "@/providers/wrapper";
import "@/styles/seoLayout.css";
import Script from "next/script";

export default function SeoLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <HeaderApp />
      <body>
        <ProviderWrapper>
          <>
            {children}
            <MainFooter />
            <Script src="/scripts/postHog.js" strategy="afterInteractive" />
            <Script
              src="/scripts/googleTagManager.js"
              strategy="afterInteractive"
            />
          </>
        </ProviderWrapper>
      </body>
    </html>
  );
}
