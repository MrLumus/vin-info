export interface IAutoInfoRequest {
  vin: string;
  date: string;
  key: string;
}

export interface IAutoInfoResult {
  osagoId: string;
  company: string;
  osagoIsActive: boolean;
  osagoIsActiveOnDate: boolean;
  premium: number;
  hasTrailer: boolean;
  kbm: number;
  usageRegion: string;
  ownerBirthDate: string;
  owner: string;
  usageTarget: string;
  inRoadToTi: boolean;
  insurerBirthDate: string;
  insurer: string;
  limitations: string;
  markModel: string;
  numberPlate: string;
  VIN: string;
  enginePower: number;
  error: string;
}

export interface IAutoInfo {
  result: IAutoInfoResult[];
}
