import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./Pets.module.css"
import { Card } from "../../components/common/Card";
import { Skeleton } from "../../components/common/Skeleton";
import { Pagination } from "../../components/common/Pagination";
import { useSearchParams } from "react-router-dom";
import { usePetList } from "../../hooks/usePetList";


export function Pets() {

    const [searchParams, setSearchParams] = useSearchParams()

    const urlParams = {
        page: searchParams.get('page') ? Number(searchParams.get('page')) : 1,
    }

    const { data, isLoading } = usePetList(urlParams)

    function changePage(page: number) {
        setSearchParams((params) => {
            params.set('page', String(page))
            return params
        })
    }

    return (
        <Grid>
            <div className={styles.container}>
                <Header />
                {
                    isLoading && (
                        <Skeleton
                            containerClassName={styles.skeleton}
                            count={10}
                            baseColor="#eaf2ffe1" /*'#ebebeb'*/
                            highlightColor="#bcd3f7e1"/*'#f5f5f5'*/
                        />)
                }
                <main className={styles.list}>
                    {data?.items.map((pet) => (
                        <Card
                            key={pet.id}
                            href={`/pets/${pet.id}`}
                            text={pet.name}
                            thumb={pet.photo}
                        />
                    ))}
                </main>
                {data?.currentPage && (
                    <Pagination
                        currentPage={data.currentPage}
                        totalPages={data.totalPages}
                        onPageChange={(number) => changePage(number)}
                    />)
                }
            </div>
        </Grid>
    )
}