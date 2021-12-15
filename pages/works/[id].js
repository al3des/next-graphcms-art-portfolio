import { getAllWorks, getWorkById } from "@/lib/graphcms";
import Image from "next/image";

export default function WorkDetail(props) {
  const { work } = props;
  if (!work) {
    return <p>loading...</p>;
  }
  return (
    <>
      <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2em'}}>
        <div style={{width: '100%', position: 'relative'}}>
          <Image
            src={work.image.url}
            alt={work.title}
            height={work.image.height}
            width={work.image.width}
            layout='responsive'
            objectFit="cover"
          />
        </div>
        <div>
          <h2>{work.title ? work.title : "sin titulo"}</h2>
          <p>{work.description}</p>
          <p>
            <span>Alto: </span>
            {work.height}
          </p>
          <p>
            <span>Ancho: </span>
            {work.width}
          </p>
        </div>
      </div>
    </>
  );
}

export async function getStaticProps({ params, preview = false }) {
  const work = await getWorkById(params.id, preview);
  return {
    props: {
      work,
    },
  };
}

export async function getStaticPaths() {
  const works = await getAllWorks();
  const paths = works.map((work) => ({ params: { id: work.id } }));
  return {
    paths,
    fallback: true,
  };
}
