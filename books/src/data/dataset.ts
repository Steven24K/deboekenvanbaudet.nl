import { Map } from 'immutable'
import { Book } from './book'

export const data = Map<number, Book>()
    .set(1, { 
        id: 1, 
        title: "Niemand in de cockpit" , 
        author: "Thierry Baudet", 
        description: "Niemand in de cockpit? Niet als het aan onze koning ligt. Willempie vliegt dat ding zelf wel.", 
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
        description: "Een genie zegt hij? De beste schaker zegt hij? Geniaal in alles zegt hij? Zo kan ik het ook.", 
        image_url: `${process.env.PUBLIC_URL}/img/henrybaudet.webp`, 
        price: "€20,-"
    })
    .set(4, { 
        id: 4, 
        title: "Politiek van het gezond verstand" , 
        author: "Henry Baudet", 
        description: "Zoals Caroline van der Plas het zegt, op z'n BBB's.", 
        image_url: `${process.env.PUBLIC_URL}/img/politiekvanhetgezondverstand.webp`, 
        price: "€24,99"
    })
    .set(5, { 
        id: 5, 
        title: "Zijn naam is klein" , 
        author: "Simon Rozendaal", 
        description: "Zijn naam is klein? Hein zal je bedoelen. Typefout op de cover, maar het lag al bij de drukker. We hebben al een Joost Klein.", 
        image_url: `${process.env.PUBLIC_URL}/img/Zijnnaamisklein.webp`, 
        price: "€24,99"
    })