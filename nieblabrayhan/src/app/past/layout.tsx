import NavBar from "../components/navBar";

export default function PastLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <NavBar stateIn='past'></NavBar>
        <section>{children}</section>
      </div>
    );
  }
  