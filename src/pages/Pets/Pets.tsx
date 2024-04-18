import { Link } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./Pets.module.css"
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/Skeleton";
import { getPets } from "../../services/pets/getPets";


export function Pets() {
    return (
        <Grid>
            <div className={styles.container}>
                <Header />
                <main className={styles.list}>
                    <Skeleton count={5} containerClassName={styles.skeleton} />


                    <Card href="/pets/1" text="nina" thumb="" />
                    <Card href="/pets/2" text="bob" thumb="" />
                    <Card href="/pets/3" text="chico" thumb="" />
                </main>
                <Link to="/pets/20">Ir para Listagem</Link>
            </div>
        </Grid>
    )
}