import HeaderApp from "@/components/headerApp";
import type { ChildrenProps } from "@/interfaces";
import ProviderWrapper from "@/providers/wrapper";
import "@/styles/ssrLayout.css";

export default function SSRLayout({ children }: ChildrenProps) {
  return (
    <html lang="en">
      <HeaderApp />
      <body>
        <ProviderWrapper>{children}</ProviderWrapper>
      </body>
    </html>
  );
}
