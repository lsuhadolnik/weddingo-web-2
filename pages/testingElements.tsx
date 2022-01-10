import BasicCard from 'components/Cards/BasicCard'
import IconCard from 'components/Cards/IconCard'
import PackageCard from 'components/Cards/PackageCard'
import TestimonailCard from 'components/Cards/TestimonailCard'
import TransparentCard from 'components/Cards/TransparentCard'
import CallToAction from 'components/Elements/CallToAction'
import H1 from 'components/Elements/H1'
import H2 from 'components/Elements/H2'
import Icon from 'components/Elements/Icon'
import P from 'components/Elements/P'
import { requireCollection } from 'lib/requireCollection'
import { requireSiteParts } from 'lib/requireSitePart'
import type { NextPage } from 'next'
import Head  from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'



const Home: NextPage = (props: any) => {


    return (
        <Layout>
            <Head>
                <title>Weddingo</title>
            </Head>


            {/** KEEP THIS LINE!!! IT MUST STAY TO TELL TailwindCSS not to purge some additional classes which are applied dynamically */}
            <div className='md:grid-cols-1 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 md:grid-cols-5 md:grid-cols-6' />
            <div className="bg-wedding bg-party-popper bg-box bg-heart bg-bouquet bg-how-it-works" />

            {/*<div className='h-1/4'>
                <div className='relative h-full'>
                <Image src='/images/icons.svg' layout='responsive' width={375} height={150} objectFit='cover' objectPosition='cover'/>
                </div>
            </div>*/}

            <TestimonailCard title={'Manca'} subtitle={'13. 7. 2021'}>
                Weddingo je bila najboljša možna odločitev. Vedela sem, da me bo po koncu poroke zagrabila panika, ker bo vsega konec. Namesto panike sem samo vzela telefon in znova pregledala dogajanje preko slik, ki so jih objavili svatje. Takoj sem bila pomirjena.
            </TestimonailCard>
                

            <IconCard icon='littlebouquet'>
                <H2>Najina zgodba</H2>
                <P className='my-7'>
                    Pozdravljeni!
                </P>
                <P className='my-7'>
                    Sva Mojca in Lovro. Ko sva se pripravljala na svojo poroko, sva naletela na težavo, ker sva želela imeti tudi tiste fotografije, ki jih bodo posneli svatje.
                </P>
            </IconCard>

            


            {/* EMPTY CARD WITH CALL TO ACTION */}
            <TransparentCard className='py-10 bg-heart bg-no-repeat bg-left'>
                <H1>Najina zgodba</H1>
                <P className='my-7'>
                    Pozdravljeni!
                </P>
                <P>
                    Sva Mojca in Lovro. Ko sva se pripravljala na svojo poroko, sva naletela na težavo, ker sva želela imeti tudi tiste fotografije, ki jih bodo posneli svatje.
                </P>
            </TransparentCard>

            {/* EMPTY CARD WITH CALL TO ACTION */}
            <div className='my-10 py-10 bg-box bg-no-repeat bg-left'>
            <h1 className="px-7 text-5xl font-header subpixel-antialiased after:content-[''] after:h-[3px] after:w-[30px] after:my-10 after:block  after:bg-black">
                    Cenik
                </h1>
                <p className="px-7 my-7 text-xl font-body subpixel-antialiased leading-8">
                    Izberi paket, ki ti ustreza
                </p>

            </div>

            {/* EMPTY CARD WITH CALL TO ACTION */}
            <div className='my-10 py-10 bg-party-popper bg-no-repeat bg-center'>
            <h1 className="px-7 text-5xl font-header subpixel-antialiased after:content-[''] after:h-[3px] after:w-[30px] after:my-10 after:block  after:bg-black">
                    Kaj pa ti?
                </h1>
                <p className="px-7 my-7 text-xl font-body subpixel-antialiased leading-8">
                    Bo tudi tvoja poroka srečna zgodba?
                </p>

                <div className=''>
                    <div className='w-11/12 font-body text-xl bg-red text-white m-auto text-center p-3 rounded-md'>
                        Pripravi svoj weddingo zdaj!
                    </div>
                </div>

            </div>

            {/* EMPTY CARD WITH CALL TO ACTION */}
            <div className='bg-white my-10 py-10'>
                <div className="px-7 py-2 font-body text-sm text-gray">VPRAŠANJE</div>
                <h2 className="px-7 text-4xl text-h2 font-header subpixel-antialiased">
                    Kaj pomeni &quot;digitalni album s fotografijami&quot;?
                </h2>
                <p className="px-7 my-7 text-xl font-body subpixel-antialiased leading-8">
                    Nekateri paketi omogočajo izdelavo digitalnega albuma fotografij - datoteke PDF, ki vsebuje vse vaše slike in je pripravljena za tiskanje v obliki foto knjige.
                </p>

                <div className=''>
                    <div className='w-11/12 font-body text-xl bg-red text-white m-auto text-center p-3 rounded-md'>
                        Pripravi svoj weddingo zdaj!
                    </div>
                </div>

            </div>

            {/* EMPTY CARD */}
            <div className='bg-white my-10 py-10'>
                <div className="px-7 py-2 font-body text-sm text-gray">VPRAŠANJE</div>
                <h2 className="px-7 text-4xl text-h2 font-header subpixel-antialiased">
                    Kaj pomeni &quot;digitalni album s fotografijami&quot;?
                </h2>
                <p className="px-7 my-2 mt-7 text-xl font-body subpixel-antialiased leading-8">
                    Nekateri paketi omogočajo izdelavo digitalnega albuma fotografij - datoteke PDF, ki vsebuje vse vaše slike in je pripravljena za tiskanje v obliki foto knjige.
                </p>

            </div>

            
            <h1 className="px-7 text-5xl font-header subpixel-antialiased after:content-[''] after:h-[3px] after:w-[30px] after:my-10 after:block  after:bg-black">Da bo tvoja poroka trajala dlje</h1>
            <h2 className="px-7 text-4xl my-8 text-h2 font-header subpixel-antialiased">Da bo tvoja poroka trajala dlje</h2>
            <div className="px-7 py-2 font-body text-sm text-gray">PRAVNE INFORMACIJE</div>
            <p className="px-7 my-2 text-xl font-body subpixel-antialiased leading-8">Na vajini poroki bo super! Ne dvomimo. Pa vendar se na vsakem dogodku kdaj zgodi, da gostom postane dolgčas. Tukaj pa pomaga Weddingo.</p>


            <div className="px-7 py-2 font-body text-sm text-gray">PRAVNE INFORMACIJE</div>
            <p className="px-7 my-2 text-xl font-body subpixel-antialiased leading-8">Na vajini poroki bo super! Ne dvomimo. Pa vendar se na vsakem dogodku kdaj zgodi, da gostom postane dolgčas. Tukaj pa pomaga Weddingo.</p>
            <p className="px-7 my-6 text-xl font-body subpixel-antialiased leading-8">Na vajini poroki bo super! Ne dvomimo. Pa vendar se na vsakem dogodku kdaj zgodi, da gostom postane dolgčas. Tukaj pa pomaga Weddingo.</p>
            <p className="px-7 my-6 text-xl font-body subpixel-antialiased leading-8">Na vajini poroki bo super! Ne dvomimo. Pa vendar se na vsakem dogodku kdaj zgodi, da gostom postane dolgčas. Tukaj pa pomaga Weddingo.</p>
            <p className="px-7 my-6 text-xl font-body subpixel-antialiased leading-8">Na vajini poroki bo super! Ne dvomimo. Pa vendar se na vsakem dogodku kdaj zgodi, da gostom postane dolgčas. Tukaj pa pomaga Weddingo.</p>
            

            {/*<Paragraph>Weddingo je tvoja rešitev za prekratek poročni dan</Paragraph>
            <Subtitle>PRAVNE INFORMACIJE</Subtitle>
            <CallToAction>aaa</CallToAction>*/}

        </Layout>
    )
}

export default Home




export const getStaticProps = async () => {
    
    const siteParts = await requireSiteParts([
        'page-intro-title',
        'page-intro-subtitle',
        'privacy-notice'
    ]);

    const whyFacts = await requireCollection('whyFacts');
    const testimonials = await requireCollection('testimonials');

    return {
        props: {
            siteParts,
            collections: {
                whyFacts, testimonials
            }
        }
    }
}
