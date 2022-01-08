import {
  getAllProductions,
  getAllProductionsByType,
  getProductionBySlug,
} from "@/lib/graphcms";
import Image from "next/image";

export default function Estampida(props) {
  return (
    <div style={{ marginBottom: "2em" }}>
      <div
        style={{
          // marginBottom: '2em',
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
          backgroundImage: `url(${props.taller.featuredImage.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#ffffff50",
          height: "200px",
          position: "relative",
        }}
      >
        <div className="h-full w-full bg-gray-900 bg-opacity-40 text-gray-100 relative">
          <div className="absolute bottom-0 p-4">
            <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>
              {props.taller.title}
            </h2>
            <div className="bg-gray-900 bg-opacity-60 p-2">
              <h2>
                {props.taller.rol} |{" "}
                {new Date(props.taller.dateFrom).toLocaleDateString()}
                to {new Date(props.taller.dateTo).toLocaleDateString()}
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div>
        {props.taller.description.split("\n").map((p) => (
          <p style={{ margin: "1em 0" }}>{p}</p>
        ))}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1em",
        }}
      >
        {props.taller.gallery.map((image) => (
          <Image
            key={image.id}
            src={image.url}
            alt={props.taller.title}
            width={200}
            height={200}
            objectFit="cover"
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps({ params, locale }) {

  const slug = params.slug;
  const taller = await getProductionBySlug(slug, locale);

  return {
    props: {
      taller,
    },
  };
}

export async function getStaticPaths() {
  const estampidas = await getAllProductions();
  const paths = estampidas.map((e) => ({ params: { slug: e.slug } }));

  return {
    paths,
    fallback: true,
  };
}
