import {useQuery} from "@apollo/client";

import GET_VEHICLE_NATIONS from 'graphql/vehicles/queries/GetVehicleNations.gql'

import {GetVehicleNationsQuery} from "graphql/types";

export const useVehicleNations = () => useQuery<GetVehicleNationsQuery>(GET_VEHICLE_NATIONS)