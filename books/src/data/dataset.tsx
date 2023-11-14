import { Map } from 'immutable'
import { Book } from './book'

export const data = Map<number, Book>()
    .set(1, { 
        id: 1, 
        title: "Niemand in de cockpit" , 
        author: "Thierry Baudet", 
        description: <p>
            Niemand in de cockpit? 
        Niet als het aan onze koning ligt. 
        Willempie vliegt dat ding zelf wel.
        <img width="250px" height="auto" src={`${process.env.PUBLIC_URL}/img/koning-willem-alexander-fokker-70-klm.jpg`}/>
        </p>, 
        image_url: `${process.env.PUBLIC_URL}/img/niemand_in_de_cockpit.webp`, 
        price: "€20,-"
    })
    .set(2, { 
        id: 2, 
        title: "Tegelspreuk: Judge Baudets book by it's cover" , 
        author: "Onbekend", 
        description: "Een wereld bekend oud Hollands gezegde op een tegeltje: 'Don’t judge a book by its cover, except if it is a book from Baudet, want daar is alles al mee gezegd'. Overigens ook het motto van deze site.", 
        image_url: `${process.env.PUBLIC_URL}/img/judge-by-cover.png`, 
        price: "€15,-"
    })
    .set(3, { 
        id: 3, 
        title: "Het genie Henry Baudet" , 
        author: "Henry Baudet", 
        description: <p>
        Een genie zegt hij? 
        De beste schaker zegt hij? Geniaal in alles zegt hij? 
        Zo kan ik het ook.
        <img width="250px" height="auto" src={`${process.env.PUBLIC_URL}/img/00427006.jpg`}/>
        </p>, 
        image_url: `${process.env.PUBLIC_URL}/img/henrybaudet.webp`, 
        price: "€20,-"
    })
    .set(4, { 
        id: 4, 
        title: "Politiek van het gezond verstand" , 
        author: "Thierry Baudet???", 
        description: <>
        <p>
        Deze titel komt mij bekend voor alsof Caroline van der Plas het geschreven
        zou kunnen hebben. Of wacht, dat heeft ze ook: 
        </p>
        <p>
        <img width="250px" height="auto" src={`${process.env.PUBLIC_URL}/img/524x840.jpg`}/>
        </p>
        </>, 
        image_url: `${process.env.PUBLIC_URL}/img/politiekvanhetgezondverstand.webp`, 
        price: "€24,99"
    })
    .set(5, { 
        id: 5, 
        title: "Zijn naam is klein" , 
        author: "Simon Rozendaal", 
        description: <>
        <p>
        Zijn naam is klein? Hein zal je bedoelen. 
        Typefout op de cover, maar het lag al bij de drukker. 
        We hebben al een Joost Klein.
        <h2>Zijn naam is klein:</h2>
        <iframe width="250" height="auto" src="https://www.youtube.com/embed/Lg6CwCGy7mQ?si=8Aeon2FQPZ3Ruimh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </p>
        <p>
        <h3>Zijn naam is</h3><h6>klein</h6><h3>zijn</h3><h2>droom</h2><h4>is</h4><h1>groot</h1>
        </p>
        </>, 
        image_url: `${process.env.PUBLIC_URL}/img/Zijnnaamisklein.webp`, 
        price: "€24,99"
    })
        .set(6, {
        id: 6, 
        title: "De Gideonsbende", 
        author: "Thierry Baudet", 
        description: <p>
            De Gideonsbende vertelt het verhaal van Forum voor Democratie, 
        de <b>enige</b> politieke partij in Nederland...
        De <b>endige!?</b> 
        Er zijn nog 25 andere partijen waar je ook op kunt stemmen 
        tijdens de tweedekamer verkiezingen van 2023. 
        <a href="https://www.kiesraad.nl/actueel/nieuws/2023/10/13/26-partijen-nemen-deel-aan-tweede-kamerverkiezing" target="_blank">Alle partijen</a>
        
        </p>, // HTML supported
        image_url: `${process.env.PUBLIC_URL}/img/de_gideonsbende_mockup_03_voorkant.webp`, 
        price: "€21,95" 
    })
    .set(7, {
            id: 7, 
            title: "De ravage van tien jaar Rutte", 
            author: "Thierry Baudet en Paul Frentrop", 
            description: <p>
            Dit boek had ook door ieder ander geschreven kunnen worden
            <img width="250px" height="auto" src={`${process.env.PUBLIC_URL}/img/rutte-naaien.png`}/>
            <img width="250px" height="auto" src={`${process.env.PUBLIC_URL}/img/derek-otte.png`}/>
            </p>, // HTML supported
            image_url: `${process.env.PUBLIC_URL}/img/ravagerutte.webp`,
            price: "€14,95" 
        })
        .set(8, {
                id: 8, 
                title: "Bardot, Fallaci, Houellebecq en Wilders", 
                author: "Paul Cliteur", 
                description: <>
                <p>
                    Dit boek is een suggestie voor de bouw van een nieuw <a target="_blank" href="https://en.wikipedia.org/wiki/Mount_Rushmore">Mount Rushmore</a>
                </p>
                <p>
                    <img width="300px" height="auto" src={`${process.env.PUBLIC_URL}/img/mount-rushmore.png`}/>
                </p>
                </>, // HTML supported
                image_url: `${process.env.PUBLIC_URL}/img/Gerechtelijkevervolgingvanreligiekritiekenvreemdelingenvrees.webp`, 
                price: "€22,-" 
        })
        .set(9, {
            id: 9, 
            title: "Breek het partijkartel", 
            author: "Thierry Baudet", 
            description: <p>
                <img width="300px" height="auto" src={`${process.env.PUBLIC_URL}/img/816eb7eed89c11e08fde81a0fe4fbbe6.jpg`}/>
            </p>, // HTML supported
            image_url: `${process.env.PUBLIC_URL}/img/breekkartel9edruk.webp`,
            price: "€19,95" 
        })
        .set(10, {
                id: 10, 
                title: "Aanval op de natiestaat", 
                author: "Thierry Baudet", 
                description: <p>
                    <img width="300px" height="auto" src={`${process.env.PUBLIC_URL}/img/154632.jpg`}/>
                </p>, // HTML supported
                image_url: `${process.env.PUBLIC_URL}/img/DeAanvalopdenatiestaat.webp`, 
                price: "20,99€" 
            })
        .set(11, {
                id: 11, 
                title: "How we invented freedom and why it matters", 
                author: "Hannan", 
                description: <p>
                    <iframe width="250" height="auto" src="https://www.youtube.com/embed/LlY90lG_Fuw?si=ymqpNeyRjxpfpeBe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </p>, // HTML supported
                image_url: `${process.env.PUBLIC_URL}/img/HowWeInventedFreedom_WhyItMatters.webp`, 
                price: "€12,99" 
            })
        .set(12, {
                id: 12, 
                title: "Het paradijs op aarde", 
                author: "Henry Baudet", 
                description: <p>
                    <iframe width="250" height="auto" src="https://www.youtube.com/embed/eYEgYVyBDuM?si=V9RsAajztS-mubG2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </p>, // HTML supported
                image_url: `${process.env.PUBLIC_URL}/img/HetParadijsopaarde.webp`, 
                price: "€19,50" 
            })
        .set(13, {
            id: 13, 
            title: "Cursus: Beter in bed", 
            author: "Arjen Lubach", 
            description: <p>
                De FvD is de meest sexueel actieve partij van Nederland. Eén ding is in iedergeval zeker, je bent al snel beter in bed dan Thierry Baudet.
                <iframe width="250" height="auto" src="https://www.youtube.com/embed/4USh2bSLbNU?si=OG8kDqpPPyKIyzrc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </p>, // HTML supported
            image_url: `${process.env.PUBLIC_URL}/img/ebafa5a302203255842c7eb78285bdc3.640x640x1.jpg`, 
            price: "GRATIS!!!" 
        })
        .set(14, {
            id: 14, 
            title: "Latijn voor beginners", 
            author: "Peter Jones", 
            description: <p>
                Een snel cursus Latijn kan geen kwaad, om te begrijpen wat Baudet allemaal zegt.
                <iframe width="250" height="auto" src="https://www.youtube.com/embed/tUnhijtzsuA?si=JClV6lFM_IksuG2l&amp;start=19" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </p>, // HTML supported
            image_url: `${process.env.PUBLIC_URL}/img/20230907050310-latijn-voor-beginners-9789035131033.jpg`, 
            price: "€15,99" 
        })
        .set(15, {
            id: 15, 
            title: "Baudet door de ogen van AI", 
            author: "ChatGPT", 
            description: <p>
                In "Baudet door de ogen van AI" werpt ChatGPT een unieke en fascinerende blik op de wereld van Thierry Baudet, de politicus die het publieke debat in Nederland heeft weten te beïnvloeden als weinig anderen. Dit boek neemt de lezer mee op een reis door de digitale rijken waar Baudets ideeën, controverses en politieke stappen hun weerspiegeling vinden.

ChatGPT, een geavanceerde kunstmatige intelligentie, analyseert en interpreteert de online aanwezigheid van Thierry Baudet. Van social media tot nieuwsartikelen, van interviews tot speeches - geen enkel aspect van Baudets wereld blijft onontgonnen. Door deze digitale lens onthult het boek niet alleen de impact van Baudet op het internet, maar ook hoe het internet hem waarneemt.

Ontdek de complexiteit van de digitale psyche die Baudet omringt en begrijp hoe online discussies en interpretaties een cruciale rol spelen in het vormgeven van zijn politieke persona. ChatGPT ontrafelt de lagen van retoriek, perceptie en publieke opinie, en biedt een diepgaand inzicht in de dynamiek tussen Baudet en het internet.

"Baudet door de ogen van AI" is niet alleen een boek over politiek, maar ook een verkenning van de relatie tussen individuele leiders en de digitale wereld waarin zij opereren. Laat je meeslepen door dit boeiende onderzoek dat de grenzen van traditionele politieke analyse overstijgt en de invloed van technologie op hedendaagse politiek in kaart brengt.
            </p>, // HTML supported
            image_url: `${process.env.PUBLIC_URL}/img/AI-baudet.png`, 
            price: "€42,-" 
        })
    // Template new book
    // .set(, {
    //     id: , 
    //     title: "", 
    //     author: "", 
    //     description: <p></p>, // HTML supported
    //     image_url: `${process.env.PUBLIC_URL}/img/`, 
    //     price: "€" 
    // })
    .sortBy(Math.random)