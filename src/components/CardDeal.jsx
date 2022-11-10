import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';
const CardDeal = () => (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden" /> in few easy steps.</h2>
        <p className={`${styles.paragraph} max-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>

        <Button styles="mt-10" />
      </div>

      <div className={layout.sectionImg}>
        <img src="https://res.cloudinary.com/droaf0tqk/image/upload/v1667828737/card_k9zhcb.png" alt="card" className="w-[100%] h-[100%] hover:scale-110 transition duration-300 ease-in-out"/>

      </div>


    </section>
  )


export default CardDeal