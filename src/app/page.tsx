export const dynamic = "force-dynamic";
import Banner from "@/Components/Banner/page";
import Connect from "@/Components/Connect/page";
import DownloadApp from "@/Components/DownloadApp/page";
import Gallery from "@/Components/Gallery/page";
import News from "@/Components/News/page";
import OurTeam from "@/Components/OurTeam/page";
import WhoAreWe from "@/Components/WhoAreWe/page";

export default function Home() {
  return (
    <div className="mt-[65px]">
      <Banner />
      <WhoAreWe />
      <News />
      <Gallery />
      <OurTeam />
      <DownloadApp />
      {/* <Connect /> */}
    </div>
  );
}
