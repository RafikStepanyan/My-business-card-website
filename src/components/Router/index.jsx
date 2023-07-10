import { useRoutes } from 'react-router-dom';
import { Layout } from '../../pages/Layout';
import { Home } from '../../pages/Home';
import { About } from '../../pages/About';
import { Skills } from '../../pages/Skills';
import { Contact } from '../../pages/Contact';
import { Error } from '../../pages/Error';

export const UseRouter = () => {
    const router = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/skills',
                    element: <Skills />
                },
                {
                    path: '/contact',
                    element: <Contact />
                },
                {
                    path: '*',
                    element: <Error />
                },
            ]
        }
    ]);
    return router;
};