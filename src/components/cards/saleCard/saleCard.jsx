import Image from "next/image";
import styles from "./saleCard.module.css";
import Button from '@/components/forms/button/button'

export default function SaleCard() {
    return (
        <div className={styles.salecard}>
            <Image src="/products/league-of-legends.jpg" alt="" width={250} height={300} />

            <div className={styles.info}>
                <h3 className={styles.title}>Oferta Exclusiva</h3>

                <div className={styles.pricecard}>
                    <div className={styles.percent}>-20%</div>
                    <div className={styles.price}>
                        <p className={styles.fullprice}>R$99.90</p>
                        <h4 className={styles.discoutprice}>R$98,90</h4>
                    </div>
                </div>

                <div>
                    <Button fullwidth>Adicionar ao carrinho</Button>
                </div>
            </div>
        </div>
    );
}
