import { useEffect, useState } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useVehicleTypes } from 'hooks/vehicles/useVehicleTypes';
import { useVehicleNations } from 'hooks/vehicles/useVehicleNations';

import { Dropdown, DropdownChangeEvent } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';

import { SearchParamsHelper } from 'utils/searchParamsHelper';

import { FiltersType } from 'app/components/MainPage/Filters/types';
import { SelectItemOptionsType } from 'primereact/selectitem';

import scss from './Filters.module.scss';


export const Filters = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const searchParamsHelper = new SearchParamsHelper(searchParams.entries);

    const level = searchParams.get('level') ?? '';
    const nation = searchParams.get('nation') ?? '';
    const vehicleClass = searchParams.get('class') ?? '';

    const [filter, setFilters] = useState<FiltersType>({
        class: '',
        level: '',
        nation: '',
    });


    const types = useVehicleTypes();
    const nations = useVehicleNations();

    useEffect(() => {
        setFilters({ nation: nation, class: vehicleClass, level });
    }, [level, nation, vehicleClass]);

    const handleFiltersChange = (e: DropdownChangeEvent) => {
        const whichFilter = e.target.name;
        if (whichFilter === 'level') {
            if (+e.target.value > 11) {
                return;
            }
            if (!e.target.value) {
                searchParamsHelper.delete(whichFilter);
            } else {
                searchParamsHelper.set(whichFilter, e.target.value);
            }
        } else {
            if (!e.value.name) {
                searchParamsHelper.delete(whichFilter);
            } else {
                searchParamsHelper.set(whichFilter, e.value.title);
            }
        }
        setFilters((filters) => ({
            ...filters,
            [whichFilter]: e.target.value,
        }));
        router.replace(pathname + searchParamsHelper.getParams);
    };

    return (
        <div className={scss.filters_wrapper}>
            <Dropdown
                value={filter?.class}
                name="class"
                options={types.data?.vehicleTypes as SelectItemOptionsType}
                optionLabel="name"
                editable
                placeholder="Выберите класс!"
                onChange={handleFiltersChange}
            />
            <Dropdown
                value={filter?.nation}
                name="nation"
                options={nations.data?.nations as SelectItemOptionsType}
                optionLabel="name"
                editable
                placeholder="Выберите нацию!"
                onChange={handleFiltersChange}
            />
            <InputText
                value={filter?.level?.toString()}
                onChange={handleFiltersChange as any}
                name="level"
                keyfilter="int"
                placeholder="Укажите уровень!"
            />
        </div>
    );
};
