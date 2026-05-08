type Props = {
  children: React.ReactNode;
};

// Root layout - required by Next.js. The locale-specific layout handles
// html attributes, fonts, and providers.
export default function RootLayout({ children }: Props) {
  return children;
}
