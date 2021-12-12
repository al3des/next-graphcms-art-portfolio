import { getAllWorks, getWorkById } from "@/lib/graphcms";
import Image from "next/image";

export default function WorkDetail(props) {
    if(!props.work){
        return <p>loading...</p>
    }
  return (
    <>
      <div>
        <Image
          src={props.work.image.url}
          alt={props.work.title}
          height={props.work.image.height}
          width={props.work.image.width}
          objectFit="contain"
        />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const work = await getWorkById(context.params.id);
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
