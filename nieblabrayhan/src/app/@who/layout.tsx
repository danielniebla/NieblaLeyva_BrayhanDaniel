import ImageLayout from "./@image/layout";

export default function whoLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <section>{children}</section>
      </div>
    );
  }
  