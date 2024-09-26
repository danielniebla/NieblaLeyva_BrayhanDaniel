import NavBar from "./components/navBar";


export default function Home({who}:{who: React.ReactNode}) {
  return (
    <div>
      <NavBar stateIn='introduction'></NavBar>
      {who}
    </div>
  );
}
