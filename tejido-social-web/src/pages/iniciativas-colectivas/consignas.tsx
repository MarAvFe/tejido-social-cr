import type {ReactNode} from 'react';
import {PortalLayout, Consigna} from '@site/src/components/IniciativasColectivas';

export default function Consignas(): ReactNode {
  return (
    <PortalLayout
      title="Consignas"
      description="Consignas y cánticos para llevar a manifestaciones y actividades de organización comunitaria, etiquetadas por tema."
      tagline="Consignas y cánticos para llevar a la calle, organizados por tema — por ahora, todas sobre centros de datos."
      backTo={{to: '/iniciativas-colectivas/', label: 'Iniciativas Colectivas'}}>
      <Consigna tags={['datacenters']}>{`Aquí llegó el pueblo
venimos a gritar
centros de datos NO punto y final

Quiero a mi Costa Rica
libre y soberana
porque vender mi tierra no me da la gana`}</Consigna>

      <Consigna tags={['datacenters']}>{`Y no no
No me da la gana
Ser una colonia norteamericana

Y si si
Si me da la gana
Ser una potencia
Latinoamericana`}</Consigna>

      <Consigna tags={['datacenters']}>{`¿Qué queremos? Y díganlo más duro
Que se escuche que este pueblo está seguro

¿Y qué queremos? Y díganlo más fuerte
¡Data centers NO! Mi tierra no se vende`}</Consigna>

      <Consigna tags={['datacenters']}>{`Alerta, alerta, alerta que camina
La lucha ecologista por América Latina

Que tiemblen que tiemblen que tiemblen los fascistas
América Latina será toda ecologista`}</Consigna>
    </PortalLayout>
  );
}
