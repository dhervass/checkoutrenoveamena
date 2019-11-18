import { AppConfig, Environment } from '@orange/core';
import { Level } from '@nsalaun/ng-logger';


export const environment: AppConfig | any = {
    production: false,
    brand: Environment.jazztel,
    navigation: {
        dynamicRouting: true,
        url: '/api/hierarchyController/v1/eCareResidencialJazztel/getPagesNavigation',
        method: 'GET',
        responseType: 'json'
    },
    owcs: {
        name: 'FrontComercialAmena'
        // name: 'FrontComercialJazztel'
    },
    locale: 'es-ES',
    logLevel: Level.LOG,
    moduleId: '2462419041660',
    demoCurrentData: {
        // apiResponse: {
        currentTarifa: {
            idTecnologia: '1-2VRLUT',
            idProductSpecification: '1-2STXMN',
            idTarifa: '1-2VTUR3',
            mobileLines: [
                {
                    /* otro operador */
                    actoComercialMovil: {
                        modalidad: 'tarjeta', //  'tarjeta' | 'contrato'
                        actoComercial: 'portabilidad'
                    }
                    /* orange */
                    // actoComercialMovil: {
                    //     modalidad: 'tarjeta', // 'tarjeta' | 'contrato'
                    //     actoComercial: 'migracion'
                    //   }
                    /* alta nueva */
                    // actoComercialMovil: {
                    //     modalidad: null,
                    //     actoComercial: 'alta'
                    // }
                }
            ]
        },
        shoppingCart: {
            tarifas: {
                idTecnologia: '1-2VRLUT',
                idProductSpecification: '1-2STXMN',
                idTarifa: '1-2VTUR3',
                name: 'Tarifa fibra + móvil 16,99€',
                description: 'Fibra simétrica + llamadas Línea móvil con llamadas ilimitadas y 5 GB a velocidad 4G',
                characteristics: {
                    highlight: [
                        {
                            name: 'Fibra',
                            ospCategory: 'highlight',
                            ospLargeDescription: '<h1>Gratis</h1>\r\n<p>Cuota de línea 21€/mes. Router gratis y sin gastos de instalación.</p>',
                            attachment: {
                                href: 'https://edicion.int.si.orange.es/catalogo/Imagenes/Tarifas/datos,3.png',
                                type: 'image',
                                ospAltText: 'Datos'
                            },
                            productSpecSubcharacteristic: [],
                            productSpecCharacteristicValue: []
                        },
                        {
                            name: 'Llamadas y SMS',
                            ospCategory: 'highlight',
                            ospLargeDescription: '<h1>ilimitadas</h1>\r\n\r\n<p>Roaming UE incluido + 60 min/mes en llamadas internacionales*</p>\r\n',
                            attachment: {
                                href: 'https://edicion.int.si.orange.es/catalogo/Imagenes/Tarifas/movil.png',
                                type: 'image',
                                ospAltText: 'Llamadas y SMS'
                            },
                            productSpecSubcharacteristic: [],
                            productSpecCharacteristicValue: []
                        },
                        {
                            name: 'Datos',
                            ospCategory: 'highlight',
                            ospLargeDescription: '<h1>5GB</h1>\r\n\r\n<p>A máxima velocidad 4G</p>\r\n<p>Roaming UE incluido</p>\r\n',
                            attachment: {
                                href: 'https://edicion.int.si.orange.es/catalogo/Imagenes/Tarifas/datos,3.png',
                                type: 'image',
                                ospAltText: 'Datos'
                            },
                            productSpecSubcharacteristic: [],
                            productSpecCharacteristicValue: []
                        }
                    ],
                    implicit: [
                        {
                            name: 'Fibra',
                            ospCategory: 'implicit',
                            ospLargeDescription: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n',
                            attachment: {
                                href: 'https://edicion.int.si.orange.es/catalogo/Imagenes/Tarifas/datos,3.png',
                                type: 'image',
                                ospAltText: 'Datos'
                            },
                            productSpecSubcharacteristic: [],
                            productSpecCharacteristicValue: []
                        },
                        {
                            name: 'Navega 5G',
                            ospCategory: 'implicit',
                            ospLargeDescription: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n',
                            attachment: {
                                href: 'https://edicion.int.si.orange.es/catalogo/Imagenes/Tarifas/datos,3.png',
                                type: 'image',
                                ospAltText: 'Datos'
                            },
                            productSpecSubcharacteristic: [],
                            productSpecCharacteristicValue: []
                        },
                        {
                            name: 'Llamadas ilimitadas',
                            ospCategory: 'implicit',
                            ospLargeDescription: '<div class="container-list"><span class="title-text">Llamadas ilimitadas. Habla tanto como necesites. <span class="title-textB">Disfruta sin l&iacute;mites. </span> </span>\r\n<ul class="list-section">\r\n\t<li>Esta tarifa incluye <span class="title-textB">llamadas ilimitadas gratuitas a m&oacute;viles y fijos nacionales.</span> Hemos establecido un m&aacute;ximo de <span class="title-textB">150</span> destinos distintos a los que se puede llamar durante un mismo mes. &iquest;Esto es mucho o poco? <span class="title-textB">Si consideramos que un cliente medio llama a 15 destinos al mes, esta tarifa lo multiplica por 10.</span>Si se supera ese m&aacute;ximo las llamadas se tarifican a 10 c&eacute;nt./min. con coste de establecimiento 18 c&eacute;ntimos.</li>\r\n\t<li>Esta tarifa es de uso exlusivo par clientes particuares en calidad de usuario final sin fines comerciales.</li>\r\n\t<li><span class="title-textB">Roaming gratis</span><span>en la Uni&oacute;n Europea.</span><span class="title-textB title-textB--link">M&aacute;s informaci&oacute;n</span></li>\r\n\t<li><span class="title-textB">Incluye adem&aacute;s 60 min./mes para llamadas internacionales y roaming,</span><span class="title-text">llamando a trav&eacute;s de la app Libon.</span><span class="title-textB title-textB--link">M&aacute;s informaci&oacute;n</span></li>\r\n</ul>\r\n</div>\r\n',
                            attachment: {
                                href: 'https://edicion.int.si.orange.es/catalogo/Imagenes/Tarifas/movil.png',
                                type: 'image',
                                ospAltText: 'Llamadas y SMS'
                            },
                            productSpecSubcharacteristic: [],
                            productSpecCharacteristicValue: []
                        },
                        {
                            name: 'SMS ilimitados',
                            ospCategory: 'implicit',
                            ospLargeDescription: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n',
                            attachment: {
                                href: 'https://edicion.int.si.orange.es/catalogo/Imagenes/Tarifas/sms.png',
                                type: 'image',
                                ospAltText: 'SMS'
                            },
                            productSpecSubcharacteristic: [],
                            productSpecCharacteristicValue: []
                        }
                    ],
                    optional: [
                        {
                            name: '+ 500MB',
                            ospCategory: 'optional',
                            description: 'Más información',
                            ospLargeDescription: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n',
                            attachment: {
                                type: 'image'
                            },
                            productSpecSubcharacteristic: [],
                            productSpecCharacteristicValue: []
                        },
                        {
                            name: '+ 50min.',
                            ospCategory: 'optional',
                            description: 'Más información',
                            ospLargeDescription: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\r\n',
                            attachment: {
                                type: 'image'
                            },
                            productSpecSubcharacteristic: [],
                            productSpecCharacteristicValue: []
                        }
                    ]
                },
                mobileLines: [
                    // {
                    //     id: '3002050',
                    //     name: 'id_huawei',
                    //     plazos: true,
                    //     brand: 'Huawei', // marca
                    //     model: 'P20 Pro Negro', // nombre
                    //     price: [
                    //         {
                    //             currencyCode: 'EUR',
                    //             dutyFreeAmount: 25.99,
                    //             taxIncludedAmount: 36.90,
                    //             tipoDePago: 'Cuota',
                    //             applicationDuration: '24'
                    //         }
                    //     ],
                    //     image: 'https://catalogo-uat.jazztel.com/catalogo/Imagenes/Dispositivos/Huawei_P20_Pro_negro_3002063_logo_Front.png',
                    // },
                    // {
                    //     id: '3002051',
                    //     name: 'id_apple',
                    //     plazos: true,
                    //     brand: 'Apple', // marca
                    //     model: 'Iphone XS Max', // nombre
                    //     price: [
                    //         {
                    //             currencyCode: 'EUR',
                    //             dutyFreeAmount: 25.99,
                    //             taxIncludedAmount: 30.24571,
                    //             tipoDePago: 'Cuota',
                    //             applicationDuration: '24'
                    //         }
                    //     ],
                    //     image: 'https://catalogo-uat.jazztel.com/catalogo/Imagenes/Dispositivos/iphone_xs_max_spacegray_3002238_Front,1.png',
                    // }
                ],
                price: 16.99,
                ospGroupName: 'Convergente',
                ospLargeDescription: '<div>Fibra sim&eacute;trica + llamadas<br />\r\nL&iacute;nea m&oacute;vil con llamadas ilimitadas y 5&nbsp;GB a velocidad 4G</div>\r\n'
            },
            dispositivos: [
                {
                    id: '1-5U7LP',
                    name: 'MOTOROLA MOTO E 4G NEGRO',
                    plazos: true,
                    brand: 'MOTOROLA',
                    model: '3001046',
                    price: [
                        {
                            tipoDePago: 'unico',
                            currencyCode: 'EUR',
                            dutyFreeAmount: 322.23,
                            taxIncludedAmount: 322.23,
                            taxRate: 0.21,
                            ospTaxRateName: 'IVA'
                        },
                    ],
                    image: 'https://catalogo.orange.es/catalogo/Imagenes/Dispositivos/Moto_E_2nd_Gen_1,0.png'
                },
                {
                    id: '3002051',
                    name: 'IPHONE XS MAX',
                    plazos: true,
                    brand: 'APPLE', // marca
                    model: '3001042', // nombre
                    price: [
                        {
                            tipoDePago: 'inicial',
                            currencyCode: 'EUR',
                            dutyFreeAmount: 32.23,
                            taxIncludedAmount: 32.23,
                            taxRate: 0.21,
                            ospTaxRateName: 'IVA'
                        },
                        {
                            tipoDePago: 'cuota',
                            currencyCode: 'EUR',
                            dutyFreeAmount: 2.89,
                            taxIncludedAmount: 2.89,
                            taxRate: 0.21,
                            ospTaxRateName: 'IVA'
                        }
                    ],
                    image: 'https://catalogo-uat.jazztel.com/catalogo/Imagenes/Dispositivos/iphone_xs_max_spacegray_3002238_Front,1.png',
                }
            ]
        },
        // currentDeviceSelected: {
        //     id: '1-D273YN',
        //     name: '1-D273YN',
        //     plazos: 'Cuota',
        //     brand: 'HUAWEI',
        //     model: 'E5172 NEGRO REFURBISH',
        //     price: [
        //         {
        //             currencyCode: 'EUR',
        //             dutyFreeAmount: 25.99,
        //             taxIncludedAmount: 30.24571,
        //             tipoDePago: 'Cuota',
        //             applicationDuration: '24'
        //         }
        //     ],
        //     image: 'https://catalogo-uat.jazztel.com/catalogo/Imagenes/Dispositivos/iphone_xs_max_spacegray_3002238_Front,1.png',
        // },
        continue: false
        // }
    },
    headers: {
        'z-app': '',
        'z-rol': '',
        'z-login': 'usuario2'
    },
    addHeaders: true,
    bootstrapModules: []
};
