import H2 from "components/Elements/H2";
import Icon from "components/Elements/Icon";
import OverweightTitle from "components/Elements/OverweightTitle";
import P from "components/Elements/P";
import Subtitle from "components/Elements/Subtitle";
import BasicCard from "./BasicCard";

interface IProps {

}

const PackageCard = (props: IProps) => {


    return <BasicCard>
        
        <OverweightTitle backgroundTitle="Brezplačni osnovni">
            <Subtitle>PAKET</Subtitle>
            <H2>Za najbližje</H2>
        </OverweightTitle>

        <P className="my-7 text-red">
            brezplačno
        </P>

        <div className='px-7 text-xl font-body my-8'>
            <div className='flex justify-between gap-2 py-1'>
                <div>do 100 slik</div>
                <div><Icon name='questionmark' /></div>
            </div>
            <div className='flex justify-between gap-2 py-1'>
                <div>do 20 gostov</div>
                <div><Icon name='questionmark' /></div>
            </div>
            <div className='flex justify-between gap-2 py-1'>
                <div>fotografije so na voljo 15 dni</div>
                <div><Icon name='questionmark' /></div>
            </div>
            <div className='flex justify-between gap-2 py-1'>
                <div className='flex-1'>možen je prenos vsake slike posebej še posebej če sta udeležena oba udeleženca</div>
                <div><Icon name='questionmark' /></div>
            </div>

        </div>

        <div className=''>
            <div className='w-11/12 font-body text-xl bg-red text-white m-auto text-center p-3 rounded-md'>
                Izberi paket Za Najbližje!
            </div>
        </div>

    </BasicCard>
}

export default PackageCard;