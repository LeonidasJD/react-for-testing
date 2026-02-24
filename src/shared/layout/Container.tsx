const Container = ({
  children,
  ...props
}: { children: React.ReactNode } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className="flex w-full items-start justify-center px-20 py-20"
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
