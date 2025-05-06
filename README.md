# 📱 Generador de Códigos QR con Autenticación 🔐

Aplicación web para generar, personalizar y guardar códigos QR de forma segura, moderna y eficiente. Permite a los usuarios autenticarse mediante Magic Link y almacenar sus códigos en la nube.

---

## 🚀 Tecnologías utilizadas

- **Next.js 15** – Framework React para renderizado híbrido y rutas modernas (App Router).
- **React 19** – Biblioteca para interfaces de usuario dinámicas.
- **TailwindCSS 4** – Framework de estilos utility-first.
- **Prisma ORM 6** – Acceso a base de datos tipado, seguro y con excelente DX.
- **MongoDB Atlas** – Base de datos en la nube.
- **NextAuth.js (Auth.js)** – Autenticación con Magic Link vía correo electrónico (Provedor: Resend).
- **Resend** – Envío de correos transaccionales confiable y moderno.
- **React Hook Form** – Manejo de formularios con validación eficiente.
- **qrcode.react** – Generación de códigos QR.
- **html-to-image** – Descarga/exportación de los QR como imagen.
- **Radix UI & Lucide Icons** – Componentes accesibles y diseño atractivo.
- **Sonner** – Notificaciones toast modernas.
- **SWR** – Fetching y caching de datos reactivo.

---

## ✨ Características

- 🔐 **Inicio de sesión seguro** con Magic Link (sin contraseña).
- 📦 **Guardado en la nube** de los códigos QR personalizados por el usuario.
- 🧾 **Formulario intuitivo** para crear QR desde URLs o textos.
- 🎨 **Vista previa en tiempo real** del código QR.
- 💾 **Descarga de QR como imagen** en un clic.
- 🎭 **Modo claro y oscuro** con `next-themes`.
- 📱 **Diseño responsive** y accesible con Radix UI.

---

## 🛠 Instalación local

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
npm install
npx prisma generate
npm run dev
```

Crear un archivo `.env.local` con las siguientes variables:

```env
DATABASE_URL="..."
NEXTAUTH_SECRET="..."
NEXTAUTH_URL="http://localhost:3000"
AUTH_RESEND_KEY="..."
AUTH_TRUST_HOST="true"
```

---

## 🧪 Scripts útiles

```bash
npm run dev        # Desarrollo
npm run build      # Build de producción
npm run lint       # Linter con ESLint
npx prisma studio  # Panel de Prisma
```

---

## 📦 Deploy

Este proyecto está listo para ser desplegado en **Vercel**. Solo asegúrate de configurar las variables de entorno correctamente en el panel de tu proyecto.

---

## 📄 Licencia

Este proyecto es de código abierto y se distribuye bajo la licencia MIT.

---

## 🙌 Autor

Desarrollado con esfuerzo por [Tu nombre o usuario de GitHub].  
✨ ¡Gracias por visitar y usar esta aplicación!
