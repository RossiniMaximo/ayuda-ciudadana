import { SectionTwo } from "../components/sectionTwo";
import { VideoSection } from "../components/videoSection";
import { SectionThree } from "../components/sectionThree";
import { Layout } from "../components/layout";
import styles from "./home.module.css";
import { HomePage } from "../components/home-page";
import { Form } from "../components/form";
import { MoreInfo } from "../components/more-info";

export default function Home() {
  return (
    <Layout
      links={{
        firstLink: "home",
        secondLink: "video",
        thirdLink: "form",
        fourthLink: "about_us",
      }}
    >
      <div>
        <section className={styles.top_section} id="home">
          <HomePage />
        </section>
        <section id="about_us" className={styles.about_us_section}>
          <MoreInfo />
        </section>
        <section id="video" className={styles.video_section}>
          <VideoSection />
        </section>
        <section className={styles.contact_section} id="form">
          <Form />
        </section>
      </div>
    </Layout>
  );
}
