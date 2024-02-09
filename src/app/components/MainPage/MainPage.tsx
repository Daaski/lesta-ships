'use client'
import { useRouter, useSearchParams} from "next/navigation";
import {useMemo} from "react";

import {Button} from "primereact/button";
import {CardItem} from "app/components/MainPage/CardItem";
import {useVehicles} from "hooks/vehicles/useVehicles";
import {Filters} from "app/components/MainPage/Filters";
import {FilterVehicles} from "app/components/MainPage/Filters/Filters.utils";

import scss from './MainPage.module.scss'


export const MainPage = () => {
    const router = useRouter()
    const params = useSearchParams()

    const level = params.get('level')
    const nation = params.get('nation')
    const vehicleClass = params.get('class')

    const {data} = useVehicles()

    const filteredShips = useMemo(() => {
        return FilterVehicles({vehicleClass, level, nation}, data.vehicles)
    }, [data.vehicles, level, vehicleClass, nation])


    const handleReset = () => {
        router.replace('/')
    }

    return (
        <>
            <Filters/>
            <main className={scss.main_wrapper}>
                {filteredShips?.length !== 0 ? filteredShips?.map((vh, index) => (
                    <CardItem key={index} {...vh}/>
                )) : <div><h2>Ничего не найдено!</h2><Button severity="success" onClick={() => handleReset()}>Сбросить</Button></div>}
            </main>
        </>
    )
}