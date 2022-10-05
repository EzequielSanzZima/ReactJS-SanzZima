export const products = [
    {
        id: 1,
        category: 'remera',
        name: "Remera Red Bull Racing 2022",
        price: {
            fullPrice: 60.00,
            whole: '60',
            cent: '.00',
        },
        img: '//images.footballfanatics.com/red-bull/oracle-red-bull-racing-2022-team-t-shirt_ss4_p-13300649+u-w4u34ud78xqny7usgbtn+v-23202ea1cf1f4881919aa5673234fc11.jpg?_hv=2&w=340',
        stock: 5,
        detail: {
            detail1: '100 % poliéster',
            detail2: 'Manga corta',
            detail3: 'Cuello redondo',
            detail4: 'Gráficos impresos',
        },
        description: 'Consigue una sensación más cálida con esta fantástica sudadera. La marca icónica de F1 es, sin duda, una forma excelente de mostrar tu apoyo, haga el tiempo que haga.'

    },{
        id: 2,
        category: 'gorra',
        name: 'Gorra Alpine 2022',
        price: {
            fullPrice: 47.20,
            whole: '47',
            cent: '.20',
        },
        img:'//images.footballfanatics.com/alpine/bwt-alpine-f1-team-2022-new-era-9fifty-stretch-snap-cap_ss4_p-12087895+u-sz3nklgtj57hffj4a603+v-73cd67bbb8254d4fac3588441cdbfe6f.jpg?_hv=2&w=900',
        stock: 8,
        detail: {
            detail1: '100 % poliéster',
            detail2: 'Visera interior: 100% algodón | Visera curva',
            detail3: 'Corona de 6 paneles',
            detail4: 'Cierre ajustable en la nuca',
        },
        description: 'Consigue el estilo de tu equipo favorito de carreras. Este artículo icónico añade un toque de velocidad a cualquier otra prenda para que puedas mostrar tus simpatías en la pista y en cualquier otra parte.'
    },{
        id: 3,
        category: 'gorra',
        name: 'Gorra McLaren 2022',
        price: {
            fullPrice: 47.20,
            whole: '47',
            cent: '.20',
        },
        img: '//images.footballfanatics.com/mclaren-f1-team/mclaren-2022-new-era-9fifty-lando-norris-cap_ss4_p-12092204+u-quib6lzft0fjh0gnpjvh+v-e9a56af25b9a4fcd82c30e29334b52bc.jpg?_hv=2&w=900',
        stock: 58,
        detail: {
            detail1: '100 % poliéster',
            detail2: 'Cierre ajustable en la nuca',
            detail3: 'Logotipo bordado',
            detail4: 'Corona de 6 paneles',
        },
        description: 'Consigue el estilo de tu equipo favorito de carreras. Este artículo icónico añade un toque de velocidad a cualquier otra prenda para que puedas mostrar tus simpatías en la pista y en cualquier otra parte.'
    },{
        id: 4,
        category: 'campera-buzo',
        name: 'Campera Red Bull Racing 2022',
        price: {
            fullPrice: 106.40,
            whole: '106',
            cent: '.40',
        },
        img: '//images.footballfanatics.com/red-bull/oracle-red-bull-racing-2022-team-full-zip-hooded-sweat_ss4_p-13300636+u-5g57wb1x9fsckxusdcu4+v-5d959308f7314247b5915c7b08dea343.jpg?_hv=2&w=900',
        stock: 2,
        detail: {
            detail1: '68 % algodón | 32 % poliéster',
            detail2: 'Cierre de cremallera',
            detail3: 'Capucha con cordón',
            detail4: 'Puños y dobladillo elásticos',
        },
        description: 'Toma algo que puedes encontrar en cualquier vestuario y añádele el estilo de precisión de tu equipo. Siente la auténtica sensación de estar al lado de la pista con esta bonita prenda y siéntete listo para cualquier cosa.'
    },{
        id: 5,
        category: 'campera-buzo',
        name: 'Cortavientos Scuderia Ferrari',
        price: {
            fullPrice: 88.90,
            whole: '88',
            cent: '.90',
        },
        img: '//images.footballfanatics.com/scuderia-ferrari/scuderia-ferrari-puma-windbreaker_ss4_p-12046122+u-11iqusncuj9sytl2mulm+v-92a87a7b3313433d8380c7eba45ddbaf.jpg?_hv=2&w=900',
        stock: 10,
        detail: {
            detail1: 'Logotipo estampado.',
            detail2: 'Bolsillos con abertura en los laterales',
            detail3: 'Capucha con cordón',
            detail4: 'Puños y dobladillo elásticos',
        },
        description: 'Esta chaqueta es imprescindible para disfrutar de un aire de F1 definitivo. La prenda de abrigo ideal para cualquier aficionado, ya sea junto a la pista como en cualquier otro lugar.'
    },{
        id: 6,
        category: 'remera',
        name: 'Remera BWT Alpine 2022 - Azul',
        price: {
            fullPrice: 60,
            whole: '60',
            cent: '.00',
        },
        img: '//images.footballfanatics.com/alpine/bwt-alpine-f1-team-2022-t-shirt-blue_ss4_p-12097632+u-q93s759thmq2xgu7s2xp+v-cf6ec6a2ccc8402ab203d0e29b8740b6.jpg?_hv=2&w=900',
        stock: 58,
        detail: {
            detail1: '100 % poliéster',
            detail2: 'Manga corta',
            detail3: 'Cuello redondo',
            detail4: 'Gráficos impresos',
        },
        description: 'Toma una prenda esencial y dale el auténtico toque de las carreras. Es probable que ninguna pieza de ropa te acompañe tan lejos como una camiseta clástica, así que asegúrate de que la tuya refleje tu pasión y te dé un aspecto excelente.'
    }
]

export const Fetch = (items) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(items)
        }, 2000);
    })
}

export const SingleItem = (idProduct) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            let itemFind = products.find((item) => {
                return item.id === parseInt(idProduct);
              })
            if (itemFind) res(itemFind);
            else rej(new Error('Objeto no encontrado. :('))
            res([2])
        }, 2000);
    })
}