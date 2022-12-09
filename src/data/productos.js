const productos =[
    {
        key: 1,
        IDproducto: 1,
        titulo: "Cerveza Corona",
        marca: "Corona",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670505116/cursoReactJS/cervezas/Cerveza-Corona-710Cc-CERVEZA-CORONA-DESC-X710ML-1-571_knwrih.jpg",
        descripcion: "Ceveza rubia en presentación de botella de 710 cm3. Graduación alcohólica: 4.5%.",
        categoria: "cerveza",
        precio: 500,
        stock: 10
    },
    {
        key: 2,
        IDproducto: 2,
        titulo: "Cerveza st.Wendeler",
        marca: "st.Wendeler",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670505264/cursoReactJS/cervezas/Cerveza-Trigo-St--Wendeler-500-Ml-_1_buexa8.webp",
        descripcion: "Ceveza rubia de trigo en presentación de lata 473 cm3. Graduación alcohólica: 5.1%." ,
        categoria: "cerveza",
        precio: 200,
        stock: 6
    },
    {
        key: 3,
        IDproducto: 3,
        titulo: "Papas Lays Clasicas",
        marca: "Lays",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670505319/cursoReactJS/snacks/D_NQ_NP_769380-MLA44472124464_012021-O_y50l1x.jpg",
        descripcion: "Papas fritas Lays clasicas en paquete de 140 grs",
        categoria: "snack",
        precio: 400,
        stock: 8
    },
    {
        key: 4,
        IDproducto: 4,
        titulo: "Papas Lays Corte Americano",
        marca: "Lays",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670505370/cursoReactJS/snacks/front_es.12.400_izkysp.jpg",
        descripcion: "Papas fritas Lays corte americano en paquete de 38 grs",
        categoria: "snack",
        precio: 150,
        stock: 7
    },
    {
        key: 5,
        IDproducto: 5,
        titulo: "Palitos Krachitos",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670505397/cursoReactJS/snacks/D_NQ_NP_899327-MLA42141990019_062020-O_bvoniq.jpg",
        descripcion: "Palitos salados Krachitos sabor queso en paquete de 60 grs",
        categoria: "snack",
        precio: 120,
        stock: 5
    },
    {
        key: 6,
        IDproducto: 6,
        titulo: "Cerveza Patagonia",
        marca: "Patagonia",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670506149/cursoReactJS/cervezas/Cerveza-Patagonia-24-7-410cc-Sixpack-1-880091_diiiji.webp",
        descripcion: "Pack por 6. Ceveza IPA en presentación de lata de 410 cm3. Graduación alcohólica: 4.5%.",
        categoria: "cerveza",
        precio: 2500,
        stock: 10
    },
    {
        key: 7,
        IDproducto: 7,
        titulo: "Cerveza Patagonia",
        marca: "Patagonia",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670506299/cursoReactJS/cervezas/211133-800-auto_bdo447.webp",
        descripcion: "Ceveza IPA ow vera en presentación de botella de 730 cm3. Graduación alcohólica: 5.2%.",
        categoria: "cerveza",
        precio: 540,
        stock: 12
    },
    {
        key: 8,
        IDproducto: 8,
        titulo: "Cerveza Stella Artois",
        marca: "Stella Artois",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670506451/cursoReactJS/cervezas/211128-800-auto_z5qaxb.webp",
        descripcion: "Ceveza sin alcohol en presentación de botella de 330 cm3. Graduación alcohólica: 0%.",
        categoria: "cerveza",
        precio: 240,
        stock: 12
    },
    {
        key: 9,
        IDproducto: 9,
        titulo: "Cerveza Stella Artois",
        marca: "Stella Artois",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670506670/cursoReactJS/cervezas/d2b1c5_62629d96d63a4ceaaf92481bb25ef628_mv2_ubjgaj.jpg",
        descripcion: "Ceveza blanca en presentación de botella de 975 cm3. Graduación alcohólica: 5%.",
        categoria: "cerveza",
        precio: 530,
        stock: 10
    },
    {
        key: 10,
        IDproducto: 10,
        titulo: "Cerveza Heineken",
        marca: "Heineken",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670506944/cursoReactJS/cervezas/Cerveza-Heineken-Premium-473-Ml---Pack-6-1-34458_fp7b0f.webp",
        descripcion: "Pack por 6. Ceveza rubia en presentación de lata de 473 cm3. Graduación alcohólica: 5%.",
        categoria: "cerveza",
        precio: 2435,
        stock: 9
    },
    {
        key: 11,
        IDproducto: 11,
        titulo: "Cerveza Heineken",
        marca: "Heineken",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670506945/cursoReactJS/cervezas/00047101_zxe5gj.jpg",
        descripcion: "Ceveza rubia en presentación de botella de 1 litro. Graduación alcohólica: 5%.",
        categoria: "cerveza",
        precio: 560,
        stock: 15
    },
    {
        key: 12,
        IDproducto: 12,
        titulo: "Cerveza Imperial",
        marca: "Imperial",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670507336/cursoReactJS/cervezas/231324-800-auto_accfbg.png",
        descripcion: "Ceveza rubia golden en presentación de lata de 473 cm 3. Graduación alcohólica: 4.7%.",
        categoria: "cerveza",
        precio:220,
        stock: 8
    },
    {
        key: 13,
        IDproducto: 13,
        titulo: "Cerveza Imperial",
        marca: "Imperial",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670507501/cursoReactJS/cervezas/D_NQ_NP_704770-MLA51115765293_082022-O_qs1fqi.webp",
        descripcion: "Ceveza rubia APA en presentación de lata de 473 cm 3. Graduación alcohólica: 5%.",
        categoria: "cerveza",
        precio:250,
        stock: 12
    },
    {
        key: 14,
        IDproducto: 14,
        titulo: "Papas Lays CAMPESINAS",
        marca: "Lays",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670507943/cursoReactJS/snacks/layscampesinas_popup_header_image_243x389_mb1e7c.jpg",
        descripcion: "Patatas fritas con condimento preparado de vegetales y especias. Paquete de 85 grs",
        categoria: "snack",
        precio:267,
        stock: 8
    },
    {
        key: 15,
        IDproducto: 15,
        titulo: "Papas Lays VINAGRETA",
        marca: "Lays",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670508202/cursoReactJS/snacks/layssalt-amp-vinegar_popup_header_image_243x389f780b1a381a669b494aaff03007b74c4_i95qe6.jpg",
        descripcion: "Patatas fritas con sabor a salsa vinagreta. Paquete de 85 grs",
        categoria: "snack",
        precio:267,
        stock: 11
    },
    {
        key: 16,
        IDproducto: 16,
        titulo: "LAY'S STAX SOUR CREAM & ONION",
        marca: "Lays",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670508443/cursoReactJS/snacks/lays_packs_389x389px_231811b1a381a669b494aaff03007b74c4_nry1jx.png",
        descripcion: "Patatas con sabor a crema agria y cebolla. Paquete de 140 grs",
        categoria: "snack",
        precio:485,
        stock: 10
    },
    {
        key: 17,
        IDproducto: 17,
        titulo: "LAY'S STAX ORIGIANL",
        marca: "Lays",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670508666/cursoReactJS/snacks/lays_packs_389x389px_22_cc4cz4.png",
        descripcion: "Patatas con sabor original. Paquete de 140 grs",
        categoria: "snack",
        precio:485,
        stock: 13
    },
    {
        key: 18,
        IDproducto: 18,
        titulo: "Papas Krachitos",
        marca: "Krachitos",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670508774/cursoReactJS/snacks/197136-800-auto_fhmqbi.webp",
        descripcion: "Papas fritas corte americano Krachitos. Paquete de 300 grs.",
        categoria: "snack",
        precio:485,
        stock: 11
    },
    {
        key: 19,
        IDproducto: 19,
        titulo: "Maní Krachitos",
        marca: "Krachitos",
        img: "https://res.cloudinary.com/dtvv5h3mm/image/upload/v1670508923/cursoReactJS/snacks/178514-800-auto_n60wap.webp",
        descripcion: "Maní pelado frito salado Krachitos. Paquete de 120 grs.",
        categoria: "snack",
        precio:157,
        stock: 13
    },

]

export default productos;