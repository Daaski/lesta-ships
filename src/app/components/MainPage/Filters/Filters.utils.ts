import { Vehicle } from 'graphql/types';

interface FiltersType {
    level: string | null;
    nation: string | null;
    vehicleClass: string | null;
}

export const FilterVehicles = (
    { vehicleClass, level, nation }: FiltersType,
    vehicles?: (Vehicle | null)[] | null
) => {
    const filters: ((vehicle: Vehicle | null) => boolean)[] = [];

    if (vehicleClass)
        filters.push((vehicle) => vehicle?.type?.title === vehicleClass);
    if (level) filters.push((vehicle) => vehicle?.level === +level);
    if (nation) filters.push((vehicle) => vehicle?.nation?.title === nation);

    return vehicles?.filter(vehicle => filters.every(filter => filter(vehicle)));
};
