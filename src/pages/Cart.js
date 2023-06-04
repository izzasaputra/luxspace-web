import React from "react";
import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb/index";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import ShippingDetail from "parts/Cart/ShippingDetail";
import ShoppingCart from "parts/Cart/ShoppingCart";

export default function Cart(props) {
  return (
    <>
      <Header theme="white" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetail />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}
