import NavBar from "../components/navBar";

export default function ExperiencesLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <NavBar stateIn='experiences'></NavBar>
        <section>{children}</section>
      </div>
    );
  }
  