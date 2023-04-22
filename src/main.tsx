import ReactDOM from 'react-dom/client'
import './global.scss'
import {App} from "./components/app/app.component.tsx";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <App/>
    </QueryClientProvider>
);
