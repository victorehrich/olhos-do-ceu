export default function ClassesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="mx-auto p-6">{children}</div>;
}
