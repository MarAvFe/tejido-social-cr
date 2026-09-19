import type {ReactNode} from 'react';
import Heading from '@theme/Heading';
import {PortalLayout, Prose, ArticleMeta, Callout, SourcesNote, renderInlineMarkdown} from '@site/src/components/IniciativasColectivas';

const rm = renderInlineMarkdown;

const SOURCES = {
  laNacion:
    'https://www.nacion.com/el-pais/empresa-impulsora-de-data-center-de-ia-en-limon/7VEXXGQXPZH7XNQ3ONSRMMK3YU/story/',
  wjla: 'https://wjla.com/news/local/maryland-medical-marijuana-panel-unaware-of-eeoc-investigation-of-licensee',
  quantumContact: 'https://quantumfz.com/contact',
  podrogSite: 'http://davidpodrog.com/',
  chaconLinkedin: 'https://www.linkedin.com/in/jorge-chacon-villalobos-21855199/',
};

function ExternalLink({href, children}: {href: string; children: ReactNode}): ReactNode {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default function LimonQuantumQuienesSon(): ReactNode {
  return (
    <PortalLayout
      title="Quantum ya no es zona franca — pero lo sigue vendiendo así"
      description="Investigación sobre quién está detrás del proyecto Quantum AI Free Zone Campus en Limón: la pérdida de su régimen de zona franca ante COMEX, las dudas sobre el aval ambiental, y lo que se sabe públicamente de sus responsables."
      tagline="Quién promueve el Quantum AI Free Zone Campus, Limón, Costa Rica, y qué no cuadra en cómo se está vendiendo."
      backTo={{to: '/iniciativas-colectivas/datacenters/limon', label: 'Data centers en Limón'}}>
      <ArticleMeta>
        Investigación sobre la empresa y las personas detrás del proyecto Quantum en Limón, a partir de fuentes
        públicas: La Nación, un despacho de WJLA/AP de 2017, y los propios sitios web de la empresa y de su
        promotor. Complementa el{' '}
        <a href="/iniciativas-colectivas/datacenters/limon-informe-empleos">informe sobre empleo e inversión</a>.
      </ArticleMeta>

      <Prose>
        <Heading as="h2">Resumen ejecutivo</Heading>
        <ul>
          <li>
            {rm(
              'Quantum Development Inc. **perdió su régimen de zona franca** el 15 de mayo de 2026 (resolución COMEX RES-DMR-0083-2026), formalizado en el Acuerdo Ejecutivo ACU-RZF-0025-2026-COMEX, publicado en La Gaceta el 20 de julio de 2026.',
            )}{' '}
            {rm(
              '**A pesar de eso, el sitio de la empresa sigue anunciando exoneración del impuesto sobre la renta, importación de tecnología libre de aranceles y exención de IVA** bajo régimen de zona franca —según confirmó',
            )}{' '}
            <ExternalLink href={SOURCES.laNacion}>La Nación</ExternalLink>
            {rm('—, con una única nota al pie de que estos beneficios son "referenciales" y deben verificarse con asesoría legal costarricense.')}
          </li>
          <li>
            {rm('La **alcaldesa de Limón, Ana Matarrita McCalla**, dijo a')}{' '}
            <ExternalLink href={SOURCES.laNacion}>La Nación</ExternalLink>
            {rm(
              ' que no sabía que el proyecto se estaba desarrollando y que la empresa **no reveló la pérdida de la zona franca** durante sus presentaciones ante la municipalidad.',
            )}
          </li>
          <li>
            {rm('La municipalidad afirmó que el proyecto contaba con aval de **SETENA**, pero, según')}{' '}
            <ExternalLink href={SOURCES.laNacion}>La Nación</ExternalLink>
            {rm(
              ', el sitio de la propia SETENA **no muestra ningún proyecto registrado** bajo el nombre o la cédula jurídica de la empresa.',
            )}
          </li>
          <li>
            {rm(
              'Detrás de un proyecto de 200 MW y presunta inversión de cientos de millones de dólares **no hay un consorcio de infraestructura internacional**: los dos únicos contactos de venta que la propia empresa publica son un desarrollador inmobiliario estadounidense y un abogado/notario costarricense.',
            )}
          </li>
          <li>
            {rm(
              'Ese desarrollador, **David Podrog**, se describe a sí mismo como "Entrepreneur & Real Estate Developer" —no como ingeniero ni especialista en infraestructura de datos o inteligencia artificial—. En 2017, un despacho de',
            )}{' '}
            <ExternalLink href={SOURCES.wjla}>WJLA/AP</ExternalLink>
            {rm(
              ' reveló que **no había informado a la Comisión de Cannabis Medicinal de Maryland** sobre una investigación federal de la EEOC, abierta desde 2014, por presuntas prácticas discriminatorias por origen nacional en un negocio de lavado de autos que operaba previamente.',
            )}
          </li>
        </ul>

        <Heading as="h2">Hallazgos</Heading>

        <Heading as="h3">1. La zona franca que ya no existe, pero se sigue vendiendo</Heading>
        <p>
          {rm(
            'Quantum Development Inc. obtuvo su condición de zona franca como **administrador de parque** en diciembre de 2018 (Acuerdo Ejecutivo 356-2018). El **15 de mayo de 2026**, COMEX se la revocó mediante la resolución **RES-DMR-0083-2026**; el acuerdo ejecutivo que lo formaliza, **ACU-RZF-0025-2026-COMEX**, se publicó en **La Gaceta el 20 de julio de 2026**. Ni la resolución ni el acuerdo detallan públicamente el motivo de la revocación.',
          )}
        </p>
        <p>
          Pese a eso, la <ExternalLink href={SOURCES.quantumContact}>página de contacto del proyecto</ExternalLink>{' '}
          {rm(
            '(quantumfz.com) describe la iniciativa como "a **200 MW AI infrastructure platform** anchored by utility-backed deliverable power, **Free Zone economics**, and Costa Rica\'s renewable-energy advantage" —es decir, sigue vendiendo el beneficio fiscal como parte central de la propuesta a inversionistas, meses después de perderlo.',
          )}{' '}
          <ExternalLink href={SOURCES.laNacion}>
            <strong>La Nación confirmó directamente</strong>
          </ExternalLink>
          {rm(
            ' que el sitio sigue anunciando exoneración de renta, importación de tecnología libre de aranceles y exención de IVA bajo el régimen; la única salvedad visible es una nota de que esos beneficios son "referenciales" y deben confirmarse con asesoría legal costarricense.',
          )}
        </p>
        <p>
          {rm(
            'Esto importa porque el régimen de zona franca —no la ubicación, no el clima, no la "ventaja energética renovable"— es buena parte del argumento de venta a inversionistas extranjeros. Si el beneficio ya no existe y se sigue anunciando como vigente, cualquier inversionista que decida entrar al proyecto sobre esa base está siendo informado incorrectamente sobre las condiciones fiscales reales del negocio.',
          )}
        </p>

        <Heading as="h3">2. Un aval ambiental que la municipalidad da por hecho, pero que no aparece registrado</Heading>
        <ul>
          <li>
            {rm('La alcaldesa **Ana Matarrita McCalla** declaró a')}{' '}
            <ExternalLink href={SOURCES.laNacion}>La Nación</ExternalLink>
            {rm(
              ': "No tenía la menor idea de que el proyecto se fuera a desarrollar; no sabía que había una iniciativa de ese tipo en Limón" —y confirmó que la empresa **no reveló la pérdida de la zona franca** en sus presentaciones ante la municipalidad.',
            )}
          </li>
          <li>
            {rm('La municipalidad sostuvo que el proyecto contaba con aprobación de **SETENA**, pero, según')}{' '}
            <ExternalLink href={SOURCES.laNacion}>La Nación</ExternalLink>
            {rm(', el sitio de SETENA **no registra ningún expediente** a nombre de la empresa ni bajo su cédula jurídica.')}
          </li>
        </ul>
        <p>
          El detalle sobre humedales, cobertura forestal, acuífero cercano y consumo de agua equivalente a casi toda
          la captación del Río Bananito ya está documentado en el{' '}
          <a href="/iniciativas-colectivas/datacenters/limon-informe-empleos">informe sobre empleo e inversión</a>.
          Lo nuevo aquí es que el propio trámite institucional —permiso ambiental, conocimiento municipal— parece
          tan poco sólido como el fiscal.
        </p>

        <Heading as="h3">3. ¿Quién vende el proyecto?</Heading>
        <p>
          {rm('Un proyecto de 200 MW —con una inversión que, según un especialista consultado por')}{' '}
          <ExternalLink href={SOURCES.laNacion}>La Nación</ExternalLink>
          {rm(
            ', "requeriría cientos de millones de dólares"— debería tener detrás un consorcio de infraestructura con trayectoria verificable en construcción, ingeniería y financiamiento de este tipo de obra. La',
          )}{' '}
          <ExternalLink href={SOURCES.quantumContact}>página de contacto de Quantum</ExternalLink>
          {rm(' (quantumfz.com/contact) publica en cambio exactamente dos personas de contacto para todo el proyecto:')}
        </p>
        <ul>
          <li>
            {rm(
              '**David Podrog** — "Sales & Leasing, USA". Contacto publicado por la propia empresa: david@podrog.com, teléfono 443-254-7676, Skype davidpodrog.',
            )}
          </li>
          <li>
            {rm(
              '**Jorge Chacón Villalobos** — "Sales & Leasing, Costa Rica". Contacto publicado por la propia empresa: jorge@quantumfz.com, teléfono +506 7014-4748. Según su',
            )}{' '}
            <ExternalLink href={SOURCES.chaconLinkedin}>perfil de LinkedIn</ExternalLink>
            {rm(', es abogado y notario público, con experiencia en el bufete BLC & CEN.')}
          </li>
        </ul>
        <p>
          {rm(
            '**David Podrog no se presenta a sí mismo como ingeniero ni como experto en infraestructura de datos o inteligencia artificial.** Su propio',
          )}{' '}
          <ExternalLink href={SOURCES.podrogSite}>sitio</ExternalLink>
          {rm(
            ' (davidpodrog.com) lo describe como "Entrepreneur & Real Estate Developer" y dice literalmente que "trabajar directamente con arquitectos e ingenieros" es lo que a él le resulta interesante —es decir, se presenta como quien contrata a esos perfiles, no como quien los reemplaza. El mismo sitio dedica una sección a que asiste a charlas motivacionales y aspira a dar sus propias conferencias ("Motivational Speaking"). Es, por su propia descripción, un desarrollador inmobiliario y emprendedor en serie, no un operador de infraestructura crítica.',
          )}
        </p>
        <p>
          {rm('En **2017**, un despacho de')}{' '}
          <ExternalLink href={SOURCES.wjla}>
            <strong>WJLA/AP</strong>
          </ExternalLink>
          {rm(
            ' reportó que la Comisión de Cannabis Medicinal de Maryland desconocía, al otorgarle una licencia de dispensario a Podrog, que existía una **investigación federal de la EEOC** (Comisión de Igualdad de Oportunidades en el Empleo), abierta desde **2014**, sobre presuntas prácticas discriminatorias por origen nacional en un negocio de lavado de autos que Podrog operaba previamente. Según ese reporte, la comisión estatal indicó que la ley no lo obligaba a revelar la investigación por ser dueño único del negocio, y que la licencia sería revisada de nuevo; no se encontró un registro público posterior sobre cómo se resolvió esa investigación, ni declaraciones públicas de Podrog al respecto.',
          )}
        </p>

        <Heading as="h3">4. Depender de la red eléctrica de Costa Rica, no de generación propia</Heading>
        <p>
          El propio material de venta ("Costa Rica's renewable-energy advantage") deja claro que el proyecto no trae
          su propia generación: se apoya en la red eléctrica nacional. Como ya documenta el{' '}
          <a href="/iniciativas-colectivas/datacenters/limon-informe-empleos">informe sobre empleo e inversión</a>,
          {' '}
          {rm(
            '200 MW equivalen a cerca del **13.5% de todo el consumo eléctrico de Costa Rica**, y los 350 l/s de agua declarados representan prácticamente toda la captación del Río Bananito, en uno de los cantones con más problemas de abastecimiento de agua potable del país. "Ventaja renovable" no significa que el proyecto genere su propia energía limpia: significa que planea consumir la que ya produce el país.',
          )}
        </p>

        <Heading as="h2">Lo que esto sugiere</Heading>
        <p>
          {rm(
            'Ninguno de estos hechos, por separado, prueba una intención fraudulenta. Pero juntos dibujan un patrón: una empresa que perdió el beneficio fiscal que es el corazón de su propuesta de venta y lo sigue anunciando como vigente; un aval ambiental que la municipalidad da por hecho pero que no aparece registrado donde debería estar; y, al frente del proyecto, no un consorcio de ingeniería con trayectoria verificable, sino dos personas —un desarrollador inmobiliario sin experiencia declarada en infraestructura de datos, con un antecedente de no divulgar una investigación federal relevante en otro trámite regulatorio, y un abogado/notario local—.',
          )}
        </p>
        <p>
          {rm(
            'A partir de esto, esta investigación **plantea como hipótesis** —no como hecho probado— que Quantum opera más como un vehículo para atraer capital de inversión sobre una narrativa (zona franca vigente, primer data center "ambiental" del Caribe, respaldo institucional) que como un desarrollador con capacidad real de construir y operar 200 MW de cómputo. Si los inversionistas objetivo se enteraran, antes de comprometer capital, de que la zona franca ya no existe, es razonable esperar que la valoración del terreno y del proyecto se vea afectada. Comunicar ese hecho —verificable, público y ya reportado por La Nación— con el mayor alcance posible, incluyendo en inglés para audiencias inversionistas fuera de Costa Rica, es precisamente lo que puede exponer esa narrativa a quienes todavía no la han contrastado.',
          )}
        </p>
      </Prose>

      <Callout title="Advertencias sobre los datos">
        <ul>
          <li>
            {rm('Los hechos institucionales centrales —fecha y número de la revocación de zona franca, la ausencia de registro en SETENA, y la declaración de la alcaldesa— están **confirmados de forma independiente por')}{' '}
            <ExternalLink href={SOURCES.laNacion}>
              <strong>La Nación</strong>
            </ExternalLink>
            {rm('**, no solo por el sitio de la empresa o por investigación propia.')}
          </li>
          <li>
            {rm('La investigación de la EEOC descrita en el despacho de')}{' '}
            <ExternalLink href={SOURCES.wjla}>WJLA/AP de 2017</ExternalLink>
            {rm(
              ' era, al momento de esa publicación, **una investigación y una alegación**, no una sentencia ni una determinación de culpabilidad. No se localizó un registro público de cómo concluyó ese caso.',
            )}
          </li>
          <li>
            {rm('La condición de abogado/notario de Jorge Chacón Villalobos proviene de su propio')}{' '}
            <ExternalLink href={SOURCES.chaconLinkedin}>perfil de LinkedIn</ExternalLink>
            {rm(
              '; no se verificó de forma independiente contra el registro del Colegio de Abogados y Abogadas de Costa Rica.',
            )}
          </li>
          <li>
            {rm(
              'No se identificó, en fuentes públicas, la estructura societaria completa de Quantum Development Inc. (accionistas, jurisdicción de constitución, financiamiento). La sección "Lo que esto sugiere" es análisis e hipótesis explícitamente señalada como tal, no un hecho documentado.',
            )}
          </li>
          <li>
            {rm(
              'La evaluación de que el sitio web del proyecto "está hecho a la carrera" es una apreciación cualitativa de quien investigó, no un análisis forense del sitio.',
            )}
          </li>
        </ul>
      </Callout>

      <SourcesNote>
        Fuentes:{' '}
        <ExternalLink href={SOURCES.laNacion}>
          La Nación ("Empresa impulsora de 'data center' de IA en Limón perdió régimen de zona franca desde mayo")
        </ExternalLink>
        , <ExternalLink href={SOURCES.wjla}>WJLA/AP (2017, investigación de la EEOC)</ExternalLink>,{' '}
        <ExternalLink href={SOURCES.quantumContact}>quantumfz.com/contact</ExternalLink>,{' '}
        <ExternalLink href={SOURCES.podrogSite}>davidpodrog.com</ExternalLink>,{' '}
        <ExternalLink href={SOURCES.chaconLinkedin}>LinkedIn de Jorge Chacón Villalobos</ExternalLink>, La Gaceta
        (Acuerdo Ejecutivo ACU-RZF-0025-2026-COMEX). Ver también el{' '}
        <a href="/iniciativas-colectivas/datacenters/limon-informe-empleos">informe sobre empleo e inversión</a>.
      </SourcesNote>
    </PortalLayout>
  );
}
