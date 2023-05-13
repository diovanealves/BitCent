import Image from "next/image";
import Page from "../Pagina";
import loading from "../../../../public/loading.gif";

export default function Loading() {
  return (
    <Page externa className="justify-center items-center">
      <Image priority src={loading} alt="Carregando" width={40} height={40} />
    </Page>
  );
}
