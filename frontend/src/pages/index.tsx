import Head from "next/head"
import Image from "next/image";
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/LOGO.png'

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

import Link from "next/link";

export default function Home() {
  return (
    <>
    <Head>
      <title>MyFood - Faça o login</title>
    </Head>
    <div className={styles.containerCenter}>
      <Image src={logoImg} alt="Logo MyFood"/>

      <div className={styles.login}>
        <form>

          <Input
          placeholder="Digite seu email"
          type="text"
          />
          <Input
          placeholder="Senha"
          type="password"
          />

          <Button
            type = "submit"
            loading={false}
          >
            Acessar
          </Button>
          
        </form>

        <Link legacyBehavior href="/signup">
          <a className={styles.text}>Ainda não possui uma conta? Cadastre-se aqui! </a>
        </Link>
        
      </div>
    </div>
    </>
  )
}
