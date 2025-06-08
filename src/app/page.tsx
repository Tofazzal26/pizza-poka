import Banner from "@/Components/Banner/page";
import Connect from "@/Components/Connect/page";
import Gallery from "@/Components/Gallery/page";
import OurTeam from "@/Components/OurTeam/page";
import WhoAreWe from "@/Components/WhoAreWe/page";

export default function Home() {
  return (
    <div className="mt-[65px]">
      <Banner />
      <WhoAreWe />
      <Gallery />
      <OurTeam />
      <Connect />
    </div>
  );
}
