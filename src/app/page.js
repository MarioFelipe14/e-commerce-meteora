import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";


async function fetchProdutosApi() {
  const res = await fetch("https://api.npoint.io/03670ea5e99b46fb7139/produtos");

  if (!res.ok) {
    throw new Error("Não foi possivel obter os dados");
  }

  const produtos = await res.json();

  return produtos;
}

async function fetchCategoriasApi() {
  const res = await fetch("https://api.npoint.io/a87f2647a5d973ae4449/categorias");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const categorias = await res.json();

  return categorias;
}

export default async function Home() {
  const produtos = await fetchProdutosApi();
  const categorias = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
