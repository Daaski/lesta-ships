import Image from "next/image";

import {Card} from "primereact/card";
import {Vehicle} from "graphql/types";

export const CardItem = (ship: Vehicle) => {
    const header = (
        <Image style={{width: 'auto', height: 'auto'}} width={500} height={300} alt="Ship image" src={'https:' + ship.icons?.medium} />
    );

    return (
        <Card title={`${ship?.title}; Класс: ${ship?.type?.title}`} header={header} subTitle={`Нация: ${ship?.nation?.title}; Уровень: ${ship?.level}`}>
            <p>{ship?.description}</p>
        </Card>
    )
}