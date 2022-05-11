import { useEffect, useMemo } from "react";
import { ProductReleases } from "./ProductReleases";
import { IMacModel } from "../utils/groupByFamily";

interface IProductSummaryProps {
  title: string;
  description: string;
  image: string;
  models: IMacModel[];
}

interface IProductRelease {
  productId: string;
  intro: string;
  lifetime: number;
}

function differenceBetweenDates(from: Date, to: Date) {
  const MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;
  const result = +to - +from;

  return Math.floor(result / MILLISECONDS_IN_DAY);
}

function getReleases(models: IMacModel[]): IProductRelease[] {
  const result: IProductRelease[] = [];
  for (let i = 0; i < models.length - 1; i++) {
    result.push({
      intro: models[i].intro,
      productId: models[i].id,
      lifetime: differenceBetweenDates(
        new Date(models[i].intro),
        new Date(models[i + 1].intro)
      ),
    });
  }
  return result.reverse();
}
function getProductReleasesMeta(models: IMacModel[]) {
  const releases: IProductRelease[] = getReleases(models);
  const lastReleaseLifetime: number = differenceBetweenDates(
    new Date(models[models.length - 1].intro),
    new Date()
  );
  const maxLifetime = Math.max(...releases.map((r) => r.lifetime));
  const averageLifetime = Math.round(
    releases.slice(0, 6).reduce((a, b) => a + b.lifetime, 0) /
      releases.slice(0, 6).length
  );

  return {
    releases,
    lastReleaseLifetime,
    maxLifetime,
    averageLifetime,
  };
}

export function ProductSummary({
  title,
  description,
  image,
  models,
}: IProductSummaryProps) {
  const productReleasesMeta = useMemo(() => getProductReleasesMeta(models), [
    models,
  ]);

  const {
    releases,
    lastReleaseLifetime,
    maxLifetime,
    averageLifetime,
  } = productReleasesMeta;
  console.log(productReleasesMeta);

  return (
    <div>
      <ProductReleases
        releases={releases}
        lastReleaseLifetime={lastReleaseLifetime}
        maxLifetime={maxLifetime}
        averageLifetime={averageLifetime}
      />
    </div>
  );
}
