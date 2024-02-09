import {useQuery} from "@apollo/client";

import GET_VEHICLE_TYPES from 'graphql/vehicles/queries/GetVehicleTypes.gql'

import {GetVehicleTypesQuery} from "graphql/types";

export const useVehicleTypes = () => useQuery<GetVehicleTypesQuery>(GET_VEHICLE_TYPES)