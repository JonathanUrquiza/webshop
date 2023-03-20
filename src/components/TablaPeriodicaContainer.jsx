import React, {useState, useEffect} from 'react'
import TablaPeriodicaLayout from './TablaPeriodicaLayout';

export default function TablaPeriodicaContainer() {
    const tablaPeriodica = [
        //Elemento base
        {
            nombre: 'Hidrógeno',
            simbolo: 'H',
            id: 1,
            numeroM: 1.008,
            estadoDeOxidacion: 1,
            estructuraElectronica: "1s1",
            electroNegatividad: 2.2,
            grupo: "calcógeno",
        },
        {
            nombre: 'Helio',
            simbolo: "He",
            id: 2,
            numeroM: 4.003,
            estadoDeOxidacion: 0,
            estructuraElectronica: "1s2",
            electroNegatividad: 0,
            grupo: "gas noble",
        },
        {
            nombre: "Litio",
            simbolo: "Li",
            id: 3,
            numeroM: 6.968,
            estadoDeOxidacion: 1,
            estructuraElectronica: "1s2 2s1",
            electroNegatividad: 0.93,
            grupo: "metal alcalino",

        },
        {
            nombre: "Berilio",
            simbolo: "Be",
            id: 4,
            numeroM: 9.012,
            estadoDeOxidacion: 2,
            estructuraElectronica: "1s2 2s2",
            electroNegatividad: 1.57,
            grupo: "alcalinoterreo",

        },
        {
            nombre: "Boro",
            simbolo: "B",
            id: 5,
            numeroM: 10.81,
            estadoDeOxidacion: 3,
            estructuraElectronica: "1s2 2s2 2p3",
            electroNegatividad: 2.04,
            grupo: "calcógeno",
        },
        {
            nombre: "Carbono",
            simbolo: "C",
            id: 6,
            numeroM: 12.01,
            estadoDeOxidacion: "",
            estructuraElectronica: "1s2 2s2 2p2",
            electroNegatividad: 2.55,
            grupo: "calcógeno",
        },
        {
            nombre: "Nitrógeno",
            simbolo: "N",
            id: 7,
            numeroM: 14.01,
            estadoDeOxidacion: "",
            estructuraElectronica: "",
            electroNegatividad: 3.04,
            grupo: "calcógeno",

        },
        {
            nombre: "Oxígeno",
            simbolo: "O",
            id: 8,
            numeroM: 16.0,
            estadoDeOxidacion: -2,
            estructuraElectronica: "",
            electroNegatividad: 3.44,
            grupo: "calcógeno",

        },
        {
            nombre: "Flúor",
            simbolo: "F",
            id: 9,
            numeroM: 19.0,
            estadoDeOxidacion: -1,
            estructuraElectronica: "",
            electroNegatividad: 3.98,
            grupo: "alógenos",

        },
        {
            nombre: "Neón",
            simbolo: "Ne",
            id: 10,
            numeroM: 20.18,
            estadoDeOxidacion: 0,
            estructuraElectronica: "",
            electroNegatividad: 0,
            grupo: "gas noble",
        },
        {
            nombre: "Sodio",
            simbolo: "Na",
            id: 11,
            numeroM: 22.99,
            estadoDeOxidacion: 1,
            estructuraElectronica: "",
            electroNegatividad: 0.93,
            grupo: "metal alcalino",

        },
        {
            nombre: "Magnesio",
            simbolo: "Mg",
            id: 12,
            numeroM: 24.31,
            estadoDeOxidacion: 2,
            estructuraElectronica: "",
            electroNegatividad: 1.33,
            grupo: "metal alcalinoterreo",

        },
        {
            nombre: "Aluminio",
            simbolo: "Al",
            id: 13,
            numeroM: 26.98,
            estadoDeOxidacion: 0,
            estructuraElectronica: "",
            electroNegatividad: 0,
            grupo: "gas noble",

        },
        {
            nombre: "Silicio",
            simbolo: "Si",
            id: 14,
            numeroM: 28.09,
            estadoDeOxidacion: 4,
            estructuraElectronica: "",
            electroNegatividad: 1.61,
            grupo: "Metaloide",

        },
        {
            nombre: "Fósforo",
            simbolo: "P",
            id: 15,
            numeroM: 30.97,
            estadoDeOxidacion: "+- 3 5",
            estructuraElectronica: "",
            electroNegatividad: 2.19,
            grupo: "calcógeno",

        },
        {
            nombre: "Azufre",
            simbolo: "S",
            id: 16,
            numeroM: 32.07,
            estadoDeOxidacion: "+- 2 4 6",
            estructuraElectronica: "",
            electroNegatividad: 2.58,
            grupo: "calcógeno",

        },
        {
            nombre: "Cloro",
            simbolo: "Cl",
            id: 17,
            numeroM: 35.45,
            estadoDeOxidacion: "+- 1 3 5 7",
            estructuraElectronica: "",
            electroNegatividad: 3.16,
            grupo: "halógeno",

        },
        {
            nombre: "Argón",
            simbolo: "Ar",
            id: 18,
            numeroM: 39.95,
            estadoDeOxidacion: 0,
            estructuraElectronica: "",
            electroNegatividad: 0,
            grupo: "gas noble",

        },
    ];
    /* empiezaa aca!
    aca se Fechea("www.pokepai/pokes" o JSON local
    normalizar ordenador
    paginado
    decidir el largo de cada pagina */
    return <TablaPeriodicaLayout tablaPeriodica={tablaPeriodica} />
}
