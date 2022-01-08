import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/productions-list.module.css";
import useTranslation from "next-translate/useTranslation";

export default function RecentProjects({ projects }) {
    const {t} = useTranslation('common')
  return (
    <div className="flex gap-4 flex-col">
        <h2 className="text-xl font-bold">{t('recent_projects')}</h2>
      {projects &&
        projects.map((p) => (
          <div className="grid grid-cols-3 gap-10">
            <div className="relative">
              <Image
                src={p.featuredImage.url}
                alt={p.title}
                height={300}
                width={300}
                layout='responsive'
                objectFit="cover"
              />
            </div>
            <div className="col-span-2 flex flex-col place-content-between">
              <h2 className="text-5xl font-bold">{p.title}</h2>
              <p>{p.excerpt}</p>
              <Link href={`/item/${p.slug}`}>
                <a className={`${styles.btn} shrink-1`}>{t("read_more")}</a>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
