import logo from "../../assets/brand/ryugege-logo.webp";
import founder from "../../assets/brand/ryu-graduation.webp";
import clipBusinessInterpreter from "../../assets/clips/business-interpreter-import.webp";
import clipGuangzhouClothing from "../../assets/clips/guangzhou-clothing-import.webp";
import clipSupplierVisit from "../../assets/clips/supplier-factory-visit.webp";
import clipKunmingExpo from "../../assets/clips/kunming-south-asia-expo.webp";
import xianDayOne from "../../assets/xian/days/day-1-tang-west-market-hotel.webp";
import xianDayTwo from "../../assets/xian/days/day-2-terracotta-warriors.webp";
import xianDayFour from "../../assets/xian/days/day-4-xian-ski.webp";
import xianDayFive from "../../assets/xian/days/day-5-muslim-street.webp";
import xianSedan from "../../assets/xian/vehicles/vehicle-5-seat-sedan.webp";
import xianVan from "../../assets/xian/vehicles/vehicle-9-seat-van.webp";
import xianMinibus from "../../assets/xian/vehicles/vehicle-14-seat-minibus.webp";
import xianCoach from "../../assets/xian/vehicles/vehicle-19-seat-coach.webp";
import heroFair from "../../assets/site/hero-fair.webp";
import heroFairMobile from "../../assets/site/hero-fair-mobile.webp";
import heroFairTablet from "../../assets/site/hero-fair-tablet.webp";
import heroMarket from "../../assets/site/hero-market.webp";
import heroMarketMobile from "../../assets/site/hero-market-mobile.webp";
import heroMarketTablet from "../../assets/site/hero-market-tablet.webp";
import heroInterpreter from "../../assets/site/hero-interpreter.webp";
import heroInterpreterMobile from "../../assets/site/hero-interpreter-mobile.webp";
import heroInterpreterTablet from "../../assets/site/hero-interpreter-tablet.webp";
import heroPrivateTour from "../../assets/site/hero-private-tour.webp";
import heroPrivateTourMobile from "../../assets/site/hero-private-tour-mobile.webp";
import heroPrivateTourTablet from "../../assets/site/hero-private-tour-tablet.webp";
import tripGuangzhou from "../../assets/site/trip-guangzhou.webp";
import tripXian from "../../assets/site/trip-xian.webp";
import tripChaozhou from "../../assets/site/trip-chaozhou.webp";
import tripYunnan from "../../assets/site/trip-yunnan.webp";
import tripPrivate from "../../assets/site/trip-private.webp";
import tripBusiness from "../../assets/site/trip-business.webp";
import xianDayThree from "../../assets/xian/days/xian-day-3.webp";

/**
 * Local media is statically imported so Next.js can generate the correct URL
 * in development and when the site is exported under the GitHub Pages basePath.
 */
export const siteMedia = {
  logo,
  founder,
  hero: {
    fair: {
      desktop: heroFair,
      tablet: heroFairTablet,
      mobile: heroFairMobile,
    },
    market: {
      desktop: heroMarket,
      tablet: heroMarketTablet,
      mobile: heroMarketMobile,
    },
    interpreter: {
      desktop: heroInterpreter,
      tablet: heroInterpreterTablet,
      mobile: heroInterpreterMobile,
    },
    privateTour: {
      desktop: heroPrivateTour,
      tablet: heroPrivateTourTablet,
      mobile: heroPrivateTourMobile,
    },
  },
  trips: {
    guangzhou: tripGuangzhou,
    xian: tripXian,
    yunnan: tripYunnan,
    chaozhou: tripChaozhou,
    privateTour: tripPrivate,
    businessTour: tripBusiness,
  },
  clips: {
    businessInterpreter: clipBusinessInterpreter,
    guangzhouClothing: clipGuangzhouClothing,
    supplierVisit: clipSupplierVisit,
    kunmingExpo: clipKunmingExpo,
  },
  xian: {
    days: {
      one: xianDayOne,
      two: xianDayTwo,
      three: xianDayThree,
      four: xianDayFour,
      five: xianDayFive,
    },
    vehicles: {
      sedan: xianSedan,
      van: xianVan,
      minibus: xianMinibus,
      coach: xianCoach,
    },
  },
} as const;
