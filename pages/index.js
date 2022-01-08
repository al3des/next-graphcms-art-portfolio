import RecentProjects from "@/components/widgets/recent-projects";
import { getRecentProjects } from "@/lib/graphcms";
import styles from "@/styles/home.module.css";

export default function Home(props) {
  return (
    <div className={styles.home}>
      <RecentProjects projects={props.recentProjects} />
    </div>
  );
}

export async function getStaticProps(ctx){
const recentProjects = await getRecentProjects(ctx.locale)
  return {
    props: {
      recentProjects
    }
  }
}