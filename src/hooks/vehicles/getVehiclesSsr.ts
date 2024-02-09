import {getClient} from "apollo-client";

import GET_VEHICLES from 'graphql/vehicles/queries/GetVehicles.gql'

import {GetVehiclesQuery} from "graphql/types";

export const getVehiclesSsr = async () => {
    try {
        return await getClient().query<GetVehiclesQuery>({query: GET_VEHICLES})
    } catch (e) {
        console.log(e)
    }

}