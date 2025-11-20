var config = {
    style: 'mapbox://styles/florceballoschimenez/cmi687vb2003j01s75kp5e5ub',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZmxvcmNlYmFsbG9zY2hpbWVuZXoiLCJhIjoiY21pMXh3Z2MyMWQwNzJqc2ZlYzBuaXhvYyJ9.FmvaC2g3MMBa9ZX61WUo3w',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Acceso a la Interrupción Voluntaria del Embarazo en Argentina (2020–2024)',
    subtitle: 'Un análisis territorial',
    byline: 'De Florencia Ceballos Chimenez',
    footer: 'Fuentes: Ministerio de Salud (pedido de información pública), Instituto Geográfico Nacional <br> Creéditos del template: <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    chapters: [
        {
            id: 'legalizacion',
            alignment: 'left',
            hidden: false,
            title: 'Legalización de la Interrupción Voluntaria del Embarazo',
            image: './assets/portada.jpg',
            description: 'Durante décadas, el debate sobre el acceso al aborto en Argentina estuvo marcado por tensiones políticas, desigualdades territoriales y profundas brechas sociales. En diciembre del 2020, la sanción de la Ley 27.610 marcó un punto de inflexión histórico. Por primera vez, el país reconoció el derecho al acceso a la Interrupción Voluntaria del Embarazo (IVE) dentro de las primeras 14 semanas y garantizó la Interrupción Legal del Embarazo (ILE) en los casos previstos por el Código Penal. Sin embargo, la aprobación de la ley no eliminó automáticamente las desigualdades geográficas. La distancia a un centro de salud, la disponibilidad de profesionales e insumos médicos, la presencia de objeción de conciencia, entre otros, configuran un mapa desigual, donde las posibilidades de acceder a un derecho pueden depender del código postal.',
            location: {
                center: [-58.39161, -34.60999], 
                zoom: 15.88,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'abortos',
            alignment: 'right',
            hidden: false,
            title: 'Cantidad de abortos por provincias',
            image: './assets/abortosporanio.jpg',
            description: 'Los datos muestran un crecimiento sostenido en casi todas las provincias argentinas, con estabilizaciones o descensos parciales en algunas jurisdicciones a partir de 2023. También se observa una fuerte disparidad territorial: provincias con sistemas sanitarios más robustos o con mayor disponibilidad de servicios registran cifras más altas.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sociodemograficos',
            alignment: 'left',
            hidden: false,
            title: 'Datos sociodemográficos',
            image: './assets/poblacion.png',
            description: 'Entre las provincias donde menos abortos se notificaron se encuentran Chaco y Misiones, con una tasa de 9,1 y 10,1 cada mil mujeres respectivamente. Respecto a números absolutos, en primer lugar se ubica la Provincia de Buenos Aires. Esto se debe a que se trata de la jurisdicción con mayor cantidad de población de todo el país. Es importante aclarar que las estadísticas públicas sobre los abortos realizados en el país se basan en la cantidad de interrupciones informadas por los centros de salud públicos de cada provincia. Sin embargo, estos indicadores no incluyen las prácticas realizadas en el ámbito de la seguridad social (obras sociales) y en el sector privado (empresas de medicina prepaga).Diversas organizaciones, como el Centro de Estudios de Estado y Sociedad (CEDES) y Amnistía Internacional Argentina, advirtieron sobre la falta de información pública que releve, a nivel nacional, cuántas IVE fueron garantizadas en el sector privado y las dificultades de cumplimiento del acceso a la práctica entre obras sociales y prepagas.',
            location: {
                center: [-65.84027, -37.04805],
                zoom: 3.18,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'vivienda',
            alignment: 'right',
            hidden: false,
            title: 'Vivienda',
            image: './assets/vivienda.png',
            description: 'Para comprender en profundidad las desigualdades entre provincias, es necesario revisar primero las condiciones de vida de sus habitantes. En términos habitacionales, la Ciudad Autónoma de Buenos Aires presenta el mayor porcentaje de viviendas propias con escritura (48,35% del total de viviendas de la provincia), aunque también concentra la proporción más alta de viviendas alquiladas (35,46%). En contraste, Santiago del Estero es la provincia con más hogares propios sin documentación (26,06%) y San Juan encabeza el porcentaje de viviendas prestadas (13,2%).  En cuanto a la calidad constructiva, Jujuy posee la menor proporción de viviendas con cielorraso (39%), mientras que La Pampa y Santa Cruz registran los valores más altos (85%). Respecto al tipo de piso, Formosa muestra el porcentaje más bajo de viviendas con revestimiento (58%), y la Ciudad Autónoma de Buenos Aires el más elevado (96%).',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         
          
{
            id: 'educacion',
            alignment: 'left',
            hidden: false,
            title: 'Educación',
            image: './assets/educacion.jpg',
            description: 'Las provincias con mayor porcentaje de su población que no asistió nunca a una institución educativa son Formosa (8,17%), Misiones (8,15%) y Chaco (7,97%).',
            location: {
                center: [-68.73058, -36.88078],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
         {
            id: 'salud',
            alignment: 'fully',
            hidden: false,
            title: 'Salud',
            image: './assets/salud.png',
            description: 'Respecto al sistema de salud, CABA (81,53%), Santa Cruz (74,15%) y Tierra del Fuego (73%) son las provincias donde el mayor porcentaje de su población tiene una cobertura médica (obra social o prepaga). Formosa (39,46%) y Santiago del Estero (39,88%) son las que registran la tasa más baja. Formosa y Chaco tienen las tasas más altas de población sin ningún tipo de cobertura médica. En el mapa se pueden visualizar con puntos azules la cantidad de centros de salud de cada región.',
            location: {
                center: [-66.32074, -36.53887],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'embarazo adolescente',
            alignment: 'fully',
            hidden: false,
            title: 'Embarazo adolescente',
            image: './assets/embarazo adolescente.png',
            description: 'Desde la legalización de la Interrupción Voluntaria del Embarazo en 2020, se puede observar un claro descenso de la tasa de embarazos adolescentes en las distintas provincias.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: -43
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'problemas',
            alignment: 'left',
            hidden: false,
            title: 'Problemas actuales',
            image: './assets/problemas.jpg',
            description: 'En la actualidad, con un presidente que se manifiesta públicamente en contra del derecho al aborto, la implementación efectiva de la ley que garantiza la IVE enfrenta nuevas incertidumbres. Desde el Estado se han aplicado recortes a políticas públicas vinculadas con los derechos sexuales y reproductivos, lo que afecta la provisión de insumos y el acceso equitativo a la atención. Tampoco existe información pública actualizada sobre insumos, profesionales objetores de conciencia o datos abiertos disponibles para la ciudadanía, salvo cuando se solicitan mediante pedidos formales al Ministerio de Salud. ',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'problemas 2',
            alignment: 'right',
            hidden: false,
            title: 'ELA',
            image: './assets/ela.jpg',
            description: 'Según el Equipo Latinoamericano de Justicia y Género (ELA), en provincias como Misiones y Corrientes persisten demoras en los procesos de IVE. La organización también señala falta de claridad en las rutas de atención, uso inadecuado de la objeción de conciencia, desigualdades territoriales en el acceso y escasa información sobre métodos anticonceptivos, entre otros obstáculos. ',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'problemas 3',
            alignment: 'fully',
            hidden: false,
            title: 'CDD',
            image: './assets/cdd.jpg',
            description: 'El área de Salud de Católicas por el Derecho a Decidir (CDD) impulsa acciones como el programa “Rodando derechos”, que trabaja junto a gobiernos locales en cuatro provincias: La Rioja, Catamarca, Santiago del Estero y Córdoba. Además, desarrolla monitoreos, capacitaciones y fortalecimiento de equipos de salud en otras jurisdicciones, articulando con organizaciones y áreas sanitarias que garantizan el acceso a la interrupción voluntaria y legal del embarazo, así como a la salud sexual y reproductiva. Según explica Ana Morillo, coordinadora del área, persiste una falta de provisión regular de insumos por parte del Estado nacional, lo que profundiza las desigualdades territoriales y, en muchos casos, obliga a las personas a comprar su propia medicación o a ser derivadas a otras provincias para acceder a la atención necesaria.',
            location: {
                center: [-65.13219, -30.16211],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'cordoba',
            alignment: 'right',
            hidden: false,
            title: 'Córdoba',
            image: './assets/cordoba.jpg',
            description: 'Morillo destaca el problema en la capital cordobesa. Declara “Me animo a decir que en Córdoba capital se ha disminuido la atención pública de abortos y aumentó la de métodos anticonceptivos de larga duración. Para mí, está totalmente vinculado, porque el acompañamiento nunca es trabajar sobre aborto solo. Siempre lo dijimos, se trata de mejorar la accesibilidad en métodos anticonceptivos, que por supuesto disminuyen el riesgo de un embarazo no deseado”. Católicas por el Derecho a Decidir refuerza que el patrón de la desigualdad territorial se replica en la provincia y en las comunidades pequeñas se profundizan las problemáticas: “Siempre en los lugares más alejados de los grandes centros urbanos el acceso es mucho más limitado y, en Córdoba, sucede lo mismo. Y la realidad varía también de acuerdo a las características de los territorios. En zonas que quizás son más conservadoras, el acceso también se ve más limitado. Uno de los grandes problemas en las localidades pequeñas tiene que ver con el temor de las usuarias a que esa consulta o esa práctica médica sea conocida por el resto de la comunidad. Y lo mismo se puede decir con el acceso a la información. Si bien podría circular de manera mucho más rápida porque son menos personas, es más limitado porque hay cierto temor a decir que esto es legal”, explica la coordinadora de salud.',
            location: {
                center: [-64.18581, -31.40290],
                zoom: 6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
{
            id: 'conclusion',
            alignment: 'fully',
            hidden: false,
            title: 'Conclusión',
            image: './assets/conclusion.jpg',
            description: 'En conjunto, los datos evidencian que, aunque la legalización mejoró el acceso, todavía queda un largo recorrido para que su implementación efectiva en todo el territorio, lo que requiere un compromiso estatal en todos los niveles.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 7,
                pitch: 20,
                bearing: 5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
