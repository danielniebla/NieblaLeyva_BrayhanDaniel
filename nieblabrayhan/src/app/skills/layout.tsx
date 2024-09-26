import NavBar from "../components/navBar";

export default function SkillsLayout({ children }: { children: React.ReactNode }) {
    return (
      <div>
        <NavBar stateIn='skills'></NavBar>
        <section>{children}</section>
      </div>
    );
  }
  