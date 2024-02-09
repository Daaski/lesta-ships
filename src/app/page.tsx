import {Suspense} from "react";

import {MainPage} from "app/components/MainPage/MainPage";

import {getVehiclesSsr} from "hooks/vehicles/getVehiclesSsr";



export default async function Home() {
    await getVehiclesSsr()

    return (
        <Suspense fallback={<div style={{marginLeft: '15px'}}>Loading...</div>}>
            <MainPage/>
        </Suspense>
    );
}
