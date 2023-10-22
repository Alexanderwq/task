import GeoLocation from "@/types/GeoLocation";

export default interface UserInfo {
    phone: string,
    name: string,
    geoLocation: GeoLocation,
}