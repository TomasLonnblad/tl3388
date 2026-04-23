import { ThemeProvider } from "next-themes";


export function Providers({
  children,


}: {
  children: React.ReactNode;


}) {
  return (
    <ThemeProvider
      enableSystem
      disableTransitionOnChange
      attribute="class"

    >
      {children}
    </ThemeProvider>
  );
}
