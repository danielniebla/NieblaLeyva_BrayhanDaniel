import NavBar from "../components/navBar";

export default function CouresLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <NavBar stateIn='courses'></NavBar>
        <section>{children}</section>
      </div>
    );
  }
  