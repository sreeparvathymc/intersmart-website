import AiDeveloperprocess from "@/components/HomeComponents/AiDeveloperprocess";
import AiServices from "@/components/HomeComponents/AiServices";
import Banner from "@/components/HomeComponents/Banner";
import RecentProject from "@/components/HomeComponents/RecentProject";
import ScheduleSection from "@/components/HomeComponents/ScheduleSection";

export default function Home() {
  return (
    <section>
      <Banner />
      <AiServices />

      {/* <AiDeveloperprocess /> */}

      <ScheduleSection />

      <RecentProject />

    </section>
  );
}