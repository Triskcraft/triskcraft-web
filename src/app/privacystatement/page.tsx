import { BlogContent } from '@/components/blog/blog-content'
import { formatPostDate, toMilliseconds } from '@/components/blog/utils'

const created_at = 1781598093

const info = [
    `## 1. Introducción

En TriskCraft respetamos la privacidad de nuestros usuarios y nos comprometemos a proteger la información que recopilamos.

Esta Política de Privacidad describe qué información recopilamos, cómo la utilizamos, cómo la almacenamos y los derechos que tienen los usuarios respecto a sus datos.

Al utilizar nuestros servicios, usted acepta las prácticas descritas en esta política.

---

## 2. Información que recopilamos

Dependiendo de los servicios utilizados, podemos recopilar la siguiente información:

### Información de cuenta

- Identificador único de usuario.
- Nombre de usuario.
- Imagen de perfil.

### Información de Minecraft

Cuando el usuario autoriza la vinculación de su cuenta de Minecraft o Microsoft, podemos recopilar:

- UUID de Minecraft.
- Nombre de usuario de Minecraft.

Información necesaria para verificar la propiedad de la cuenta.

### Información de Discord

Cuando el usuario inicia sesión mediante Discord, podemos recopilar:

- ID de usuario de Discord.
- Nombre de usuario.
- Avatar.
- Información básica del perfil autorizada mediante OAuth.

### Información técnica

Podemos recopilar automáticamente:

- Fechas y horas de acceso.
- Registros de errores y eventos de seguridad.

### Información proporcionada por el usuario

- Formularios de solicitud.
- Mensajes enviados mediante la plataforma.
- Información voluntariamente proporcionada por el usuario.

---

## 3. Cómo utilizamos la información

Utilizamos la información recopilada para:

- Crear y administrar cuentas.
- Verificar la identidad de los usuarios.
- Vincular cuentas de Discord y Minecraft.
- Proporcionar acceso a los servicios.
- Gestionar permisos y roles.
- Mantener la seguridad de la plataforma.
- Detectar fraudes y abusos.
- Resolver problemas técnicos.
- Mejorar nuestros servicios.

No vendemos información personal a terceros.

---

## 4. Bases para el tratamiento de datos

Procesamos la información únicamente cuando existe una razón legítima para hacerlo, incluyendo:

- La prestación de nuestros servicios.
- El cumplimiento de obligaciones legales.
- La protección de la seguridad de la plataforma.
- El consentimiento otorgado por el usuario.

---

## 5. Servicios de terceros

Nuestros servicios pueden utilizar proveedores externos para autenticación y funcionamiento de la plataforma.

Estos proveedores pueden incluir:

- Discord
- Microsoft
- Mojang Studios
- Xbox Network

La información obtenida a través de estos proveedores está sujeta también a sus respectivas políticas de privacidad.

---

## 6. OAuth y permisos

Cuando el usuario autoriza una aplicación o inicia sesión mediante OAuth, TriskCraft únicamente solicitará los permisos necesarios para proporcionar el servicio solicitado.

Los datos obtenidos mediante OAuth se utilizarán exclusivamente para:

- Autenticación.
- Identificación del usuario.
- Vinculación de cuentas.
- Gestión de permisos y acceso.

No utilizamos información obtenida mediante OAuth para publicidad ni para la venta de datos.

---

## 7. Compartición de información

Podemos compartir información únicamente en los siguientes casos:

### Proveedores de servicios

Con proveedores que nos ayudan a operar la plataforma.

### Requerimientos legales

Cuando sea requerido por ley, orden judicial o autoridad competente.

### Protección de derechos

Cuando sea necesario para proteger:

- La seguridad de los usuarios.
- La integridad de la plataforma.
- Nuestros derechos legales.

---

## 8. Retención de datos

Conservamos la información únicamente durante el tiempo necesario para:

- Proporcionar los servicios.
- Cumplir obligaciones legales.
- Resolver disputas.
- Hacer cumplir nuestros acuerdos.

Cuando los datos ya no sean necesarios, podrán ser eliminados o anonimizados.

---

## 9. Seguridad

Implementamos medidas razonables de seguridad para proteger la información contra:

- Acceso no autorizado.
- Alteración.
- Divulgación.
- Destrucción.

Sin embargo, ningún sistema puede garantizar seguridad absoluta.

---

## 10. Derechos del usuario

Dependiendo de la legislación aplicable, el usuario puede tener derecho a:

- Solicitar acceso a sus datos.
- Solicitar correcciones.
- Solicitar la eliminación de información.
- Retirar consentimientos previamente otorgados.
- Solicitar una copia de sus datos.

Las solicitudes pueden realizarse mediante los medios de contacto indicados en esta política.

---

## 11. Menores de edad

Nuestros servicios no están dirigidos intencionalmente a menores de 13 años.

Si descubrimos que hemos recopilado información personal de un menor sin la autorización correspondiente, tomaremos medidas razonables para eliminar dicha información.

---

## 12. Cookies y sesiones

Podemos utilizar cookies y tecnologías similares para:

- Mantener sesiones autenticadas.
- Recordar preferencias.
- Mejorar la seguridad.
- Analizar el funcionamiento de la plataforma.

El usuario puede configurar su navegador para rechazar cookies, aunque algunas funciones podrían dejar de funcionar correctamente.

---

## 13. Cambios a esta política

Podemos actualizar esta Política de Privacidad periódicamente.

Las modificaciones entrarán en vigor una vez publicadas en la plataforma.

El uso continuado de los servicios implica la aceptación de la versión vigente.

---

## 14. Contacto

Si tiene preguntas relacionadas con esta Política de Privacidad, puede contactarnos en:

**TriskCraft**  
Correo electrónico: triskcraft@hotmail.com  
Sitio web: https://triskcraft.com

---

## Declaración específica para autenticación de Minecraft

Cuando un usuario decide vincular una cuenta de Minecraft o Microsoft con TriskCraft, únicamente recopilamos la información necesaria para identificar la cuenta y verificar su propiedad.

La información obtenida se utiliza exclusivamente para:

- Identificación del jugador.
- Vinculación de cuentas.
- Gestión de permisos.
- Operación de servicios relacionados con Minecraft.

TriskCraft no vende, alquila ni comercializa esta información.`,
]

export default async function PostPage() {
    return (
        <article className='relative mx-auto w-full max-w-3xl px-4 py-10'>
            <header className='mb-8 space-y-5'>
                <h1 className='text-4xl leading-tight font-bold text-white sm:text-5xl'>
                    Política de Privacidad de TriskCraft
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
