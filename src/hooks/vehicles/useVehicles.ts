import {useSuspenseQuery} from "@apollo/client";

import GET_VEHICLES from 'graphql/vehicles/queries/GetVehicles.gql'

import {GetVehiclesQuery} from "graphql/types";

export const useVehicles = () => useSuspenseQuery<GetVehiclesQuery>(GET_VEHICLES)