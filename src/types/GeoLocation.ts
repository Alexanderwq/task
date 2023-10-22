import Coords from "@/types/Coords";

export default interface GeoLocation {
    coords: Coords,
    address: string | null,
}