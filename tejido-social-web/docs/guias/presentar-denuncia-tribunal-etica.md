---
source_label: "Directiva oficial"
source_note: "Código de Ética del Frente Amplio, Capítulo III (De los Procedimientos)."
source_url: "https://www.frenteamplio.org/wp-content/uploads/2025/05/Codigo-de-Etica-FA.pdf"
description: "Procedimiento paso a paso para presentar una denuncia ante el Tribunal de Ética: plazos, requisitos documentales y trámite posterior."
---

# Cómo Presentar una Denuncia ante el Tribunal de Ética

Guía práctica sobre cómo iniciar una denuncia ante el [Tribunal de Ética](../organismos/tribunal-de-etica.md) del Frente Amplio, según el [Capítulo III del Código de Ética](https://www.frenteamplio.org/wp-content/uploads/2025/05/Codigo-de-Etica-FA.pdf). Cualquier persona puede denunciar — afiliada o no.

```mermaid
flowchart TD
    Start([Querés denunciar]) --> P1{"Paso 1: ¿Dentro del plazo?"}
    P1 -- "No (y no es\ncorrupción/viol. sexual\nni impedimento justificado)" --> NoPlazo([No se puede denunciar])
    P1 -- "Sí (1 año, o sin\nprescripción si es\ncorrupción/viol. sexual)" --> P2[Paso 2: Preparar denuncia por escrito<br/>identificación + hechos + pruebas]

    P2 --> Anon{"¿Es anónima?"}
    Anon -- "Sí, y es corrupción o\nfalta a deberes públicos" --> CEN([Se traslada al Comité\nEjecutivo Nacional])
    Anon -- "Sí, y es violencia\no discriminación" --> Victima[Debe indicarse la víctima\ny cómo contactarla]
    Victima --> Informa([Tribunal le informa\nsu derecho a denunciar])
    Anon -- "Sí, otro caso" --> NoTramita([No se tramita])
    Anon -- No --> P3[Paso 3: Enviar la denuncia\nal Tribunal de Ética]

    P3 --> Revisa{"Tribunal revisa:\n¿cumple requisitos y\nno es temeraria?"}
    Revisa -- No --> Corrige[Se comunica por escrito,\nuna sola vez]
    Corrige -- "5 días hábiles\npara corregir" --> Revisa
    Revisa -- Sí --> Organo[Tribunal nombra Órgano Director\nhasta 3 integrantes, notifica a las partes]

    Organo -.->|"casos graves: corrupción,\ndelitos sexuales, electorales"| Cautelar[[Medidas cautelares posibles,\nej. suspensión temporal]]

    Organo --> Contesta["Persona denunciada contesta\ny ofrece pruebas (15 días hábiles)"]
    Contesta --> Compare[Comparecencia oral y privada:\npresentan y contrainterrogan prueba]

    Compare --> Concilia{"¿Ambas partes aceptan\nconciliación o mediación?\n(no aplica en viol. de género)"}
    Concilia -- Sí --> Acuerdo([Conciliación / mediación:\nse resuelve sin sanción])
    Concilia -- No --> Resuelve[Tribunal dicta resolución motivada\nhasta 15 días naturales tras la comparecencia]

    Resuelve --> Acuerdo2{"¿Conforme con\nla resolución?"}
    Acuerdo2 -- Sí --> Firme([Resolución firme])
    Acuerdo2 -- "No (5 días hábiles)" --> Recurso{"¿Qué recurso?"}
    Recurso -- Revocatoria --> Revoc[Resuelve el mismo\nTribunal de Ética]
    Recurso -- Apelación --> Apela[Resuelve el Tribunal\nde Alzada]
    Revoc --> FinalR([Decisión, última instancia\nsi no se apela])
    Apela --> FinalA([Decisión final,\núltima instancia])

    style NoPlazo fill:#f8d7da,stroke:#c00
    style NoTramita fill:#f8d7da,stroke:#c00
    style Acuerdo fill:#d4edda,stroke:#2a2
    style Firme fill:#d4edda,stroke:#2a2
    style FinalR fill:#d4edda,stroke:#2a2
    style FinalA fill:#d4edda,stroke:#2a2
    style Cautelar fill:#fff3cd,stroke:#c90
```

## Paso 1: Verificá el plazo

- Plazo general: **un año** desde que tuviste conocimiento de los hechos (salvo que hayas estado impedido/a por causas justificadas, en cuyo caso el plazo corre desde que cesó ese impedimento).
- Violencia contra las mujeres en la política: un año desde el último hecho de violencia.
- Actos de corrupción o violencia sexual: **no prescriben** — se pueden denunciar en cualquier momento.

## Paso 2: Preparar la denuncia por escrito

La denuncia se presenta directamente ante el Tribunal de Ética, por escrito, con al menos:

- **Identificación de las partes**: tus nombres y apellidos, tus calidades, y un medio para recibir notificaciones. Si conocés la identidad de la persona denunciada (número de cédula, forma de contactarla), incluila también.
- **Los hechos**, expuestos de forma clara y detallada.
- **Las pruebas** que ofrecés, con nombre y forma de contactar a las personas testigas si las hay. Los documentos hay que aportarlos directamente, o indicar en qué archivo u oficina del partido se encuentran si vos no los tenés.

No es obligatorio calificar qué falta del Código se configura con los hechos — eso lo determina el Tribunal, no quien denuncia. Rige el principio de informalismo: no hace falta un formato legal rígido.

**Denuncias anónimas no se tramitan**, con dos excepciones: actos de corrupción o faltas contra los deberes de la función pública (el Tribunal las traslada al Comité Ejecutivo Nacional para una investigación preliminar), y actos de violencia o discriminación (donde al menos hay que indicar quién es la presunta víctima y cómo contactarla, para que el Tribunal le informe su derecho a denunciar).

## Paso 3: Dónde enviarla

El Código de Ética ubica la sede del Tribunal de Ética en las oficinas centrales del partido, y establece que el Tribunal habilita los correos electrónicos que considere necesarios para recibir notificaciones — pero el propio Código no fija una dirección de correo o canal único y público para presentar denuncias. **Esta guía no puede indicar todavía un correo o formulario específico** porque esa información no está confirmada; hasta que se verifique, la vía más segura es consultar directamente con la Secretaría General o el CEC del cantón sobre el canal vigente.

## Qué pasa después de enviarla

1. El Tribunal revisa que la denuncia cumpla los requisitos del Paso 2 y que no sea manifiestamente temeraria. Si falta algo, te lo comunica por escrito una sola vez, con **cinco días hábiles** para corregirlo.
2. Si procede, el Tribunal nombra un **Órgano Director** (hasta tres integrantes) que investiga los hechos, y notifica a ambas partes.
3. La persona denunciada tiene **quince días hábiles** para contestar y ofrecer sus propias pruebas.
4. Se realiza una **comparecencia oral y privada** donde ambas partes pueden presentar y contrainterrogar prueba, incluida testimonial.
5. El Tribunal dicta una resolución motivada, en un plazo de hasta **quince días naturales** tras la comparecencia.

En casos graves (p. ej. corrupción, delitos sexuales, delitos electorales con requerimiento de citación a juicio), el Tribunal puede dictar medidas cautelares, incluida la suspensión temporal de un cargo, mientras el proceso avanza.

## Si no estás de acuerdo con la resolución

Existen dos recursos posibles, dentro de los **cinco días hábiles** siguientes a la notificación:

- **Recurso de revocatoria**, que resuelve el mismo Tribunal de Ética.
- **Recurso de apelación**, que resuelve el Tribunal de Alzada en última instancia.

## Alternativas antes de llegar a sanción

Si ambas partes lo aceptan, el Tribunal puede facilitar una **conciliación** o una **mediación** en lugar de resolver por sanción — excepto en casos de violencia de género o violencia contra las mujeres en la política, donde la conciliación no procede.

## Estado de esta guía

_Falta confirmar el canal oficial de recepción de denuncias (correo electrónico o formulario específico) — el Código de Ética no lo fija de forma pública. Actualizar esta guía en cuanto se confirme esa información._

## Ver también

- **[Tribunal de Ética](../organismos/tribunal-de-etica.md)** — quién lo integra y su autonomía.
- **[Código de Ética del Frente Amplio (Resumen)](../principios/codigo-de-etica.md)** — el marco completo: las sanciones posibles y sus causales.
- **[Sanciones Disciplinarias y Revocatoria de Mandato](../organismos/sanciones-disciplinarias.md)** — el marco estatutario detrás de este procedimiento.
