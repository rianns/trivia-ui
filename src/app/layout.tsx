import { GameCtxProvider } from "@/contexts/GameCtx";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trivia App",
  description: "Trivia application - Play on easy, medium or hard difficulty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GameCtxProvider>{children}</GameCtxProvider>
      </body>
    </html>
  );
}
