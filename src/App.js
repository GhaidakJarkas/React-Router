import { 
  createBrowserRouter, 
  Route,  
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";


import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Faq from "./pages/help/Faq.js";
import Contact, { contactAction } from "./pages/help/Contact.js";


import RootLayout from "./layouts/RootLayout.js";
import HelpLayout from "./layouts/HelpLayout.js";
import NotFound from "./pages/NotFound.js";
import CareersLayout from "./layouts/CareersLayout.js";
import Careers, { careersLoader } from "./pages/careers/Careers.js";
import CareerDetails, { careerDetailsLoader } from "./pages/careers/CareerDetails.js";
import CareerError from "./pages/careers/CareerError.js";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>
      
      <Route path="careers" element={<CareersLayout />} errorElement={<CareerError />}>
        <Route index element={<Careers />} loader={careersLoader}/>
        <Route 
          path=":id" 
          element={<CareerDetails />} 
          loader={careerDetailsLoader} 
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
