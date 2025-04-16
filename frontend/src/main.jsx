import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import HomeLanding from './components/home/HomeLanding'
import AfterProductSelction from './components/aftwrProductselection/AfterProductSelction'
import AllProduct from './components/allproducts/AllProduct'
import Collectinos from './components/collection/Collectinos'
import RefundPolicy from './components/RefundPolicy/RefundPolicy'
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy'
import TermsAndServices from './components/TermsAndServices/TermsAndServices'
import DetailsPage from './components/deatilsPage/DetailsPage'
import AddToCartPage from './components/addtocartpage/AddToCartPage'
import PaymentPage from './components/paymentPage/PaymentPage'

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeLanding />
      },
      {
        path: "/after",
        element: <AfterProductSelction />
      }
      ,
      {
        path: "/all",
        element: <AllProduct />
      }
      ,
      {
        path: "/collection",
        element: <Collectinos />
      }
      ,
      {
        path: "/refund",
        element: <RefundPolicy />
      }
      ,
      {
        path: "/privacypolicy",
        element: <PrivacyPolicy />
      }
      ,
      {
        path: "/termsandservices",
        element: <TermsAndServices />
      }
      ,
      {
        path: "/product/:id",
        element: <DetailsPage />
      }
      ,
      {
        path: "/cart",
        element: <AddToCartPage />
      }
      ,
      {
        path: "/pay",
        element: <PaymentPage />
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

