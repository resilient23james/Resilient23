export const dynamic = 'force-static';
export default function Page() {
  return (
    <main>
      <h1>Subcontratista</h1>
      <form className="form" action="/.netlify/functions/send-lead" method="post" encType="multipart/form-data">
        <input type="hidden" name="formType" value="Subcontractor (ES)" />
        <input name="name" placeholder="Nombre" required />
        <input name="email" type="email" placeholder="Correo" required />
        <input name="phone" placeholder="Teléfono" />
        <textarea name="message" placeholder="Mensaje / Alcance" rows=6 />
        <label>Attachment <input name="file" type="file" /></label>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
