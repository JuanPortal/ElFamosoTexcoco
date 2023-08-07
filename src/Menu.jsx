import React from 'react'
import { Dish } from './Dish'

export const Menu = () => {
    const menu = [
        ['Desayunos', 
            [
                'Huevos con jamón - Eggs w/ Ham',
                'Huevos con tocino - Eggs w/ Bacon',
                'Huevos con Salchicha - Eggs w/ Sausage',
                'Huevos a la mexicana - Mexican Eggs'
            ]
        ],
        ['Quesadilla',
            [
                'Quesadilla Grande',
                'Quesadilla Chica'
            ]
        ],
        ['Tacos',
            [
                'Carne asada',
                'Al Pastor',
                'Carnitas',
                'Cabeza',
                'Lengua',
                'Buche',
                'Pollo en Chipotle'
            ]
        ],
        ['Burritos',
            [
                'Carne asada',
                'Al Pastor',
                'Carnitas',
                'Cabeza',
                'Lengua',
                'Buche',
                'Pollo en Chipotle'
            ]
        ]
    ]

    return (
        <div className='menu'>
            {
                menu.map(dish => {
                    return <Dish key={dish[0]} name={dish[0]} types={dish[1]}/>
                })
            }
        </div>
    )
}
