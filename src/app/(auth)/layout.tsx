import CommonComponent from './common';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-6">
      <CommonComponent></CommonComponent>
      <div className="col-span-2 place-content-center items-center justify-center text-black bg-red-200">
        {children}
      </div>
    </div>
  );
}
