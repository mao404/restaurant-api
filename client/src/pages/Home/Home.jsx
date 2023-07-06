import * as React from "react";
import AppAppBar from "../../views/AppAppBar";
import ProductHero from "../../views/ProductHero";
import ProductCategories from "../../views/ProductCategories";
import ProductValues from "../../views/ProductValues";
import ProductHowItWorks from "../../views/ProductHowItWorks";
import ProductContactUs from "../../views/ProductContactUs";
import AppFooter from "../../views/AppFooter";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductContactUs />
      <AppFooter />
    </React.Fragment>
  );
}

export default Index;
