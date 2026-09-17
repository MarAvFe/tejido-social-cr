import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import {PortalLayout, Prose, ArticleMeta, Callout, SourcesNote, renderInlineMarkdown} from '@site/src/components/IniciativasColectivas';

const rm = renderInlineMarkdown;

export default function LimonInformeEmpleos(): ReactNode {
  return (
    <PortalLayout
      title="Data centers y empleo: los números detrás de la promesa"
      description="Dossier de investigación sobre las proyecciones de empleo del proyecto Quantum AI Free Zone Campus en Limón, con datos comparativos internacionales y fuentes citadas."
      tagline="Dossier de investigación sobre el Quantum AI Free Zone Campus, Limón, Costa Rica."
      backTo={{to: '/iniciativas-colectivas/datacenters/limon', label: 'Data centers en Limón'}}>
      <ArticleMeta>
        Compara la promesa pública de "cientos de empleos" con estimaciones publicadas sobre empleo permanente,
        inversión y requisitos técnicos. Todas las cifras citan su fuente; ver las advertencias sobre los datos al
        final.
      </ArticleMeta>

      <Prose>
        <Heading as="h2">Resumen ejecutivo</Heading>
        <ul>
          <li>
            {rm(
              'Un data center de IA de 200 MW como el de Quantum generaría entre **30 y 70 empleos permanentes** una vez en operación —estimación publicada y citada por La Nación—, a pesar de una inversión de **cientos de millones a varios miles de millones de dólares**; una de las peores relaciones empleo/inversión entre grandes proyectos. Food & Water Watch encontró que los data centers de Virginia crean **un solo empleo permanente por cada $13 millones invertidos**, frente a unos **$137,000 por empleo fuera del sector —casi 100 veces menos dinero por puesto de trabajo**.',
            )}
          </li>
          <li>
            {rm(
              'La promesa de "cientos de empleos" se refiere casi siempre al **trabajo temporal de construcción** (fase que, según medios costarricenses, duraría de 2 a 4 años); la planta permanente de operación en campus hiperescalables/IA ronda **20 a 40 personas por cada 100 MW** —es decir, unas pocas docenas de empleados para una instalación de ~42 hectáreas (unos 60 campos de fútbol).',
            )}
          </li>
          <li>
            {rm(
              'Los pocos empleos permanentes son **puestos técnicos especializados** —ingenieros de red/sistemas, técnicos eléctricos/mecánicos/HVAC de infraestructura crítica, técnicos de data center, personal de seguridad, gerentes de instalaciones— que suelen exigir certificaciones (CompTIA, Cisco CCNA/CCNP, licencias de electricista/HVAC, EPA 608, NFPA 70E), títulos de ingeniería, años de experiencia previa e inglés funcional. En un cantón donde la escolaridad promedio ronda 6.5–7.7 años y solo un tercio de los adultos terminó secundaria, la mayoría de los residentes no calificaría sin años de capacitación adicional.',
            )}
          </li>
        </ul>

        <Heading as="h2">Hallazgos clave</Heading>

        <Heading as="h3">1. Relación empleo/inversión: intensivo en capital, no en mano de obra</Heading>
        <p>
          <strong>Empleos permanentes por megavatio.</strong> Los campus hiperescalables y de IA más automatizados
          operan con planillas mínimas:
        </p>
        <ul>
          <li>
            {rm(
              'El pronóstico de fuerza laboral de data centers del **Hamm Institute** (noviembre 2025) indica que la operación emplea **0.15–0.35 puestos equivalentes de tiempo completo por MW**, y que "los campus hiperescalables más automatizados (>100 MW) pueden operar con tan solo **20–30 empleados permanentes por cada 100 MW**."',
            )}
          </li>
          <li>
            {rm(
              '**Latitude Media** (mayo 2026) calculó la planilla de campus automatizados en **25 a 40 operadores por cada 100 MW**.',
            )}
          </li>
          <li>
            {rm(
              'El **Uptime Institute** reporta que los grandes campus hiperescalables necesitan solo **1–2 empleados por MW** (frente a 8–12 por MW en instalaciones pequeñas).',
            )}
          </li>
          <li>
            {rm(
              'Una regla general de la industria es **0.3–0.5 empleos permanentes por MW** (30–50 personas para un sitio de 100 MW).',
            )}
          </li>
        </ul>
        <p>
          {rm(
            '**Aplicado a los 200 MW de Quantum:** estas proporciones implican entre **40 y 80 empleos operativos permanentes** en su capacidad total. Esto coincide con la cifra que el economista y exministro **Leonardo Garnier** reportó en **La Nación (17 de septiembre de 2026)**: investigación internacional recién publicada muestra que "un data center como el que propone la empresa Quantum en Limón generaría **entre 30 y 70 empleos estables**. *No es mucho.*"',
          )}
        </p>
        <p>
          <strong>Empleos por dólar invertido —el dato que lo resume todo.</strong>
        </p>
        <ul>
          <li>
            {rm(
              '**Food & Water Watch**, "Artificial Jobs: The Illusion of Big Tech\'s Data Center Job Creation" (enero 2026): "los data centers de Virginia generan apenas **1 empleo permanente por cada $13 millones invertidos**, según datos de la Virginia Economic Development Partnership desde 1990… crear 1 empleo fuera del sector de data centers cuesta apenas **$137,000 —casi 100 veces menos inversión**." El mismo informe estima que en 2024 solo unas **23,000 personas** en todo Estados Unidos tenían un empleo permanente en data centers.',
            )}
          </li>
          <li>
            {rm(
              '**Quartz** (13 de mayo de 2026) sobre el campus de Meta de $10,000 millones en Lebanon, Indiana: "En el pico de la construcción, el proyecto sostendrá más de 4,000 empleos de construcción. Una vez operativo, el campus sostendrá unos 300 empleos. Eso equivale a **un puesto permanente por cada $33 millones invertidos**." (Como referencia, Quartz señala que las plantas de TSMC en Arizona rondan un empleo por cada $14 millones, y las plantas manufactureras tradicionales son mucho más densas en empleo aún.)',
            )}
          </li>
        </ul>
        <p>
          {rm(
            '**Lo que costaría construir el proyecto Quantum.** El ingeniero de data centers **Ronald Jiménez Lara**, CEO de Novus ERP y expresidente de CAMTIC, dijo a **La Nación** que un data center de 200 MW "requeriría una inversión de **cientos de millones de dólares**", además de grandes volúmenes de electricidad firme las 24 horas, y advirtió que si el mercado no está claro "es posible que el proyecto no pase del anuncio a la materialización." Usando el costo promedio de construcción de **$11.3 millones por MW** del **JLL Global Data Center Outlook 2026** (solo obra gris —JLL señala que el equipamiento para clientes de IA puede sumar "hasta $25 millones adicionales por MW"), un campus de 200 MW implicaría alrededor de **$2,260 millones** solo en el edificio e infraestructura base, y varios miles de millones una vez completamente equipado. Frente a 30–70 empleos permanentes, eso equivale a entre **$32 millones y $75 millones de inversión por cada empleo permanente** al costo de obra gris —y mucho más si se suma el equipamiento de IA.',
          )}
        </p>
        <p>
          <strong>Empleos de construcción vs. empleos permanentes —temporal contra para siempre.</strong> Casi todo el
          empleo anunciado con bombos y platillos es trabajo temporal de construcción:
        </p>
        <ul>
          <li>
            {rm(
              'Datos de proyectos de la industria (2025) citados por el rastreador de campañas Ban the Bots describen campus hiperescalables con "cuadrillas pico de **2,400 a 5,000 trabajadores que se van después de 6 a 18 meses**." El campus de Meta en Lebanon, Indiana sostuvo "más de 4,000 empleos de construcción" en su pico (Quartz, mayo 2026); el sitio "Stargate" de OpenAI/Oracle en Abilene, Texas, habría necesitado unos 6,400.',
            )}
          </li>
          <li>
            {rm(
              'El informe **CBRE North America Data Center Trends 2024** (citado ampliamente en la prensa especializada): un campus hiperescalable de 100 MW "típicamente emplea entre **800 y 1,200 trabajadores en el pico de actividad durante un período de construcción de 18 a 36 meses**"; uno de 50 MW necesita entre 400 y 600. El **Hamm Institute** calcula la intensidad de construcción en 0.7–2.0 trabajadores por MW frente a 0.15–0.35 puestos equivalentes por MW en operación.',
            )}
          </li>
          <li>
            {rm(
              'Para Quantum específicamente, **Diario Extra** y **DPL News** reportan que la fase de construcción duraría **de dos a cuatro años**. Cuando termina, las cuadrillas se van y solo queda el pequeño equipo permanente de operación. El estudio **JLARC de Virginia (2024)** encontró que un data center típico de 250,000 pies cuadrados tiene unos **50 trabajadores de tiempo completo, aproximadamente la mitad de ellos contratistas**.',
            )}
          </li>
        </ul>
        <p>
          {rm(
            '**Cómo se compara con otras inversiones.** El **Ohio River Valley Institute** ("Why Data Centers Will Be Economic Development Duds") llama a los data centers "la clase Olive Garden de generadores de empleo": los siete operadores más grandes (Equinix, CoreSite, CyrusOne, QTS, CenterSquare, Switch, Digital Realty) operan 811 data centers con 21,654 trabajadores —"un promedio de unos **27 por data center**… solo un poco más de lo que emplea un restaurante Olive Garden promedio." **Brookings** (Bahar & Wright, "New evidence on data center employment effects," mayo 2026) concluye: "Los data centers sí crean empleo local, aunque menos del que afirman sus defensores de la industria. Las estimaciones ingenuas que no controlan por tendencias de crecimiento preexistentes **sobreestiman el efecto por un factor de tres**." En un condado típico estudiado por Brookings, una instalación grande añadió solo entre 100 y 200 empleos.',
          )}
        </p>

        <Heading as="h3">2. Requisitos técnicos de los empleos permanentes</Heading>
        <p>
          Estos son los puestos que realmente quedan después de la construcción. Sus requisitos típicos muestran por
          qué no son "empleos para la comunidad" en una zona rural de baja escolaridad:
        </p>
        <ul>
          <li>
            {rm(
              '**Técnico de data center:** CompTIA A+/Server+/Network+ y con frecuencia Cisco CCNA; entre dos años de experiencia práctica con servidores es lo habitual; la capacitación en seguridad contra arco eléctrico **NFPA 70E** es casi universal; inglés funcional para documentación y escalamiento de incidentes.',
            )}
          </li>
          <li>
            {rm(
              '**Ingeniero de redes/sistemas:** licenciatura en ciencias de la computación, TI o ingeniería (o equivalente); **Cisco CCNP/CCNA** —CCNP Data Center espera de 3 a 5 años de experiencia— o Juniper JNCIA/JNCIP; inglés fluido, escrito y hablado; participación en turnos de guardia 24/7.',
            )}
          </li>
          <li>
            {rm(
              '**Técnico eléctrico/mecánico/HVAC de infraestructura crítica:** diploma de secundaria más **6 años o más** de experiencia con sistemas eléctricos, mecánicos y de protección contra incendios; **licencia de electricista o de HVAC** (o capacidad de obtenerla en 90 días); certificación **EPA 608** de refrigerantes; conocimiento de UPS, interruptores de transferencia automática, tableros eléctricos, generadores, chillers y unidades CRAC/CRAH; seguridad NFPA 70E.',
            )}
          </li>
          <li>
            {rm(
              '**Oficial de seguridad:** experiencia previa en seguridad o fuerzas del orden/militar, licencia de seguridad, verificación de antecedentes y pruebas de drogas; buena comunicación y conocimientos básicos de computación.',
            )}
          </li>
          <li>
            {rm(
              '**Gerente de instalaciones/operaciones:** licenciatura o maestría en ingeniería o campo técnico; **5 a 8 años o más** en operaciones de misión crítica más experiencia gerencial; conocimiento profundo de sistemas eléctricos y mecánicos.',
            )}
          </li>
        </ul>
        <p>
          {rm(
            '**La brecha de talento, según la propia industria.** El **JLL Midyear 2024 US Data Center Report** indica que "solo cerca del **15% de los candidatos cumple con los requisitos mínimos** para empleos en data centers, por lo que las posiciones tardan al menos dos meses en llenarse." La **encuesta global 2024 del Uptime Institute** encontró que el 58% de los operadores tiene dificultades para encontrar técnicos calificados. Si el 85% de los candidatos en Estados Unidos —un mercado laboral altamente calificado— no cumple con los requisitos, la implicación para un cantón rural costarricense es contundente: la mayoría de estos empleos probablemente serían ocupados por trabajadores traídos del Valle Central o del extranjero, salvo que se construya primero un programa de capacitación local de varios años.',
          )}
        </p>

        <Heading as="h3">3. Contexto sobre el Quantum AI Free Zone Campus y Limón</Heading>
        <p>
          {rm(
            '**Especificaciones del proyecto (según el sitio del desarrollador y prensa costarricense):** aproximadamente **42 hectáreas**, hasta **200 MW** de capacidad de cómputo distribuidos en **siete edificios** (DC1–DC7), construidos en **tres fases** (Fase 1 = 50 MW con dos edificios y una subestación de 230 kV; Fase 2 → 125 MW; construcción total → 200 MW). Se promociona como **el primer data center específico para IA de Centroamérica**. El requerimiento de agua declarado es de **350 litros por segundo**. Los usos incluyen entrenamiento/inferencia de IA, nube de GPU, y cómputo soberano y de alto rendimiento.',
          )}
        </p>
        <p>
          <strong>Estado y señales de alerta:</strong>
        </p>
        <ul>
          <li>
            {rm(
              'El proyecto sigue en **"fase de socialización"** —la construcción no ha comenzado—, según la alcaldesa Ana Matarrita McCalla a La Nación.',
            )}
          </li>
          <li>
            {rm(
              '**Quantum Development Inc. perdió su condición de zona franca (beneficios fiscales) en mayo de 2026**, revocada por COMEX (Resolución RES-DMR-0083-2026 del 15 de mayo de 2026; Acuerdo Ejecutivo ACU-RZF-0025-2026-COMEX publicado en La Gaceta en julio de 2026) —lo que pone en duda el marco fiscal bajo el cual se promocionó el proyecto.',
            )}
          </li>
          <li>
            {rm(
              'El sitio contendría, según datos de SNIT/IGN reportados por La Nación, **tres humedales registrados, cobertura forestal, un acuífero cercano y zonas propensas a inundación**; SETENA ya había señalado estas condiciones desde 2018–2020.',
            )}
          </li>
          <li>{rm('Representantes de la empresa **no respondieron** a las preguntas reiteradas de La Nación.')}</li>
        </ul>
        <p>
          {rm(
            '**Escala de recursos (Leonardo Garnier, La Nación, 17 de septiembre de 2026):** el consumo de 200 MW equivale **a cerca del 13.5% de toda la electricidad que consume Costa Rica hoy** —el equivalente a **entre 130,000 y 200,000 hogares**—, y la demanda de 350 l/s de agua es "prácticamente toda la captación del **Río Bananito**, una de las principales fuentes de agua de Limón," en "uno de los cantones que más sufre problemas de abastecimiento de agua potable."',
          )}
        </p>
        <p>
          <strong>Contexto laboral local —por qué "empleos para los vecinos" es una promesa difícil de cumplir:</strong>
        </p>
        <ul>
          <li>
            {rm(
              'Limón es una de las provincias más pobres de Costa Rica; **La República** reporta una pobreza de alrededor del 19.9% y en aumento, más de cinco puntos por encima del promedio nacional.',
            )}
          </li>
          <li>
            {rm(
              'El informe **Estado de la Nación 2018** encontró que la región Huetar Caribe tiene una **escolaridad promedio de apenas 7.7 años** (solo 9.3 años incluso entre jóvenes de 18–24 años), que solo el **35% de las personas de 25–39 años terminó la secundaria**, y que los empleadores "reportan deficiencias en el perfil técnico de los candidatos."',
            )}
          </li>
          <li>
            {rm(
              'El **índice de competitividad cantonal de la UCR** ubica la escolaridad promedio de los seis cantones de Limón en unos **6.5 años** (Delfino).',
            )}
          </li>
          <li>
            {rm(
              'El **desempleo regional rondaba el 10.4%** (segundo trimestre de 2019, INEC), el más alto del país, agravado por despidos por la modernización portuaria.',
            )}
          </li>
          <li>
            {rm(
              'Un especialista en TIC de la **UNED**, **Esteban Chanto Sánchez**, subrayó que la capacitación "debería empezar antes de que se anuncien las vacantes," y que el valor del proyecto debe juzgarse "por resultados concretos, no solo por la magnitud de la inversión o infraestructura anunciada." Incluso la alcaldesa reconoció que los puestos requieren "mano de obra especializada," señalando al TEC como una futura fuente de formación —una admisión implícita de que la fuerza laboral local actual no está lista.',
            )}
          </li>
        </ul>

        <Heading as="h2">Detalles</Heading>
        <p>
          {rm(
            'El punto analítico central es el desajuste entre **entradas y salidas**. Las entradas son enormes y en buena parte irreversibles: ~42 hectáreas de terreno (parte humedal y bosque), hasta 200 MW de energía firme —una porción significativa del consumo nacional—, 350 l/s de agua en un cantón con estrés hídrico, y una inversión de cientos de millones a miles de millones de dólares. La salida, en empleo local permanente, son **unas pocas docenas de empleos** —una cifra confirmada de manera independiente desde tres ángulos distintos:',
          )}
        </p>
        <ol>
          <li>{rm('**De abajo hacia arriba (empleos por MW):** 20–40 por cada 100 MW → ~40–80 para 200 MW.')}</li>
          <li>{rm('**Investigación independiente citada en La Nación:** 30–70 empleos estables.')}</li>
          <li>
            {rm('**Promedios de operadores:** ~27 empleados por data center entre los siete operadores más grandes de EE. UU. (ORVI).')}
          </li>
        </ol>
        <p>
          {rm(
            'Los tres coinciden en el mismo rango de "unas pocas decenas." Mientras tanto, la fase de construcción —la fuente de la promesa de "cientos de empleos"— es explícitamente temporal (2–4 años para Quantum) y, en los ejemplos hiperescalables, implica proporciones de pico-a-permanente del orden de **10:1 a 13:1** (por ejemplo, Meta Lebanon: ~4,000 empleos de construcción frente a ~300 permanentes).',
          )}
        </p>
        <p>
          {rm(
            'Los datos sobre requisitos cierran el argumento: incluso ese modesto número de empleos permanentes está dominado por puestos que exigen certificaciones, títulos, años de experiencia e inglés —credenciales que, según JLL, solo cumple cerca del 15% de los candidatos incluso en Estados Unidos. En una región con 6.5–7.7 años de escolaridad promedio, la captura local realista de estos empleos (sin un programa de capacitación financiado y de varios años, que hoy no existe) probablemente se limitaría a los puestos de menor credencial: algo de seguridad y mantenimiento general, más trabajo temporal de construcción.',
          )}
        </p>

        <Heading as="h2">Recomendaciones</Heading>
        <p>
          {rm(
            '**Separar construcción de empleo permanente.** Decir con claridad que los "cientos de empleos" son de construcción y desaparecen en 2–4 años, y que el equipo permanente es de unas pocas docenas de personas. La proporción de Meta (4,000 → 300) sirve de ilustración concreta.',
          )}
        </p>
        <p>
          {rm(
            '**Mostrar que los empleos no son para los vecinos.** Combinar el número de puestos con la lista de requisitos técnicos y el dato de JLL de que "solo el 15% de los candidatos califica," frente a los 6.5–7.7 años de escolaridad promedio de Limón y el ~35% de finalización de secundaria. Sin un programa de capacitación financiado y de varios años que empiece *antes* de la contratación (como pide el especialista de la UNED, y que hoy no se promete), la mayoría de estos empleos irían a personas de afuera.',
          )}
        </p>
        <p>
          <strong>Qué cambiaría este análisis</strong> (para que el argumento se mantenga justo y basado en hechos):
        </p>
        <ul>
          <li>Un compromiso vinculante y auditado de contratación y capacitación local, financiado antes de la construcción.</li>
          <li>Un piso garantizado de empleo permanente muy por encima de 30–70, por escrito.</li>
          <li>Restitución de la condición de zona franca y divulgación pública completa de la inversión y las proyecciones de empleo.</li>
          <li>Verificación independiente de que la demanda de energía y agua no se cubrirá a costa de los hogares de Limón.</li>
        </ul>
        <p>Si estas condiciones no se cumplen, la afirmación de "empleos para la comunidad" no está respaldada por la evidencia.</p>
      </Prose>

      <Callout title="Advertencias sobre los datos">
        <ul>
          <li>
            {rm(
              'La cifra de **30–70 empleos permanentes** proviene de investigación citada en una columna de opinión de Leonardo Garnier en La Nación; el estudio original no fue examinado de forma independiente aquí. Sin embargo, es consistente con otras tres estimaciones independientes (proporciones empleos/MW, promedios de operadores, datos de proyectos en EE. UU.).',
            )}
          </li>
          <li>
            {rm(
              'Las **proporciones de empleos por MW y por dólar provienen de datos de EE. UU./Reino Unido** (Hamm Institute, Uptime, Food & Water Watch, CBRE, JLL, Brookings). Las operaciones en Costa Rica podrían diferir, pero la economía de automatización subyacente es global.',
            )}
          </li>
          <li>
            {rm(
              '**Quantum no ha publicado una cifra oficial de inversión ni una proyección de empleo.** "Cientos de millones" es la estimación de un especialista (Jiménez, en La Nación); la cifra de ~$2,260 millones es un cálculo derivado usando el parámetro de JLL de $11.3M/MW de obra gris, no una divulgación específica del proyecto.',
            )}
          </li>
          <li>
            {rm(
              '**Las instalaciones de colocación (colocation) emplean a más personas por MW** que los campus hiperescalables/de IA automatizados. Quantum se promociona explícitamente como IA/hiperescalable —el tipo *menos* intensivo en mano de obra—, por lo que su planilla permanente debería esperarse en el extremo bajo.',
            )}
          </li>
          <li>
            {rm(
              'Algunas fuentes de guías laborales citadas (dcgeeks, banthebots, irecruit, weareoverwatch) son blogs de industria/activismo; donde fue posible, sus cifras se contrastaron con instituciones nombradas (JLL, CBRE, Hamm Institute, Uptime, Brookings, Food & Water Watch, Quartz, La Nación). Tratar las afirmaciones de un solo blog como indicativas, no definitivas.',
            )}
          </li>
          <li>
            {rm(
              'El proyecto sigue siendo una **propuesta** en fase temprana de "socialización"; las especificaciones (y las promesas de empleo) podrían cambiar, y el proyecto podría no llegar a concretarse.',
            )}
          </li>
        </ul>
      </Callout>

      <SourcesNote>
        Fuentes: La Nación, Diario Extra, DPL News, JLL Global Data Center Outlook 2026, Food & Water Watch, Ohio
        River Valley Institute, Brookings, Hamm Institute, Uptime Institute, Quartz, CBRE North America Data Center
        Trends 2024, JLARC (Virginia, 2024), Estado de la Nación, UCR, La República, UNED.
      </SourcesNote>
    </PortalLayout>
  );
}
