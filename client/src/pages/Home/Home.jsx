import * as React from "react";
import AppAppBar from "../../views/AppAppBar";
import ProductHero from "../../views/ProductHero";
import ProductCategories from "../../views/ProductCategories";
import ProductValues from "../../views/ProductValues";

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
    </React.Fragment>
  );
}

export default Index;
