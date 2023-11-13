import * as React from 'react';
import { createBrowserRouter } from "react-router-dom";
import { BookOverview } from './components/BookOverview';
import Layout from './Layout';
import { BookDetail } from './components/BookDetail';
import { getAllbooks, getBookById } from './data/api';
import { NotFound } from './components/NotFound';
import { SendTitles } from './pages/SendTitles';
import { ThierryBaudet } from './pages/ThierryBaudet';
import { Disclaimer } from './pages/Disclaimer';


export const router = createBrowserRouter([
    {
        path: "/",
        loader: async () => await getAllbooks(),
        element: <Layout>
            <BookOverview />
        </Layout>,
    },
    {
        path: "insturen",
        element: <Layout>
            <SendTitles />
        </Layout>,
    },
    {
        path: "thierry-baudet",
        element: <Layout>
            <ThierryBaudet />
        </Layout>,
    },
    {
        path: "disclaimer",
        element: <Layout>
            <Disclaimer />
        </Layout>,
    },
    {
        path: "/boek/:id/:title",
        loader: async ({ params }) => await getBookById(Number(params.id)),
        element: <Layout>
            <BookDetail />
        </Layout>
    },
    {
        path: "*",
        element: <Layout>
            <NotFound title='Niet gevonden' msg='Deze pagina bestaat niet, geef de schuld maar aan het partijkartel' descr='We zijn wel eens vaker de weg kwijt' />
        </Layout>
    }
]);
