export interface IApiOpenweatherRequest {
  lat: number;
  lng: number;
}

export interface ILocationResponse {
  city: string;
  country: string;
  geonameId: number;
  lat: number;
  lng: number;
  postalCode?: string;
  region: string;
  timezone: string;
}

export interface IIpifyResponse {
  ip: string;
  location: ILocationResponse;
  as: {
    asn: number;
    name: string;
    route: string;
    domain?: string;
    type?: string;
  };
  isp: string;
}
