import SessionProvider from "./sessionProvider";
import type { ChildrenProps } from "@/interfaces";
import ThemeProvider from "./themeProvider";

export default function ProviderWrapper({ children }: ChildrenProps) {
  return (
    <ThemeProvider>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  );
}
