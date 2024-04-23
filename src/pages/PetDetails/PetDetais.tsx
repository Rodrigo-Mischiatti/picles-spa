import { Link, useParams } from "react-router-dom";
import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./PetDetails.module.css"
import { useQuery } from "@tanstack/react-query";
import { getPetByID } from "../../services/pets/getPetById";
import { ImageBase64 } from "../../components/common/ImageBase64/ImageBase64";
import { Skeleton } from "../../components/common/Skeleton";
import { useShelter } from "../Home/useShelter";
import { Button, ButtonVariants } from "../../components/common/Button";
import whatsapp from '../../assets/whatsapp.svg'

export function PetDetails() {
  const { id } = useParams()

  const { data: shelterData, isError: shelterIsError } = useShelter()

  const { data: petData, isLoading, isError: petIsError } = useQuery({
    queryKey: ['get-pet-by-id', id],
    queryFn: async () => {
      return await getPetByID(id ?? '')
    }
  })

  return (
    <Grid>
      <div className={styles.container}>
        <Header showReturn={true} />
        <main className={styles.content}>
          {isLoading && (
            <div className={styles.skeleton}>
              <Skeleton circle={true} width={200} height={200} />
              <Skeleton width={180} height={24} style={{ margin: 16 }} />
            </div>
          )}
          {!isLoading && (
            <>
              <ImageBase64 src={petData?.photo} className={styles.picture} />
              {petIsError && (
                <>
                  <h1>Pet não encontrado</h1>
                  <Link to="/pets">Voltar para Listagem</Link>
                </>
              )}
              {!petIsError && (
                <>
                  <h1>{petData?.name}</h1>
                  <span>Sobre o pet:</span>
                  <p>{petData?.bio}</p>
                  {!shelterIsError && (
                    <a
                      href={`https://wa.me/${shelterData?.shelterWhatsApp}?text=Olá, gostaria de falar sobre ${petData?.name}`}
                      target="_blank"
                    >
                      <Button variant={ButtonVariants.Text}>
                        <span className={styles.buttonWhatsapp}>
                          <img src={whatsapp} />
                          Entre em contato com o Abrigo
                        </span>
                      </Button>
                    </a>
                  )}
                </>
              )}
            </>
          )}
        </main>
      </div>
    </Grid >
  )
}