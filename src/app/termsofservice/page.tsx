import { BlogContent } from '@/components/blog/blog-content'
import { formatPostDate, toMilliseconds } from '@/components/blog/utils'

const created_at = 1781598093

const info = [
    `## 1. Aceptación de los términos

Al acceder o utilizar cualquier servicio proporcionado por TriskCraft ("la Plataforma"), incluyendo nuestro sitio web, servicios de autenticación, aplicaciones, formularios de registro, servidores de juego y herramientas relacionadas, usted acepta cumplir estos Términos de Servicio.

Si no está de acuerdo con estos términos, no debe utilizar nuestros servicios.

---`,
    `## 2. Descripción del servicio

TriskCraft proporciona una plataforma comunitaria relacionada con Minecraft que puede incluir:

- Servidores de Minecraft.
- Sistemas de autenticación y vinculación de cuentas.
- Integración con Discord.
- Paneles de administración y gestión.
- Formularios de solicitud y registro.
- APIs y servicios web.
- Herramientas de respaldo, monitoreo y gestión de servidores.

Los servicios pueden modificarse, suspenderse o discontinuarse en cualquier momento.`,
    `## 3. Requisitos de elegibilidad

Para utilizar ciertos servicios, el usuario debe:

- Poseer una cuenta válida de Discord cuando sea requerida.
- Poseer una cuenta legítima de Minecraft cuando sea requerida.
- Proporcionar información veraz y actualizada.
- Cumplir con las reglas de la comunidad.

Nos reservamos el derecho de rechazar solicitudes o limitar el acceso a nuestros servicios.

---`,
    `## 4. Cuentas y autenticación

Algunos servicios requieren autenticación mediante proveedores externos como Discord o Microsoft.

Al autenticarse, el usuario autoriza a TriskCraft a acceder únicamente a la información necesaria para operar el servicio, de acuerdo con los permisos concedidos durante el proceso de autorización.

El usuario es responsable de mantener la seguridad de sus cuentas y credenciales.

---`,
    `## 5. Vinculación de cuentas de Minecraft

Al utilizar funciones que requieran verificar una cuenta de Minecraft, el usuario autoriza a TriskCraft a:

- Obtener el UUID de Minecraft.
- Obtener el nombre de usuario (nickname o gamertag).
- Verificar la propiedad de la cuenta cuando sea técnicamente posible.

Esta información se utiliza exclusivamente para:

- Identificar al jugador dentro de la plataforma.
- Gestionar permisos y roles.
- Prevenir fraudes o suplantaciones.
- Administrar servicios relacionados con Minecraft.

---`,
    `## 6. Conducta del usuario

El usuario acepta no:

- Utilizar trampas, exploits o software malicioso.
- Intentar acceder a sistemas sin autorización.
- Interferir con la operación de la plataforma.
- Suplantar la identidad de otros usuarios.
- Distribuir contenido ilegal, ofensivo o abusivo.
- Utilizar la plataforma para actividades fraudulentas.

---`,
    `## 7. Suspensión y terminación

TriskCraft podrá suspender o cancelar el acceso de cualquier usuario cuando:

- Exista incumplimiento de estos términos.
- Exista riesgo para la seguridad de la plataforma.
- Se detecten actividades fraudulentas o abusivas.
- Sea necesario para proteger a la comunidad o la infraestructura.

La suspensión puede ser temporal o permanente.

---`,
    `## 8. Propiedad intelectual

Todo el contenido, software, diseños, logotipos, código fuente, documentación y materiales proporcionados por TriskCraft son propiedad de sus respectivos titulares y están protegidos por las leyes aplicables.

El uso de la plataforma no otorga derechos de propiedad sobre dichos elementos.

---`,
    `## 9. Servicios de terceros

La plataforma puede integrarse con servicios operados por terceros, incluyendo:

- Discord
- Microsoft
- Mojang Studios
- Xbox Network

El uso de dichos servicios también está sujeto a sus propios términos y políticas.

TriskCraft no está afiliado, patrocinado ni respaldado oficialmente por Mojang Studios, Microsoft o Discord, salvo que se indique expresamente.

---
`,
    `## 10. Disponibilidad del servicio

No garantizamos que los servicios estén disponibles de forma continua, libre de errores o sin interrupciones.

Las tareas de mantenimiento, actualizaciones o fallos técnicos pueden afectar temporalmente la disponibilidad.

---`,
    `## 11. Limitación de responsabilidad

En la máxima medida permitida por la ley, TriskCraft no será responsable por:

- Pérdida de datos.
- Interrupciones del servicio.
- Pérdidas económicas.
- Daños indirectos o incidentales.
- Acciones realizadas por terceros.

El uso de la plataforma se realiza bajo responsabilidad del usuario.

---`,
    `## 12. Privacidad

La recopilación y el tratamiento de datos personales se rigen por nuestra Política de Privacidad.

Al utilizar la plataforma, el usuario acepta dicho tratamiento conforme a la política vigente.

---`,
    `## 13. Modificaciones de los términos

Podemos modificar estos Términos de Servicio en cualquier momento.

Las modificaciones entrarán en vigor una vez publicadas en la plataforma.

El uso continuado de los servicios después de dichas modificaciones constituirá aceptación de los nuevos términos.

---`,
    `## 14. Contacto

Para preguntas relacionadas con estos términos:

**TriskCraft**  
Correo electrónico: triskcraft@hotmail.com  
Sitio web: https://triskcraft.com

---`,
    `## Aviso legal

Minecraft es una marca registrada de Mojang Studios.

TriskCraft es un proyecto independiente y no está afiliado ni respaldado oficialmente por Mojang Studios, Microsoft o Discord.`,
]

export default async function PostPage() {
    return (
        <article className='relative mx-auto w-full max-w-3xl px-4 py-10'>
            <header className='mb-8 space-y-5'>
                <h1 className='text-4xl leading-tight font-bold text-white sm:text-5xl'>
                    Términos de Servicio de TriskCraft
                </h1>

                <div className='flex items-center gap-3'>
                    <div className='text-sm'>
                        <p className='text-white/55'>
                            <span className='text-triskgold/90'>
                                Última actualización ·{' '}
                            </span>
                            <time
                                dateTime={new Date(
                                    toMilliseconds(created_at),
                                ).toISOString()}
                            >
                                {formatPostDate(created_at)}
                            </time>
                        </p>
                    </div>
                </div>
            </header>

            <BlogContent
                blocks={info.map(content => ({
                    content,
                    media: [],
                    embeds: [],
                    components: [],
                    timestamp: created_at,
                }))}
            />
        </article>
    )
}
