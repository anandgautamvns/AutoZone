import { EngineEntity, MakerEntity, ModelEntity, YearEntity } from "./type";

export const yearList: YearEntity[] = [
  { year: "2023", yearId: "9023000" },
  { year: "2022", yearId: "9022000" },
  { year: "2021", yearId: "9021000" },
  { year: "2020", yearId: "9020000" },
  { year: "2019", yearId: "9019000" },
  { year: "2018", yearId: "9018000" },
  { year: "2017", yearId: "9017000" },
  { year: "2016", yearId: "9016000" },
  { year: "2015", yearId: "9015000" },
  { year: "2014", yearId: "9014000" },
  { year: "2013", yearId: "9013000" },
  { year: "2012", yearId: "9012000" },
  { year: "2011", yearId: "9011000" },
  { year: "2010", yearId: "9010000" },
  { year: "2009", yearId: "9009000" },
  { year: "2008", yearId: "9008000" },
  { year: "2007", yearId: "9007000" },
  { year: "2006", yearId: "9006000" },
  { year: "2005", yearId: "9005000" },
  { year: "2004", yearId: "9004000" },
  { year: "2003", yearId: "9003000" },
  { year: "2002", yearId: "9002000" },
  { year: "2001", yearId: "9001000" },
  { year: "2000", yearId: "9000000" },
  { year: "1999", yearId: "9999000" },
  { year: "1998", yearId: "9998000" },
  { year: "1997", yearId: "9997000" },
  { year: "1996", yearId: "9996000" },
  { year: "1995", yearId: "9995000" },
];

export const defaultYearData: YearEntity = {
  year: "2023",
  yearId: "9023000",
};

export const defaultMakerData: MakerEntity = {
  MakeId: 451,
  MakeName: "FULMER FABRICATIONS",
  MfrId: 965,
  MfrName: "FULMER FABRICATIONS",
};

export const defaultModelData: ModelEntity = {
  Make_ID: 449,
  Make_Name: "MERCEDES-BENZ",
  Model_ID: 1703,
  Model_Name: "Sprinter",
};

export const defaultEngineData: EngineEntity = {
  count: 0,
  engine: "4 Cylinders 1.5L Turbo DOHC VTEC 091 CID",
  engineId: 1,
};

export const defaultData = {
  Count: 0,
  Message: "",
  SearchCriteria: "",
  Results: [],
};
