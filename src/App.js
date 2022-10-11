
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import FAQ from './components/FAQ/FAQ';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Statistics from './components/Statistics/Statistics';
import Topics from './components/Topics/Topics';
import Main from './Layout/Main';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      loader: async () => await fetch(`https://openapi.programming-hero.com/api/quiz`),
      errorElement: <ErrorPage />,
      element: <Main />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/home', element: <Home /> },
        { path: '/topics', element: <Topics /> },
        {
          path: '/topics/:topicId',
          loader: async ({ params }) => await fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`),
          element: <Quiz />
        },
        { path: '/statistics', element: <Statistics /> },
        { path: '/faq', element: <FAQ /> }
      ]
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
